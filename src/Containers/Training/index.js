import RouteNames from '../../Navigators/RouteNames';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const TrainingScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.imgageBackgorund}
          source={require('../../Assets/Images/img4.png')}
          imageStyle={{ width: width, height: (2 * height) / 3 }}
        >
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.header}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Image
                    style={styles.avatar}
                    source={require('../../Assets/Images/avatar.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Image
                    style={styles.search}
                    source={require('../../Assets/Images/iconSearch.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Get into shape before the lockdown ends
              </Text>
            </View>
            <View style={styles.contentCotainer1}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Weekly Focus</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteNames.TrainingDetail)}
                >
                  <Text style={styles.viewALl}>View all</Text>
                </TouchableOpacity>
              </View>

              <ImageBackground
                style={[styles.imgageBackgorund2, styles.inlineContainer1]}
                source={require('../../Assets/Images/training1.png')}
                imageStyle={{ borderRadius: 8 }}
              >
                <View style={styles.cardDescription}>
                  <Text style={styles.imageTitle}>Abs</Text>
                  <Text style={styles.imageFollow}>30 mins</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={[styles.contentCotainer]}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Jump Back In</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteNames.TrainingDetail)}
                >
                  <Text style={[styles.viewALl, { color: '#DCAFA1' }]}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inlineContainer}>
                <ImageBackground
                  style={[styles.imgageBackgorund1]}
                  source={require('../../Assets/Images/training2.png')}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <View style={styles.cardDescription}>
                    <Text style={styles.imageTitle}>Legs</Text>
                    <Text style={styles.imageFollow}>30 mins</Text>
                  </View>
                  <View style={styles.percentContainer}>
                    <ProgressCircle
                      percent={30}
                      radius={20}
                      borderWidth={2}
                      color="gray"
                      shadowColor="#FFFFFF"
                      bgColor="gray"
                    >
                      <Text style={styles.percent}>{'30%'}</Text>
                    </ProgressCircle>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={[styles.contentCotainer, { marginTop: 44 }]}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Body Focus</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteNames.TrainingDetail)}
                >
                  <Text style={[styles.viewALl, { color: '#DCAFA1' }]}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inlineContainer}>
                <ImageBackground
                  style={[styles.imgageBackgorund1, { marginRight: 5 }]}
                  source={require('../../Assets/Images/training2.png')}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <View style={styles.cardDescription}>
                    <Text style={styles.imageTitle}>Legs</Text>
                    <Text style={styles.imageFollow}>30 mins</Text>
                  </View>
                  <View style={styles.percentContainer}>
                    <ProgressCircle
                      percent={30}
                      radius={20}
                      borderWidth={2}
                      color="gray"
                      shadowColor="#FFFFFF"
                      bgColor="gray"
                    >
                      <Text style={styles.percent}>{'30%'}</Text>
                    </ProgressCircle>
                  </View>
                </ImageBackground>
                <ImageBackground
                  style={[styles.imgageBackgorund1, { marginLeft: 5 }]}
                  source={require('../../Assets/Images/training3.png')}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <View style={styles.cardDescription}>
                    <Text style={styles.imageTitle}>Hips</Text>
                    <Text style={styles.imageFollow}>30 mins</Text>
                  </View>
                  <View style={styles.percentContainer}>
                    <ProgressCircle
                      percent={30}
                      radius={20}
                      borderWidth={2}
                      color="gray"
                      shadowColor="#FFFFFF"
                      bgColor="gray"
                    >
                      <Text style={styles.percent}>{'30%'}</Text>
                    </ProgressCircle>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default TrainingScreen;
