import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const CourseCompleteScreen = () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="transparent"
    />
    <Image
      style={styles.checkLogo}
      source={require('@/Assets/Images/Check.png')}
    />
    <View style={styles.inlineContainer}>
      <ImageBackground
        style={[styles.imgageBackgorund1, { marginRight: 0.42 * width }]}
        source={require('@/Assets/Images/backgroundCourseComplete.png')}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.containerContent}>
          <Text style={styles.title}>Congratulations</Text>
          <Text style={styles.titleContent}>
            You have completed this course
          </Text>
          <ImageBackground
            style={[styles.imgageBackgorund, { marginRight: 0.042 * width }]}
            source={require('@/Assets/Images/img3.png')}
            imageStyle={{ borderRadius: 8 }}
          />
        </View>
      </ImageBackground>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Explore other courses</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  checkLogo: {
    position: 'relative',
    top: 0.1 * height,
    left: 45,
  },
  title: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: '#321C1C',
  },
  titleContent: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#321C1C',
    height: 48,
    width: 279,
  },
  inlineContainer: {
    flexDirection: 'row',
    marginBottom: 55,
  },
  imgageBackgorund: {
    width: 168,
    height: 240,
    resizeMode: 'cover',
  },
  imgageBackgorund1: {
    width: width,
    height: (3 / 4) * height,
    resizeMode: 'cover',
    top: 100,
  },
  buttonContainer: {
    width: width,
    position: 'absolute',
    left: 0,
    top: height - 60,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    backgroundColor: '#321C1C',
    borderRadius: 32,
  },
  textButton: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FFFFFF',
    padding: 15,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  containerContent: {
    marginTop: 100,
    marginLeft: 45,
    justifyContent: 'flex-end',
  },
});
export default CourseCompleteScreen;
