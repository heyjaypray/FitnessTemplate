import images from '../../Assets';
import RouteNames from '../../Navigators/RouteNames';
import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { calculateImageFixParent } from '../../Utils/utils';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimens.screenSize;

const CourseScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.imgageBackgorund}
          source={require('../../Assets/Images/img4.png')}
          imageStyle={{ width: width, height: (2 * height) / 3 }}
        >
          <>
            <View style={styles.header}>
              <TouchableOpacity style={styles.avatar}>
                <Image source={require('../../Assets/Images/avatar.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.toast}>
                <Image source={require('../../Assets/Images/Toast.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.search}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Image source={require('../../Assets/Images/iconSearch.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
              <Text style={[styles.titleContainer, styles.title]}>
                Get into shape before the lockdown ends
              </Text>
              <View style={styles.contentCotainer}>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Popular</Text>
                  <Pressable
                    onPress={() => navigation?.navigate(RouteNames.AllCourse)}
                  >
                    <Text style={styles.viewALl}>View all</Text>
                  </Pressable>
                </View>
                <View style={styles.inlineContainer}>
                  <ImageBackground
                    style={[
                      styles.imgageBackgorund1,
                      { marginRight: 0.0426 * width },
                    ]}
                    source={require('../../Assets/Images/img3.png')}
                    imageStyle={{ borderRadius: 8 }}
                  >
                    <View style={styles.cardDescription}>
                      <Text style={styles.imageTitle}>Yoga</Text>
                      <Text style={styles.imageFollow}>3,291 followers</Text>
                    </View>
                    <Image
                      style={styles.tag}
                      source={require('../../Assets/Images/Tag.png')}
                    />
                  </ImageBackground>
                  <ImageBackground
                    style={styles.imgageBackgorund1}
                    source={require('../../Assets/Images/img1.png')}
                    imageStyle={{ borderRadius: 8 }}
                  >
                    <View style={styles.cardDescription}>
                      <Text style={styles.imageTitle}>Pilates</Text>
                      <Text style={styles.imageFollow}>3,291 followers</Text>
                    </View>
                    <Image
                      style={styles.tag}
                      source={require('../../Assets/Images/Tag.png')}
                    />
                  </ImageBackground>
                </View>
              </View>
              <View style={[styles.contentCotainer, { marginTop: 44 }]}>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Just For You</Text>
                  <TouchableOpacity>
                    <Text style={[styles.viewALl, { color: '#DCAFA1' }]}>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                  <ImageBackground
                    style={[
                      styles.imgageBackgorund1,
                      { marginRight: 0.0426 * width },
                    ]}
                    source={require('../../Assets/Images/img.png')}
                    imageStyle={{ borderRadius: 8 }}
                  >
                    <View style={styles.cardDescription}>
                      <Text style={styles.imageTitle}>Hatha Yoga</Text>
                      <Text style={styles.imageFollow}>3,291 followers</Text>
                    </View>
                    <Image
                      style={styles.tag}
                      source={require('../../Assets/Images/Tag.png')}
                    />
                  </ImageBackground>
                  <ImageBackground
                    style={styles.imgageBackgorund1}
                    source={require('../../Assets/Images/img2.png')}
                    imageStyle={{ borderRadius: 8 }}
                  >
                    <View style={styles.cardDescription}>
                      <Text style={styles.imageTitle}>Hot Yoga</Text>
                      <Text style={styles.imageFollow}>3,291 followers</Text>
                    </View>
                    <Image
                      style={styles.tag}
                      source={require('../../Assets/Images/Tag.png')}
                    />
                  </ImageBackground>
                </View>
              </View>
              <View style={[styles.contentCotainer, { marginTop: 44 }]}>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Newly Added</Text>
                  <TouchableOpacity>
                    <Text style={[styles.viewALl, { color: '#321C1C' }]}>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                  <ImageBackground
                    style={[
                      styles.imgageBackgorund1,
                      { marginRight: 0.0426 * width },
                    ]}
                    source={require('../../Assets/Images/img.png')}
                    imageStyle={{ borderRadius: 8 }}
                  >
                    <View style={styles.cardDescription}>
                      <Text style={styles.imageTitle}>Vinyasa Yoga</Text>
                      <Text style={styles.imageFollow}>3,291 followers</Text>
                    </View>
                    <Image
                      style={styles.tag}
                      source={require('../../Assets/Images/Tag.png')}
                    />
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
          </>
        </ImageBackground>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
        }}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={[styles.prompt]} source={images.prompt} />
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Image
                style={styles.closeLogo}
                source={require('../../Assets/Images/whiteClose.png')}
              />
            </TouchableOpacity>
            <Text style={styles.promptTitle}>Subscribe to premium</Text>
            <Text style={styles.promptContent}>
              Enjoy unlimited access to our premium content
            </Text>
            <TouchableOpacity style={styles.openButton}>
              <Text style={styles.textStyle}>Unlock Premium for $9.90</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalViewSize = {
  width: width - Dimens.space * 2,
  height: 0,
};

const imageViewSize = calculateImageFixParent(
  { widthParent: modalViewSize.width, heighParent: modalViewSize.height },
  images.prompt,
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  imgageBackgorund: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: Dimens.space,
  },
  avatar: {},
  search: {},
  toast: {},
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: Dimens.space,
  },
  titleContainer: {
    width: '65%',
    marginTop: 16,
    marginBottom: 96,
  },
  title: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    flex: 1,
  },
  viewALl: {
    fontFamily: FONT_FAMILY_GROUP.Group2,
    letterSpacing: 0.32,
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  inlineContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  imgageBackgorund1: {
    width: 0.448 * width,
    height: 0.29 * height,
    resizeMode: 'cover',
  },
  cardDescription: {
    marginLeft: 16,
    marginTop: 16,
  },
  imageTitle: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#FFFFFF',
    textShadowColor: '0 0 4 rgba(0, 0, 0, 0.15)',
  },
  imageFollow: {
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#FFFFFF',
    textShadowColor: '0 0 4 rgba(0, 0, 0, 0.15)',
  },
  tag: {
    position: 'absolute',
    left: Dimens.space,
    bottom: Dimens.space,
  },
  //   ------------------
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: modalViewSize.width,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingBottom: Dimens.space,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderWidth: 1,
    borderColor: '#A48F71',
    borderRadius: 20,
    height: 37,
    width: 199,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  textStyle: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    color: '#A48F71',
  },
  prompt: {
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: imageViewSize.fixWidth,
    height: imageViewSize.fixHeight,
  },
  promptTitle: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    textAlign: 'center',
    color: '#A48F71',
    marginTop: 24,
  },
  promptContent: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    textAlign: 'center',
    color: '#321C1C',
    paddingHorizontal: 40,
    marginTop: 8,
  },
  close: {
    position: 'absolute',
    top: 15,
    padding: Dimens.space / 2,
    left: '90%',
  },
  closeLogo: {
    resizeMode: 'cover',
  },
});
export default CourseScreen;
