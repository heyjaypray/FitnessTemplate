import Fonts from '@/Styles/Fonts';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Fonts.NAME.default,
  },
});
