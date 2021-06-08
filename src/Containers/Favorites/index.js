import Dimens from '../../Styles/Dimens';
import Fonts from '../../Styles/Fonts';
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

const { width, height } = Dimensions.get('window');

const Favorites = ({ navigation }) => {
  const images = [
    {
      id: 1,
      image: '../../Assets/Images/img.png',
      label: 'Breathing',
      time: '3:30 mins',
    },
    {
      id: 2,
      image: '../../Assets/Images/img1.png',
      label: 'Plank',
      time: '1:00 min',
    },
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.avatar}
                source={require('../../Assets/Images/iconBack.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>Favorites</Text>
      </View>
      {images == '' ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={images}
          style={styles.flatList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.inlineContainer}>
                <View style={styles.flatContainer}>
                  <Image
                    style={styles.lover}
                    source={require('../../Assets/Images/love1.png')}
                  />
                  <View style={styles.listContent}>
                    <View style={styles.listContentTop}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitle}>{item.label}</Text>
                      </View>
                      <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image
                          style={styles.avatar}
                          source={require('../../Assets/Images/heartIcon.png')}
                        />
                      </View>
                    </View>
                    <View style={styles.listContentBottom}>
                      <Image
                        style={styles.iconPlay}
                        source={require('../../Assets/Images/Play.png')}
                      />
                      <Text style={styles.textTime}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.containerEmpty}>
          <Image
            style={styles.heartEmpty}
            source={require('../../Assets/Images/heartEmpty.png')}
          />
          <Text style={styles.emptyTitle}>Looks empty here...</Text>
          <View style={styles.emptyContentContainer}>
            <Text style={styles.emptyContent}>
              Explore our content now and start adding your favourite course and
              training here.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogOut}>
              <Text style={styles.logOutText}>Explore now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimens.space,
  },
  header: {},
  iconHeader: {
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 40,
    lineHeight: 50,
    color: '#321C1C',
    marginTop: Dimens.space / 2,
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
    paddingHorizontal: 24,
    // marginBottom: 20,
  },
  inlineContainer: {
    // flex: 1,
    flexDirection: 'column',
    marginRight: 20,
    marginTop: 30,
    width: '100%',
    // height: 240,
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
  flatContainer: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'red'
  },
  listContent: {
    //   flexDirection: 'row'
    flex: 1,
  },
  listContentTop: {
    flexDirection: 'row',
    flex: 1,
    // backgroundColor:'blue',
  },
  listContentBottom: {
    flexDirection: 'row',
  },
  lover: {
    marginRight: 16,
  },
  textTitle: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    // letterSpacing: 0.16,
    color: '#321C1C',
  },
  textTime: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.32,
    color: '#968989',
  },
  iconPlay: {
    marginRight: 8,
  },
  //   ------------------------
  containerEmpty: {
    alignItems: 'center',
    marginTop: 83,
  },
  emptyTitle: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
    // letterSpacing: 0.16,
    color: '#968989',
    marginTop: 34,
  },
  emptyContent: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#968989',
    textAlign: 'center',
  },
  emptyContentContainer: {
    width: 279,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonLogOut: {
    borderWidth: 1,
    borderColor: '#968989',
    borderRadius: 32,
    width: 279,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 48,
    marginBottom: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: '#968989',
  },
});
export default Favorites;
