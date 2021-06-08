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
  const { Common, Gutters, Layout, Styles } = useTheme();

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
          Set new password
        </Text>
        <Text
          style={{
            color: '#321C1C',
            fontSize: 16,
            fontFamily: FONT_FAMILY_GROUP.Group2,
            marginTop: 20,
          }}
        >
          Enter your new password below.
        </Text>

        <Input
          labelStyle={{ color: '#321C1C', fontSize: 13, fontWeight: '600' }}
          placeholder="******"
          label="Password"
          containerStyle={{
            marginTop: 20,
            paddingHorizontal: 0,
          }}
          inputStyle={[styles.textInput]}
          inputContainerStyle={[styles.boxInput]}
          errorStyle={{ height: 0 }}
          secureTextEntry={true}
          rightIcon={{ type: 'entypo', name: 'eye' }}
        />

        <WrapperButton
          title="Set"
          onPress={() => {
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
