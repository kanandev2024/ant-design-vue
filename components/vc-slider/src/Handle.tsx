import type { CSSProperties, PropType } from 'vue';
import { computed, defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import addEventListener from '../../vc-util/Dom/addEventListener';

export default defineComponent({
  name: 'Handle',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    vertical: PropTypes.looseBool,
    offset: PropTypes.number,
    disabled: PropTypes.looseBool,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    reverse: PropTypes.looseBool,
    ariaLabel: String,
    ariaLabelledBy: String,
    ariaValueTextFormatter: Function,
    onMouseenter: { type: Function as PropType<(payload: MouseEvent) => void> },
    onMouseleave: { type: Function as PropType<(payload: MouseEvent) => void> },
    onMousedown: { type: Function as PropType<(payload: MouseEvent) => void> },
  },
  setup(props, { attrs, emit, expose }) {
    const clickFocused = ref(false);
    const handle = ref();
    const handleMouseUp = () => {
      if (document.activeElement === handle.value) {
        clickFocused.value = true;
      }
    };
    const handleBlur = (e: FocusEvent) => {
      clickFocused.value = false;
      emit('blur', e);
    };
    const handleKeyDown = () => {
      clickFocused.value = false;
    };
    const focus = () => {
      handle.value?.focus();
    };
    const blur = () => {
      handle.value?.blur();
    };
    const clickFocus = () => {
      clickFocused.value = true;
      focus();
    };

    // when click can not focus in vue, use mousedown trigger focus
    const handleMousedown = (e: MouseEvent) => {
      e.preventDefault();
      focus();
      emit('mousedown', e);
    };
    expose({
      focus,
      blur,
      clickFocus,
      ref: handle,
    });
    let onMouseUpListener = null;
    onMounted(() => {
      onMouseUpListener = addEventListener(document, 'mouseup', handleMouseUp);
    });
    onBeforeUnmount(() => {
      onMouseUpListener?.remove();
    });

    const positionStyle = computed(() => {
      const { vertical, offset, reverse } = props;
      return vertical
        ? {
            [reverse ? 'top' : 'bottom']: `${offset}%`,
            [reverse ? 'bottom' : 'top']: 'auto',
            transform: reverse ? null : `translateY(+50%)`,
          }
        : {
            [reverse ? 'right' : 'left']: `${offset}%`,
            [reverse ? 'left' : 'right']: 'auto',
            transform: `translateX(${reverse ? '+' : '-'}50%)`,
          };
    });
    return () => {
      const {
        prefixCls,
        disabled,
        min,
        max,
        value,
        tabindex,
        ariaLabel,
        ariaLabelledBy,
        ariaValueTextFormatter,
        onMouseenter,
        onMouseleave,
      } = props;
      const className = classNames(attrs.class, {
        [`${prefixCls}-handle-click-focused`]: clickFocused.value,
      });

      const ariaProps = {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled,
      };
      const elStyle = {
        ...(attrs.style as CSSProperties),
        ...positionStyle.value,
      };
      let mergedTabIndex = tabindex || 0;
      if (disabled || tabindex === null) {
        mergedTabIndex = null;
      }

      let ariaValueText;
      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      const handleProps = {
        ...attrs,
        role: 'slider',
        tabindex: mergedTabIndex,
        ...ariaProps,
        class: className,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        onMousedown: handleMousedown,
        onMouseenter,
        onMouseleave,
        ref: handle,
        style: elStyle,
      };
      return (
        <div
          {...handleProps}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-valuetext={ariaValueText}
        />
      );
    };
  },
});
