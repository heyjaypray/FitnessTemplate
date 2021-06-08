import images from '../../Assets';
import ChangeTheme from '../../Store/Theme/ChangeTheme';
import { UserSelector } from '../../Store/User';
import { useTheme } from '../../Theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, Pressable, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import styles from './styles';
import Toast from 'react-native-toast-message';
import RouteNames from '../../Navigators/RouteNames';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import constate from 'constate';
import ForgotPassword from './ForgotPassword';
import SetNewPassword from './SetNewPassword';
import AllSet from './AllSet';

const useSteps = ({ initialStep = 0 }) => {
  const [step, setStep] = useState(initialStep);
  const nextStep = () => setStep((prevCount) => prevCount + 1);
  return { step, nextStep };
};
const [StepsProvider, useStepsContext] = constate(useSteps);
const Container = ({ navigation }) => {
  const { step, nextStep } = useStepsContext();

  return (
    <>
      {step == 0 && (
        <ForgotPassword nextStep={nextStep} navigation={navigation} />
      )}
      {step == 1 && (
        <SetNewPassword nextStep={nextStep} navigation={navigation} />
      )}
      {step == 2 && <AllSet navigation={navigation} />}
    </>
  );
};
export default ({ navigation, route }) => {
  // const { step } = useStepsContext();

  return (
    <StepsProvider initialStep={0}>
      <Container navigation={navigation} />
    </StepsProvider>
  );
  // return <View />;
};
