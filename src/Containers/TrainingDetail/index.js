import Dimens from '../../Styles/Dimens';
import Fonts from '../../Styles/Fonts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Advanced from './Advanced';
import Beginer from './Beginer';
import Intermediate from './Intermediate';
import { styles } from './styles';

const Tab = createMaterialTopTabNavigator();

const TrainingDetail = ({ navigation }) => (
  <View style={styles.container}>
    <LinearGradient
      colors={['rgba(225, 190, 179, 1)', 'rgba(244, 219, 211, 1)']}
      style={styles.backBackground}
    />
    <View style={styles.header}>
      <View style={styles.iconHeader}>
        <Pressable onPress={() => navigation?.goBack()}>
          <Image
            style={styles.avatar}
            source={require('../../Assets/Images/iconWhiteBack.png')}
          />
        </Pressable>

        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image
            style={styles.avatar}
            source={require('../../Assets/Images/group25.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>Balance Yoga</Text>
    </View>
    <Tab.Navigator
      initialRouteName={'Beginer'}
      style={{ backgroundColor: 'transparent' }}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
        marginTop: Dimens.space / 2,
      }}
      tabBarOptions={{
        style: {
          height: 57,
          backgroundColor: 'transparent',
          elevation: 0,
          // shadowOpacity: 0,
          // borderBottomWidth: 0,
        },
        activeTintColor: '#FFFFFF',
        tabStyle: {
          backgroundColor: 'transparent',
          width: 'auto',
        },
        labelStyle: {
          fontFamily: Fonts.NAME.semiBold,
          fontSize: 24,
          textTransform: 'none',
          textAlign: 'center',
        },
        scrollEnabled: true,
      }}
    >
      <Tab.Screen name="Beginer" component={Beginer} />
      <Tab.Screen name="Intermediate" component={Intermediate} />
      <Tab.Screen name="Advanced" component={Advanced} />
    </Tab.Navigator>
  </View>
);
export default TrainingDetail;
