
import React from 'react';
export const higherOrderComponent = (WrappedComponent,containerStyle,textStyle) => {
  class buttonHOC extends React.Component {
    render() {
      return <WrappedComponent containerStyle={containerStyle} textStyle={textStyle}/>;
    }
  }
  return buttonHOC;
};