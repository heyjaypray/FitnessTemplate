import { Landing, Login } from '../Containers';
import ForgotPassword from '../Containers/ForgotPassword';
import PersonalInformation from '../Containers/PersonalInformation';
import SignUp from '../Containers/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RouteNames from './RouteNames';

const Auth = createStackNavigator();

const AuthNavigator = () => (
  <Auth.Navigator headerMode={'none'}>
    <Auth.Screen name={RouteNames.Landing} component={Landing} />
    <Auth.Screen name={RouteNames.Login} component={Login} />
    <Auth.Screen name={RouteNames.SignUp} component={SignUp} />
    <Auth.Screen
      name={RouteNames.PersonalInformation}
      component={PersonalInformation}
    />
    <Auth.Screen name={RouteNames.ForgetPassword} component={ForgotPassword} />
  </Auth.Navigator>
);

export default AuthNavigator;
