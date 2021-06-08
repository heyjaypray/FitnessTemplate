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
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const ViewPlan = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          style={styles.closeLogo}
          source={require('../../Assets/Images/iconBack.png')}
        />
      </TouchableOpacity>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Plans</Text>
      </View>
    </View>
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={['rgba(125, 75, 51, 1)', 'rgba(177, 136, 98, 1)']}
        style={styles.card}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cartTitle}>Free</Text>
          <Text style={styles.cartTitleText}>Limited to 3 Premium courses</Text>
        </View>
        <Image
          style={styles.closeLogo}
          source={require('../../Assets/Images/iconWhiteCheck.png')}
        />
      </LinearGradient>
      <ImageBackground
        style={styles.imgageBackgorund}
        source={require('../../Assets/Images/imgPlans.png')}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.cardDescription}>
          <View style={styles.cardContent}>
            <Text style={styles.cartTitle}>Premium</Text>
            <Text style={styles.cartTitleText}>
              Unlimited access to premium courses
            </Text>
          </View>
          <View style={styles.cardContent1}>
            <Text style={styles.cartTitle}>$9.99</Text>
            <Text style={styles.cartTitleText}>per mth</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight + 20,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
  },
  backButton: {
    width: 12,
    height: 12,
  },
  setting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  cardContent: {
    flex: 1,
  },
  cartTitle: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
    color: '#FFFFFF',
    letterSpacing: 0.16,
  },
  cartTitleText: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 13,
    color: '#FFFFFF',
    letterSpacing: 0.32,
  },
  imgageBackgorund: {
    width: '100%',
    height: 187,
    marginTop: 16,
  },
  cardDescription: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 114,
  },
});
export default ViewPlan;
