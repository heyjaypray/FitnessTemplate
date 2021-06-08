import images from '../../Assets';
import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { useTheme } from '../../Theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import styles from './styles';

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
          fontWeight: '600',
        },
        titleStyle,
      ]}
      type="outline"
      title={title}
      {...props}
    />
  ),
);
export default ({ navigation, route, nextStep }) => {
  const { t } = useTranslation();
  const { Styles } = useTheme();

  const dispatch = useDispatch();

  return (
    <View
      style={{ flex: 1, padding: Dimens.space * 2, backgroundColor: 'white' }}
    >
      <>
        <Pressable
          style={{ position: 'absolute', top: 40, right: 40, zIndex: 1000 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.ic_close} />
        </Pressable>
        <Text
          style={{
            color: '#321C1C',
            fontWeight: '500',
            fontSize: 24,
            ...Fonts.STYLE.bold,
          }}
        >
          Forgot password
        </Text>
        <Text
          style={{
            color: '#321C1C',
            fontSize: 16,
            fontFamily: FONT_FAMILY_GROUP.Group2,
            marginTop: Dimens.space,
            lineHeight: 24,
          }}
        >
          Enter the email address that you used to sign up.{'\n\n'}We'll send
          you an email with your username and a link to reset your password.
        </Text>

        <Input
          placeholder="abc@xyz.com"
          inputStyle={styles.textInput}
          label="Email Address"
          labelStyle={{ color: '#321C1C', fontSize: 13, ...Fonts.STYLE.normal }}
          errorMessage="Wrong email. Please try again."
          containerStyle={{
            marginTop: Dimens.space * 2,
            paddingHorizontal: 0,
          }}
          inputContainerStyle={styles.boxInput}
        />

        <WrapperButton
          title="Send"
          onPress={() => {
            // navigation.navigate(RouteNames.RootApp);
            nextStep && nextStep();
          }}
          type="solid"
          buttonStyle={{
            ...Styles.button,
            backgroundColor: '#321C1C',
            borderColor: '#321C1C',
          }}
          titleStyle={{
            ...Fonts.STYLE.normal,
            fontWeight: '600',
            color: 'white',
          }}
        />
      </>
    </View>
  );
};
