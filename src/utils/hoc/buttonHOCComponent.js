import React from 'react';

export const higherOrderComponent = (WrappedComponent, containerStyle, textStyle) => {
  const buttonHOC = () => {
    return <WrappedComponent containerStyle={containerStyle} textStyle={textStyle} />;
  };
  return buttonHOC;
};
