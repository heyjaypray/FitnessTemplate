import RouteNames from '../../Navigators/RouteNames';
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
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.header}>
        <View style={styles.iconHeader}>
          <TouchableOpacity style={{ flex: 1 }} onPress={navigation?.goBack}>
            <Image
              style={styles.avatar}
              source={require('../../Assets/Images/iconBack.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate(RouteNames.SearchCourse)}
          >
            <Image
              style={styles.avatar}
              source={require('../../Assets/Images/searchCource.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Courses</Text>
      </View>
      <View style={styles.filterContainer}>
        <TagSelect
          data={data}
          itemStyle={styles.item}
          itemLabelStyle={styles.labelTag}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={images}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.inlineContainer}
              onPress={() => navigation.navigate(RouteNames.CourseDetail)}
            >
              <ImageBackground
                style={styles.imgageBackgorund1}
                source={item.image}
                imageStyle={{ borderRadius: 8 }}
              >
                <View style={styles.cardDescription}>
                  <Text style={styles.imageTitle}>{item.label}</Text>
                  <Text style={styles.imageFollow}>
                    {item.follower} followers
                  </Text>
                </View>
                <Image
                  style={styles.tag}
                  source={require('../../Assets/Images/Tag.png')}
                />
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
