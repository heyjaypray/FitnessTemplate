import { useTheme } from '../../Theme';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import OnBoarding from './OnBoarding';
import Splash from './Splash';

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const displayedOnBoarding = useSelector(
    (state) => state.startup.displayOnBoarding,
  );

  useEffect(() => {
    // dispatch(InitStartup.action());
  }, [dispatch]);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      {displayedOnBoarding ? <Splash /> : <OnBoarding />}
    </View>
  );
};

export default IndexStartupContainer;
