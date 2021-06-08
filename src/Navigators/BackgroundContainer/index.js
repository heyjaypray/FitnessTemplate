import { MainBackground } from '../../Components';
import RouteNames from '../../Navigators/RouteNames';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

var styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default React.memo(
  ({ style, currentRouteName, safeViewStyle, ...props }) => {
    const styleScreen = useMemo(() => {
      const name = currentRouteName;
      switch (name) {
        case RouteNames.StartUp:
        case RouteNames.Landing:
        case RouteNames.Login:
        case RouteNames.Course:
        case RouteNames.Training:
        case RouteNames.SignUp:
        case RouteNames.PersonalInformation:
          return {
            colors: ['#C5BFB1', '#C5BFB1', '#BDB7A9', '#B1ACA0'],
          };
        case RouteNames.ForgetPassword:
          return {
            colors: ['#F6F6F6', '#F6F6F6', '#F6F6F6', '#F6F6F6'],
          };
        case RouteNames.TrainingDetail:
          return {
            colors: ['#E1BEB3', '#E1BEB3', '#E1BEB3', '#E1BEB3'],
          };
        default:
          return {
            colors: ['white', 'white', 'white', 'white'],
          };
      }
    }, [currentRouteName]);
    return (
      <MainBackground style={[styles.container, style]} {...styleScreen}>
        <SafeAreaView style={[styles.safeContainer, safeViewStyle]}>
          {props.children}
        </SafeAreaView>
      </MainBackground>
    );
  },
);
