/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common,Styles, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors, FontStyle }) {
  return StyleSheet.create({
    button: {
      borderRadius: 32,
    },
    text: {
      ...FontStyle.normal,
      fontSize: FontSize.normal,
    },
  });
}
