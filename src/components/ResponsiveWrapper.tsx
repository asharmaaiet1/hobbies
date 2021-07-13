import React, { Component } from 'react';

const findKey = require('lodash.findkey');

type ResponsiveWrapperProps = {
  name: string,
  breakpoints: object,
  children: any
}

type ResponsiveWrapperState = {
  orientation: string,
  breakpoint: string
}

class ResponsiveWrapper extends Component<ResponsiveWrapperProps, ResponsiveWrapperState> {
  wrapperDiv: any;
  constructor(props: ResponsiveWrapperProps) {
    super(props);
    this.state = {
      orientation: 'landscape',
      breakpoint: '',
    };
  }

  componentDidMount() {
    window.onresize = () => { this.adjustForContainerSize(); };
    this.adjustForContainerSize();
  }

  getBreakpoint() {
    const containerSize = this.getContainerSize();
    const breakpoint = findKey(this.props.breakpoints, (ar: any) => {
      const firstPass = containerSize >= ar[0];
      return (firstPass && (ar[1] === '~' || containerSize <= ar[1]));
    });

    return breakpoint || '';
  }

  getContainerSize() {
    return this.wrapperDiv.clientWidth;
  }

  getOrientation() { // eslint-disable-line class-methods-use-this
    // eslint-disable-next-line no-undef
    return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
  }

  adjustForContainerSize() {
    const orientation = this.getOrientation();
    const breakpoint = this.getBreakpoint();
    const containerSize = this.getContainerSize();

    this.setState({
      orientation,
      breakpoint,
    });

    return containerSize;
  }

  render() {
    const { orientation, breakpoint } = this.state;
    const { children, name } = this.props;

    return (

      <div
        className={`responsive-wrapper ${name} ${orientation} ${breakpoint}`}
        ref={(el) => { this.wrapperDiv = el; }}
      >
        {children}
      </div>

    );
  }
}

export default ResponsiveWrapper;
