import images from '../../../Assets';
import OnBoardingStartUp from '../../../Store/Startup/OnBoarding';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AppIntro from 'rn-falcon-app-intro';
import styles from './styles';

const OnBoarding = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const handleSkipPress = useCallback(() => {
    dispatch(OnBoardingStartUp.action(true));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <AppIntro
        leftTextColor={'black'}
        activeDotColor={'black'}
        rightTextColor={'black'}
        dotColor={'#968989'}
        onSkipBtnClick={handleSkipPress}
        onDoneBtnClick={handleSkipPress}
      >
        <ImageBackground style={{ flex: 1 }} source={images.intro_bgr}>
          <>
            <Text
              style={{
                color: '#321C1C',
                padding: 10,
                fontWeight: '500',
                fontSize: 40,
              }}
            >
              Personal guided courses
            </Text>
            <Text
              style={{
                color: '#321C1C',
                padding: 10,
                fontSize: 20,
              }}
            >
              Access to yoga and pilates courses organised for your convenience
            </Text>
            <Pressable
              style={{
                width: '40%',
                borderRadius: 32,
                margin: 10,
                borderWidth: 1,
                borderColor: '#321C1C',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#321C1C',
                  padding: 10,
                  fontWeight: '500',
                }}
              >
                Get Started Now
              </Text>
            </Pressable>
          </>
        </ImageBackground>
        <ImageBackground style={{ flex: 1 }} source={images.intro_bgr} />
        <ImageBackground style={{ flex: 1 }} source={images.intro_bgr} />
      </AppIntro>
    </View>
  );
};

export default React.memo(OnBoarding);
