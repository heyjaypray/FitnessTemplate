import images from '../../Assets';
import RouteNames from '../../Navigators/RouteNames';
import ChangeTheme from '../../Store/Theme/ChangeTheme';
import { UserSelector } from '../../Store/User';
import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { useTheme } from '../../Theme';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const WrapperButton = React.memo(
  ({ title, titleStyle, buttonStyle, ...props }) => (
    <Button
      buttonStyle={[
        {
          marginVertical: 10,
          paddingVertical: 14,
          borderWidth: 1,
          borderColor: '#321C1C',
        },
        buttonStyle,
      ]}
      titleStyle={[
        {
          textAlign: 'center',
          color: '#321C1C',
          fontFamily: Fonts.NAME.semiBold,
          padding: Dimens.space,
          fontSize: 16,
        },
        titleStyle,
      ]}
      type="outline"
      title={title}
      {...props}
    />
  ),
);
export default ({ navigation, route }) => {
  const { t } = useTranslation();
  const { Common, Gutters, Layout, Styles } = useTheme();

  const dispatch = useDispatch();

  const user = useSelector(UserSelector.getUserInfo);

  const [userId, setUserId] = useState('1');

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }));
  };

  const handleLoginPress = useCallback(() => {
    navigation?.navigate(RouteNames.Login);
  }, [navigation]);
  const handleSignUpPress = useCallback(() => {
    navigation?.navigate(RouteNames.SignUp);
  }, [navigation]);

  return (
    <ImageBackground
      style={{ flex: 1, padding: Dimens.space * 2 }}
      source={images.landing_bgr}
    >
      <>
        <Text
          textBreakStrategy="simple"
          style={{
            color: '#321C1C',
            fontFamily: Fonts.NAME.semiBold,
            width: '75%',
            // lineHeight: 50,
            fontSize: 40,
          }}
        >
          Personal fitness companion at home
        </Text>
        <Text
          style={{
            marginTop: Dimens.space,
            width: '85%',
            color: '#321C1C',
            fontFamily: FONT_FAMILY_GROUP.Group2,
            fontSize: 20,
            lineHeight: 30,
          }}
        >
          Access to yoga and pilates courses organised for your convenience
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <WrapperButton
            title="Sign Up"
            buttonStyle={Styles.button}
            onPress={handleSignUpPress}
          />
          <WrapperButton
            icon={{
              type: 'zocial',
              name: 'facebook',
              size: 15,
              color: 'white',
            }}
            title="Connect with Facebook"
            type="solid"
            buttonStyle={{
              ...Styles.button,
              backgroundColor: '#0F4FAF',
              borderColor: '#0F4FAF',
            }}
            titleStyle={{
              color: 'white',
            }}
          />
          <Text
            style={{
              color: '#321C1C',
              letterSpacing: 0.02,
              textAlign: 'center',
              fontFamily: FONT_FAMILY_GROUP.Group2,
              fontSize: 13,
            }}
          >
            Already a member?{' '}
            <Text style={{ fontWeight: 'bold' }} onPress={handleLoginPress}>
              Log in
            </Text>{' '}
            now
          </Text>
        </View>
      </>
    </ImageBackground>
  );
};
