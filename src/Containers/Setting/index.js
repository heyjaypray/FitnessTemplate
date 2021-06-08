import RouteNames from '../../Navigators/RouteNames';
import Dimens from '../../Styles/Dimens';
import { useHeaderHeight } from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SettingScreen = ({ navigation }) => {
  const heightHeader = useHeaderHeight();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={require('../../Assets/Images/iconBack.png')} />
        </TouchableOpacity>
        <Text style={[styles.settingText, styles.setting]}>Settings</Text>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.textInputContainer}>
          <Text style={styles.firstName}>Account</Text>
          <TouchableOpacity
            style={styles.planButton}
            onPress={() => navigation.navigate(RouteNames.ViewPlan)}
          >
            <Text style={styles.textPlans}>View plans</Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(125, 75, 51, 1)', 'rgba(177, 136, 98, 1)']}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cartTitle}>Free</Text>
            <Text style={styles.cartTitleText}>
              Limited to 3 Premium courses
            </Text>
          </View>
          <Image
            style={styles.closeLogo}
            source={require('../../Assets/Images/iconWhiteCheck.png')}
          />
        </LinearGradient>
        <View>
          <View style={styles.textInputContainer}>
            <Text style={styles.firstName}>Profile</Text>
          </View>

          <TouchableOpacity
            style={styles.textInputContainer1}
            onPress={() => navigation.navigate(RouteNames.PersonalParticulars)}
          >
            <>
              <Text style={styles.firstName1}>Personal particulars</Text>
              <Image
                style={styles.iconList}
                source={require('../../Assets/Images/iconList.png')}
              />
            </>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textInputContainer1}
            onPress={() => navigation.navigate(RouteNames.Favorites)}
          >
            <>
              <Text style={styles.firstName1}>Favorites</Text>
              <Image
                style={styles.iconList}
                source={require('../../Assets/Images/iconList.png')}
              />
            </>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.textInputContainer}>
            <Text style={styles.firstName}>Notification</Text>
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>Email address</Text>
            <Switch
              trackColor={{ false: '#E2E2E2', true: '#321C1C' }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>SMS</Text>
            <Switch
              trackColor={{ false: '#E2E2E2', true: '#321C1C' }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>
        <View>
          <View style={styles.textInputContainer}>
            <Text style={styles.firstName}>App Security</Text>
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>Change Password</Text>
            <TouchableOpacity>
              <Image
                style={styles.iconList}
                source={require('../../Assets/Images/iconList.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>Enable Face / Touch ID</Text>
            <Switch
              trackColor={{ false: '#E2E2E2', true: '#321C1C' }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>
        <View>
          <View style={styles.textInputContainer}>
            <Text style={styles.firstName}>Others</Text>
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>Rate us</Text>
            <TouchableOpacity>
              <Image
                style={styles.iconList}
                source={require('../../Assets/Images/iconList.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer1}>
            <Text style={styles.firstName1}>App version</Text>
            <Text style={styles.version}>1.1.2</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogOut}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: Dimens.space,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: Dimens.space,
    alignItems: 'center',
  },
  backButton: {
    width: 12,
    height: 12,
  },
  setting: {
    flex: 1,
  },
  settingText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    textAlign: 'center',
  },
  textInputContainer: {
    marginTop: 40,
    borderColor: '#968989',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  textInputContainer1: {
    marginTop: 21,
    borderColor: '#968989',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  firstName: {
    flex: 1,
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#321C1C',
    display: 'flex',
    alignItems: 'center',
  },
  firstName1: {
    flex: 1,
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    color: '#321C1C',
    letterSpacing: 0.32,
    alignItems: 'center',
  },
  textPlans: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    fontWeight: 'normal',
    lineHeight: 26,
    color: '#DCAFA1',
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
  iconList: {
    marginRight: 5,
  },
  version: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    fontWeight: 'normal',
    lineHeight: 13,
    color: '#968989',
    letterSpacing: 0.32,
  },
  buttonLogOut: {
    borderWidth: 1,
    borderColor: '#968989',
    borderRadius: 20,
    width: 82,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
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
export default SettingScreen;
