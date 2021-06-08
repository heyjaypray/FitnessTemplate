import RouteNames from '../../Navigators/RouteNames';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { TagSelect } from 'react-native-tag-select';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  const data = [
    { id: 1, label: 'Core' },
    { id: 2, label: 'Plank' },
    { id: 3, label: 'HIIT' },
    { id: 4, label: 'Pilates' },
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
      image: require('../../Assets/Images/img2.png'),
      label: 'Pilates',
      follower: '2,091',
    },
    {
      id: 3,
      image: require('../../Assets/Images/img3.png'),
      label: 'Pilates',
      follower: '5,001',
    },
    {
      id: 4,
      image: require('../../Assets/Images/img.png'),
      label: 'Hatha Yoga',
      follower: '3,330',
    },
    {
      id: 5,
      image: require('../../Assets/Images/img2.png'),
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate(RouteNames.AllCourse)}
          >
            <Image
              style={styles.avatar}
              source={require('../../Assets/Images/closeSearch.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.firstName}
            placeholder={'Search'}
            placeholderTextColor={'#321C1C'}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
      </View>
      <View style={styles.containerFlat}>
        <Text style={[styles.textFLatlist]}>Popular courses</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          style={styles.flatList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.inlineContainer}>
                <ImageBackground
                  style={[styles.imgageBackgorund1]}
                  source={item.image}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <View style={styles.cardDescription}>
                    <Text style={styles.imageTitle}>{item.label}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={[styles.textFLatlist, styles.boxTextPopular]}>
          Popular searches
        </Text>
        <TagSelect
          data={data}
          itemStyle={styles.item}
          itemLabelStyle={styles.labelTag}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
      </View>
    </View>
  );
};
