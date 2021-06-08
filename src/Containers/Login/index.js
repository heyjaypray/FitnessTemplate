import images from '../../Assets';
import RouteNames from '../../Navigators/RouteNames';
import { UserSelector } from '../../Store/User';
import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { useTheme } from '../../Theme';
import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const toastConfig = {
  success: () => {},
  error: () => {},
  info: () => {},
  touch_id: () => <Image source={images.face_id_bgr} />,
};
const WrapperButton = React.memo(
  ({ title, titleStyle, buttonStyle, ...props }) => (
    <Button
      containerStyle={{ marginVertical: 25 }}
      buttonStyle={[
        {
          paddingVertical: 15,
          borderWidth: 1,
          borderColor: '#321C1C',
        },
        buttonStyle,
      ]}
      titleStyle={[
        {
          textAlign: 'center',
          color: '#321C1C',
          padding: 10,
          fontSize: 16,
          fontFamily: Fonts.NAME.semiBold,
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
  const dispatch = useDispatch();
  const { Styles } = useTheme();

  const user = useSelector(UserSelector.getUserInfo);

  const [userId, setUserId] = useState('1');

  return (
    <ImageBackground
      style={{ flex: 1, padding: Dimens.space * 2 }}
      source={images.login_bgr}
    >
      <>
        <Pressable
          style={{ position: 'absolute', top: 50, right: 40 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.ic_close} />
        </Pressable>
        <Text
          style={{
            fontFamily: Fonts.NAME.semiBold,
            color: '#321C1C',
            fontSize: 40,
          }}
        >
          Welcome
        </Text>
        <Input
          placeholder="abc@xyz.com"
          inputStyle={styles.textInput}
          label="Email Address"
          labelStyle={{
            color: '#321C1C',
            fontSize: 13,
            fontFamily: Fonts.NAME.semiBold,
          }}
          errorMessage="Wrong email. Please try again."
          containerStyle={{
            marginTop: 40,
            paddingHorizontal: 0,
          }}
          inputContainerStyle={styles.boxInput}
        />
        <Input
          placeholder="******"
          label="Password"
          containerStyle={{
            marginTop: Dimens.space,
            paddingHorizontal: 0,
          }}
          labelStyle={{
            color: '#321C1C',
            fontSize: 13,
            fontFamily: Fonts.NAME.semiBold,
          }}
          secureTextEntry={true}
          inputStyle={[styles.textInput]}
          inputContainerStyle={[styles.boxInput]}
          errorStyle={{ height: 0 }}
          rightIcon={{ type: 'entypo', name: 'eye' }}
        />
        <Pressable
          onPress={() => navigation.navigate(RouteNames.ForgetPassword)}
        >
          <Text
            style={{
              color: '#321C1C',
              fontSize: 13,
              fontFamily: FONT_FAMILY_GROUP.Group2,
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
            }}
          >
            Forgot password?
          </Text>
        </Pressable>

        <WrapperButton
          title="Login"
          onPress={() => {
            navigation.navigate(RouteNames.RootApp);
          }}
          type="solid"
          buttonStyle={{
            ...Styles.button,
            backgroundColor: '#321C1C',
            borderColor: '#321C1C',
          }}
          titleStyle={{
            color: 'white',
          }}
        />
        <Pressable onPress={() => Toast.show({ type: 'touch_id' })}>
          <Image source={images.touch_btn} style={{ alignSelf: 'center' }} />
        </Pressable>
        <Toast
          autoHide={true}
          config={toastConfig}
          position="bottom"
          ref={(ref) => Toast.setRef(ref)}
        />
      </>
    </ImageBackground>
  );
};
