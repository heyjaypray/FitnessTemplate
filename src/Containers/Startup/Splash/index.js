import RouteNames from '../../../Navigators/RouteNames';
import { UserSelector } from '../../../Store/User';
import { useTheme } from '../../../Theme';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const Splash = (props) => {
  const { Layout, Gutters, Fonts } = useTheme();
  const navigation = useNavigation();

  const { t } = useTranslation();

  const { isChecking, isExisted } = useSelector(UserSelector.checkAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isExisted && !isChecking) navigation.navigate(RouteNames.RootApp);
    if (!isExisted && !isChecking) navigation.navigate(RouteNames.RootAuth);
  }, [isExisted, isChecking]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  );
};

export default React.memo(Splash);
