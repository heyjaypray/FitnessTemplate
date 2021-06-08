import CourseScreen from '@/Containers/Course';
import ProfileScreen from '@/Containers/Profile';
import TrainingScreen from '@/Containers/Training';
import RouteNames from '@/Navigators/RouteNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const iconBottom2 = require('@/Assets/Images/iconBottom2.png');
const iconExcercise = require('@/Assets/Images/iconExcercise.png');
const iconHeart = require('@/Assets/Images/iconHeart.png');

const iconBottom = require('@/Assets/Images/iconBottom.png');
const iconExcercise2 = require('@/Assets/Images/iconExcercise2.png');
const iconHeart2 = require('@/Assets/Images/iconHeart2.png');

const tabNavigationData = [
  {
    name: RouteNames.Course,
    title: 'Course',
    component: CourseScreen,
    icon: iconBottom2,
    iconactive: iconBottom,
  },
  {
    name: RouteNames.Training,
    title: 'Training',
    component: TrainingScreen,
    icon: iconExcercise,
    iconactive: iconExcercise2,
  },
  {
    name: RouteNames.Profile,
    title: 'Profile',
    component: ProfileScreen,
    icon: iconHeart,
    iconactive: iconHeart2,
  },
];

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

export default function HomeScreen(props) {
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Training}
      tabBarOptions={{
        style: {
          position: 'absolute',
          top: height - 60,
          height: 57,
          marginHorizontal: 80,
          borderRadius: 32,
        },
      }}
    >
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarItemContainer}>
                <Image
                  resizeMode="contain"
                  source={focused ? item.iconactive : item.icon}
                  style={[
                    styles.tabBarIcon,
                    focused && styles.tabBarIconFocused,
                  ]}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  paddingBottom: 5,
                  color: focused ? '#DCAFA1' : '#968989',
                }}
              >
                {item.title}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  tabBarIcon: {
    width: 20,
    height: 20,
  },
});
