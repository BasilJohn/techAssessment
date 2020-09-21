/**
 * @format
 * @flow strict-local
 */
import React from 'react';

export const higherOrderComponent = (WrappedComponent:any,
  containerStyle:Object, textStyle:Object) => {
  const buttonHOC = () => (
    <WrappedComponent containerStyle={containerStyle} textStyle={textStyle} />
  );
  return buttonHOC;
};
