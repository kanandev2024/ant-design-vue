
import InkTabBarMixin from './InkTabBarMixin'
import ScrollableTabBarMixin from './ScrollableTabBarMixin'
import TabBarMixin from './TabBarMixin'
import BaseMixin from '../../_util/BaseMixin'

export default {
  name: 'ScrollableInkTabBar',
  mixins: [TabBarMixin, InkTabBarMixin, ScrollableTabBarMixin, BaseMixin],
  render (h) {
    const inkBarNode = this.getInkBarNode()
    const tabs = this.getTabs(h)
    const scrollbarNode = this.getScrollBarNode([inkBarNode, tabs])
    return this.getRootNode(scrollbarNode, h)
  },
}

