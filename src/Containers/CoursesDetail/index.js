import RouteNames from '../..//Navigators/RouteNames';
import Dimens from '../../Styles/Dimens';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { TagSelect } from 'react-native-tag-select';
import styles from './styles';
import Detail from './Detail';
import { Icon } from 'react-native-elements';
const { width, height } = Dimens.screenSize;
const data = [
  { id: 1, label: 'Lastest' },
  { id: 2, label: 'Popular' },
  { id: 3, label: 'Free' },
  { id: 4, label: 'Premium' },
];
const images = [
  {
    id: 1,
    image: require('../../Assets/Images/img.png'),
    label: 'Yoga',
    follower: '3,291',
  },
  {
    id: 2,
    image: require('../../Assets/Images/img.png'),
    label: 'Pilates',
    follower: '2,091',
  },
  {
    id: 3,
    image: require('../../Assets/Images/img2.png'),
    label: 'Pilates',
    follower: '5,001',
  },
  {
    id: 4,
    image: require('../../Assets/Images/img3.png'),
    label: 'Hatha Yoga',
    follower: '3,330',
  },
  {
    id: 5,
    image: require('../../Assets/Images/img3.png'),
    label: 'Vinyasa Yoga',
    follower: '1022',
  },
  {
    id: 6,
    image: require('../../Assets/Images/img3.png'),
    label: 'Hito Yoga',
    follower: '5022',
  },
];

export default ({ navigation }) => {
  return (
    <ImageBackground
      style={[styles.imgageBackgorund, styles.container]}
      source={require('../../Assets/Images/imgHolder.png')}
      imageStyle={{ width: width, height: (2 * height) / 3 }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation?.goBack}>
          <Icon
            size={28}
            type="ionicon"
            name="chevron-back-outline"
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>Yoga</Text>
      <Image
        style={styles.userFollower}
        source={require('../../Assets/Images/userFollower.png')}
      />

      <Detail style={styles.detail} />
    </ImageBackground>
  );
};
