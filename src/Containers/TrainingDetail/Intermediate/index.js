import images from '../../../Assets';
import Dimens from '../../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../../Styles/Fonts';
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { color } from 'react-native-reanimated';

const { width, height } = Dimens.screenSize;
const listData = [
  {
    id: 1,
    image: require('../../../Assets/Images/img.png'),
    label: 'Yoga',
    time: '02/06',
  },
  {
    id: 2,
    image: require('../../../Assets/Images/img1.png'),
    label: 'Pilates',
    time: '03/06',
  },
  {
    id: 3,
    image: require('../../../Assets/Images/img2.png'),
    label: 'Pilates',
    time: '04/06',
  },
  {
    id: 4,
    image: require('../../../Assets/Images/img3.png'),
    label: 'Hatha Yoga',
    time: '04/06',
  },
  {
    id: 5,
    image: require('../../../Assets/Images/img3.png'),
    label: 'Vinyasa Yoga',
    time: '05/06',
  },
];
const Intermediate: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.videoPlayer} />
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
          paddingVertical: Dimens.space / 2,
          paddingTop: 0,
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>
            Knee Crunches
          </ListItem.Title>
          <ListItem.Subtitle style={styles.itemSubtitle}>
            12 reps
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.CheckBox
          size={18}
          iconType="ant-design"
          checkedIcon="heart"
          uncheckedIcon="hearto"
          checkedColor="#321C1C"
          uncheckedColor="#321C1C"
        />
      </ListItem>
      <Text style={styles.titleList}>Next</Text>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              bottomDivider
              containerStyle={{
                backgroundColor: 'transparent',
                paddingHorizontal: 0,
                paddingVertical: Dimens.space / 2,
                paddingTop: Dimens.space / 4,
              }}
            >
              <Avatar rounded source={item.image} />
              <ListItem.Content>
                <ListItem.Title style={styles.itemTitleTime}>
                  {item.time}
                </ListItem.Title>
                <ListItem.Title style={[styles.itemTitle, { fontSize: 16 }]}>
                  {item.label}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.itemSubtitle}>
                  12 reps
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.CheckBox
                size={18}
                iconType="ant-design"
                checkedIcon="heart"
                uncheckedIcon="hearto"
                checkedColor="#321C1C"
                uncheckedColor="#321C1C"
              />
            </ListItem>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  titleList: {
    color: '#321C1C',
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    marginTop: Dimens.space / 2,
    lineHeight: 27,
  },
  itemTitleTime: {
    color: '#DCAFA1',
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontSize: 11,
  },
  itemTitle: {
    color: '#321C1C',
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
  },
  itemSubtitle: {
    marginTop: Dimens.space / 2,
    color: '#968989',
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontSize: 13,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Intermediate;
