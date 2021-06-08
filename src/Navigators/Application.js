import { IndexStartupContainer } from '../Containers';
import AllCourses from '../Containers/AllCourses';
import CoursesDetail from '../Containers/CoursesDetail';
import CoursesSearch from '../Containers/CoursesSearch';
import Favorites from '../Containers/Favorites';
import PersonalParticulars from '../Containers/PersonalParticulars';
import SettingScreen from '../Containers/Setting';
import TrainingDetail from '../Containers/TrainingDetail';
import ViewPlan from '../Containers/ViewPlan';
import { navigationRef } from '../Navigators/Root';
import { useTheme } from '../Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { useSelector } from 'react-redux';
import AuthNavigator from './Auth';
import BackgroundContainer from './BackgroundContainer';
import RouteNames from './RouteNames';

const Stack = createStackNavigator();

let MainNavigator;

// @refresh reset
const ApplicationNavigator = () => {
  const routeNameRef = React.useRef('');
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false);
  const applicationIsLoading = useSelector((state) => state.startup.loading);
  const [routeName, setRouteName] = useState(routeNameRef.current);

  const handleStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
    setRouteName(routeNameRef.current);
    // console.log('CCCC', routeNameRef.current);
  }, [navigationRef.current, routeNameRef.current]);

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('../Navigators/Main').default;
      setIsApplicationLoaded(true);
    }
  }, [applicationIsLoading]);

  return (
    <AppearanceProvider>
      <BackgroundContainer
        style={[Layout.fill, { backgroundColor: colors.card }]}
        currentRouteName={routeName}
      >
        <NavigationContainer
          theme={NavigationTheme}
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={handleStateChange}
        >
          <StatusBar
            barStyle={darkMode ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
            translucent={true}
          />
          <Stack.Navigator
            headerMode={'none'}
            // initialRouteName={RouteNames.StartUp}
          >
            {/* <Stack.Screen
              name={RouteNames.Profile}
              component={ProfileScreen}
              options={{
                animationEnabled: false,
              }}
            /> */}
            <Stack.Screen
              name={RouteNames.StartUp}
              component={IndexStartupContainer}
            />

            <Stack.Screen
              name={RouteNames.RootAuth}
              component={AuthNavigator}
              options={{
                animationEnabled: false,
              }}
            />
            {isApplicationLoaded && (
              <>
                <Stack.Screen
                  name={RouteNames.RootApp}
                  component={MainNavigator}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.AllCourse}
                  component={AllCourses}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.SearchCourse}
                  component={CoursesSearch}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.CourseDetail}
                  component={CoursesDetail}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.TrainingDetail}
                  component={TrainingDetail}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.Setting}
                  component={SettingScreen}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.ViewPlan}
                  component={ViewPlan}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.PersonalParticulars}
                  component={PersonalParticulars}
                  options={{
                    animationEnabled: false,
                  }}
                />
                <Stack.Screen
                  name={RouteNames.Favorites}
                  component={Favorites}
                  options={{
                    animationEnabled: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </BackgroundContainer>
    </AppearanceProvider>
  );
};

export default ApplicationNavigator;
