import images from '../../Assets';
import RouteNames from '../../Navigators/RouteNames';
import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { useTheme } from '../../Theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

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
        <Image style={{ marginTop: 40 }} source={images.ic_reset_login} />

        <Text
          style={{
            marginTop: 40,
            color: '#321C1C',
            fontWeight: '500',
            fontSize: 24,
            ...Fonts.STYLE.bold,
          }}
        >
          All set!
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
          You have successfully set your new password. Use your new password to
          login now.
        </Text>

        <WrapperButton
          title="Log in Now"
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
            ...Fonts.STYLE.normal,
            fontWeight: '600',
            color: 'white',
          }}
        />
      </>
    </View>
  );
};
