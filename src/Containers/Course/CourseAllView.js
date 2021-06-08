import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TagSelect } from 'react-native-tag-select';

const { width, height } = Dimensions.get('window');

const CourseAllScreen = ({ navigation }) => {
  const data = [
    { id: 1, label: 'Lastest' },
    { id: 2, label: 'Popular' },
    { id: 3, label: 'Free' },
    { id: 4, label: 'Premium' },
  ];
  const images = [
    { id: 1, image: '@/Assets/Images/img.png', label: 'Yoga' },
    { id: 2, image: '@/Assets/Images/img1.png', label: 'Pilates' },
    { id: 3, image: '@/Assets/Images/img2.png', label: 'Pilates' },
    { id: 4, image: '@/Assets/Images/img3.png', label: 'Hatha Yoga' },
    { id: 5, image: '@/Assets/Images/img3.png', label: 'Vinyasa Yoga' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.header}>
        <View style={styles.iconHeader}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Image
                style={styles.avatar}
                source={require('@/Assets/Images/iconBack.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CourseSearchScreen')}
            >
              <Image
                style={styles.avatar}
                source={require('@/Assets/Images/searchCource.png')}
              />
            </TouchableOpacity>
          </View>
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
        style={styles.flatList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.inlineContainer}
            onPress={() => navigation.navigate('CourseCompleteScreen')}
          >
            <ImageBackground
              style={[styles.imgageBackgorund1]}
              source={require('@/Assets/Images/img.png')}
              imageStyle={{ borderRadius: 8 }}
            >
              <View style={styles.cardDescription}>
                <Text style={styles.imageTitle}>{item.label}</Text>
                <Text style={styles.imageFollow}>3,291 followers</Text>
              </View>
              <Image
                style={styles.tag}
                source={require('@/Assets/Images/Tag.png')}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    marginTop: 30,
  },
  iconHeader: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  titleText: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 40,
    lineHeight: 50,
    color: '#321C1C',
    marginLeft: 24,
    marginTop: 8,
  },
  filterContainer: {
    marginTop: 12,
    // height: 40,
    paddingHorizontal: 24,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#968989',
  },
  labelTag: {
    color: '#968989',
  },
  itemSelected: {
    backgroundColor: '#321C1C',
  },
  labelSelected: {
    color: '#FFFFFF',
  },
  // -------------------------
  flatList: {
    marginTop: 5,
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inlineContainer: {
    // flex: 1,
    flexDirection: 'column',
    marginRight: 20,
    marginTop: 30,
    width: 168,
    height: 240,
  },
  imgageBackgorund1: {
    width: 0.4 * width,
    height: 0.29 * height,
    resizeMode: 'cover',
  },
  cardDescription: {
    marginLeft: 16,
    marginTop: 16,
  },
  imageTitle: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  imageFollow: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  tag: {
    left: 16,
    top: 113,
  },
});
export default CourseAllScreen;
