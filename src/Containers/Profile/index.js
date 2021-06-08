import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Overlay,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import WeekSelector from 'react-native-week-selector';
import { TagSelect } from 'react-native-tag-select';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
import { styles } from './styles';
import Dimens from '../../Styles/Dimens';
import RouteNames from '../../Navigators/RouteNames';

const { width, height } = Dimens.screenSize;
const dataTag = [
  { id: 1, label: 'kCal' },
  { id: 2, label: 'Time' },
];
const data = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const ProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.header}>
        <View style={styles.settingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteNames.Setting)}
          >
            <Image
              style={styles.closeLogo}
              source={require('../../Assets/Images/Settings.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inforContainer}>
          <TouchableOpacity>
            <Image
              style={styles.avatar}
              source={require('../../Assets/Images/avatarProfile.png')}
            />
          </TouchableOpacity>
          <Text style={styles.nickName}>Samantha Tan</Text>
          <View style={styles.levelContainer}>
            <TouchableOpacity style={styles.levelButton}>
              <Text style={styles.level}>PREMIUM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.numberInforContainer}>
          <View style={styles.inforContent}>
            <Text style={styles.numberInfor}>12</Text>
            <Text style={styles.textInfor}>Courses</Text>
          </View>
          <View style={[styles.inforContent, { marginHorizontal: 57 }]}>
            <Text style={styles.numberInfor}>12</Text>
            <Text style={styles.textInfor}>Followed</Text>
          </View>
          <View style={styles.inforContent}>
            <Text style={styles.numberInfor}>20</Text>
            <Text style={styles.textInfor}>Favorites</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', paddingBottom: 120 }}>
            <Text style={styles.thisWeek}>This Week’s Progress</Text>
            <View style={styles.section}>
              <WeekSelector
                dateContainerStyle={styles.date}
                whitelistRange={[new Date(2018, 7, 13), new Date()]}
                dayFormat="DD"
                monthFormat="MMM"
                textStyle={{ color: '#321C1C' }}
                renderNextSelector={() => (
                  <Icon type="ionicon" name="chevron-forward" />
                )}
                renderPreviousSelector={() => (
                  <Icon type="ionicon" name="chevron-back" />
                )}
              />
            </View>

            <TagSelect
              data={dataTag}
              itemStyle={styles.item}
              itemLabelStyle={styles.labelTag}
              itemStyleSelected={styles.itemSelected}
              itemLabelStyleSelected={styles.labelSelected}
            />
            <BarChart
              data={data}
              width={width}
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              backgroundColor="transparent"
              labelColor="#DCAFA1"
              chartConfig={{
                backgroundGradientToOpacity: 1,
                backgroundGradientFromOpacity: 1,
                decimalPlaces: 0,
                backgroundGradientFrom: '#FFFFFF',
                backgroundGradientTo: '#FFFFFF',
                color: (opacity = 1) => `rgba(220,175,161, ${opacity})`,
                strokeWidth: 10,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
              }}
            />

            <View>
              <Text style={styles.thisWeek}>Activities</Text>
              <Text style={styles.textDate}>Sat, 13 Jun 2020</Text>
            </View>
            <View style={styles.containerList}>
              <View style={styles.listContainer}>
                <Image
                  style={styles.closeLogo}
                  source={require('../../Assets/Images/Running.png')}
                />
                <View style={styles.listTitle}>
                  <Text style={styles.listTitleText}>Running</Text>
                  <Text style={styles.listTitleText1}>45 mins | 4.8 KM</Text>
                </View>
                <Text style={styles.listTitleNumber}>-120 kCal</Text>
              </View>
              <View style={styles.listContainer}>
                <Image
                  style={styles.closeLogo}
                  source={require('../../Assets/Images/Cycling.png')}
                />
                <View style={styles.listTitle}>
                  <Text style={styles.listTitleText}>Running</Text>
                  <Text style={styles.listTitleText1}>45 mins | 4.8 KM</Text>
                </View>
                <Text style={styles.listTitleNumber}>-120 kCal</Text>
              </View>
              <View style={styles.listContainer}>
                <Image
                  style={styles.closeLogo}
                  source={require('../../Assets/Images/Swimming.png')}
                />
                <View style={styles.listTitle}>
                  <Text style={styles.listTitleText}>Running</Text>
                  <Text style={styles.listTitleText1}>45 mins | 4.8 KM</Text>
                </View>
                <Text style={styles.listTitleNumber}>-120 kCal</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonLogOut}>
                <Text style={styles.logOutText}>Add Activity</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;
