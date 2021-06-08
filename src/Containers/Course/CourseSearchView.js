import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TagSelect } from 'react-native-tag-select';

const { width, height } = Dimensions.get('window');

const CourseSearchScreen = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  const data = [
    { id: 1, label: 'Core' },
    { id: 2, label: 'Plank' },
    { id: 3, label: 'HIIT' },
    { id: 4, label: 'Pilates' },
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
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CourseAllScreen')}
            >
              <Image
                style={styles.avatar}
                source={require('@/Assets/Images/closeSearch.png')}
              />
            </TouchableOpacity>
          </View>
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
        <Text style={[styles.textFLatlist, { marginLeft: 32 }]}>
          Popular courses
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          style={styles.flatList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.inlineContainer}>
              <ImageBackground
                style={[styles.imgageBackgorund1]}
                source={require('@/Assets/Images/img.png')}
                imageStyle={{ borderRadius: 8 }}
              >
                <View style={styles.cardDescription}>
                  <Text style={styles.imageTitle}>{item.label}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text
          style={[styles.textFLatlist, { marginLeft: 8, marginBottom: 24 }]}
        >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    marginTop: 30,
    marginBottom: 24,
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
    marginBottom: 20,
    paddingHorizontal: 32,
    marginRight: 16,
  },
  inlineContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
    marginRight: 16,
  },
  imgageBackgorund1: {
    width: 0.35 * width,
    height: 0.2 * height,
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
  label: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    flex: 1,
  },
  viewALl: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    letterSpacing: 0.32,
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
    marginRight: 32,
  },
  textInputContainer: {
    marginTop: 23.6,
    borderColor: '#321C1C',
    borderBottomWidth: 0.5,
    width: 0.85 * width,
    marginLeft: 32,
  },
  firstName: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 38,
    color: '#321C1C',
    display: 'flex',
    alignItems: 'center',
  },
  textFLatlist: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#321C1C',
  },
});
export default CourseSearchScreen;
