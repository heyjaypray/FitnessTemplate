import React from 'react';
import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
export default React.memo(({ style, ...props }) => (
  <LinearGradient
    style={[styles.linearGradient, style]}
    colors={[
      'rgba(197,191,177,0.5)',
      'rgba(197,191,177,0.5)',
      'rgba(189,183,169,0.5)',
      'rgba(177,172,160,0.5)',
    ]}
    start={{ x: 0, y: 0 }}
    locations={[0, 0.25, 0.75, 1]}
    end={{ x: 1, y: 0 }}
    {...props}
  >
    {props.children}
  </LinearGradient>
));
