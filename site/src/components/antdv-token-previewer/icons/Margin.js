import { createVNode } from 'vue';

function Margin(props) {
  return /*#__PURE__*/ createVNode(
    'svg',
    Object.assign(
      {
        width: '1em',
        height: '1em',
        viewBox: '0 0 16 17',
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
      },
      props,
      {
        style: Object.assign(
          {
            verticalAlign: '-0.125em',
          },
          props.style,
        ),
        className: ['nanqu-token-panel-icon', props.className].filter(Boolean).join(' '),
      },
    ),
    /*#__PURE__*/ createVNode(
      'g',
      {
        id: 'Margin-\u9875\u9762-1',
        stroke: 'none',
        strokeWidth: 1,
        fill: 'none',
        fillRule: 'evenodd',
      },
      /*#__PURE__*/ createVNode(
        'g',
        {
          id: 'Margin-margin',
          transform: 'translate(0.000000, 0.942377)',
          fill: 'currentColor',
          fillRule: 'nonzero',
        },
        /*#__PURE__*/ createVNode('rect', {
          id: 'Margin-\u77E9\u5F62',
          opacity: 0,
          x: 0,
          y: 0,
          width: 16,
          height: 15.9807923,
        }),
        /*#__PURE__*/ createVNode('path', {
          d: 'M11.6666667,2.75858915 L4.33333333,2.75858915 C4.01904762,2.75858915 3.80952382,2.54931688 3.80952382,2.23540845 C3.80952382,1.92150003 4.01904763,1.71222775 4.33333334,1.71222775 L11.6666667,1.71222775 C11.9809524,1.71222775 12.1904762,1.92150003 12.1904762,2.23540845 C12.1904762,2.54931688 11.9809524,2.75858915 11.6666667,2.75858915 Z M11.6666667,14.2685646 L4.33333333,14.2685646 C4.01904762,14.2685646 3.8095238,14.0592923 3.8095238,13.7453839 C3.8095238,13.4314755 4.01904762,13.2222032 4.33333333,13.2222032 L11.6666667,13.2222032 C11.9809524,13.2222032 12.1904762,13.4314755 12.1904762,13.7453839 C12.1904762,14.0592923 11.9809524,14.2685646 11.6666667,14.2685646 Z M13.7619048,12.1758418 C13.447619,12.1758418 13.2380952,11.9665695 13.2380952,11.6526611 L13.2380952,4.32813125 C13.2380952,4.01422283 13.4476191,3.80495055 13.7619048,3.80495055 C14.0761905,3.80495055 14.2857143,4.01422283 14.2857143,4.32813125 L14.2857143,11.6526611 C14.2857143,11.9665695 14.0761905,12.1758418 13.7619048,12.1758418 Z M2.23809524,12.1758418 C1.92380953,12.1758418 1.71428572,11.9665695 1.71428572,11.6526611 L1.71428572,4.32813125 C1.71428572,4.01422283 1.92380953,3.80495055 2.23809524,3.80495055 C2.55238096,3.80495055 2.76190477,4.01422283 2.76190477,4.32813125 L2.76190477,11.6526611 C2.76190477,11.9665695 2.55238096,12.1758418 2.23809524,12.1758418 Z M11.6666667,12.1758418 L4.33333333,12.1758418 C4.01904762,12.1758418 3.8095238,11.9665695 3.8095238,11.6526611 L3.8095238,4.32813125 C3.8095238,4.01422283 4.01904763,3.80495055 4.33333334,3.80495055 L11.6666667,3.80495055 C11.9809524,3.80495055 12.1904762,4.01422283 12.1904762,4.32813125 L12.1904762,11.6526611 C12.1904762,11.9665695 11.9809524,12.1758418 11.6666667,12.1758418 Z M4.85714286,11.1294804 L11.1428571,11.1294804 L11.1428571,4.85131196 L4.85714286,4.85131196 L4.85714286,11.1294804 Z',
          id: 'Margin-\u5F62\u72B6',
        }),
      ),
    ),
  );
}

export default Margin;
