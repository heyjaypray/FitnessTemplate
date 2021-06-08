import images from '../../../Assets';
import Dimens from '../../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../../Styles/Fonts';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import _ from 'lodash';
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
const Detail: React.FC = ({ style }) => {
  const [checkedList, setCheckedList] = useState([]);
  return (
    <View style={[styles.container, style]}>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
          paddingVertical: Dimens.space / 2,
          paddingTop: 0,
          borderBottomColor: '#E2E2E2',
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.titleDetail}>
            01. Beginner
          </ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>
            10 poses | 45 mins
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <FlatList
        contentContainerStyle={{
          borderRadius: Dimens.borderRadius / 2,
          padding: Dimens.space / 2,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
        data={listData}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item, index }) => {
          const checked = _.includes(checkedList, item.id);
          return (
            <ListItem
              bottomDivider
              containerStyle={{
                backgroundColor: 'transparent',
                paddingHorizontal: 0,
                paddingVertical: Dimens.space / 2,
                paddingTop: Dimens.space / 4,
                borderBottomColor: '#E2E2E2',
              }}
            >
              <Avatar
                imageProps={{
                  source: item.image,
                }}
              />

              <ListItem.Content>
                <ListItem.Title style={styles.itemTitleTime}>
                  {item.time}
                </ListItem.Title>
                <ListItem.Title style={[styles.itemTitle, { fontSize: 16 }]}>
                  {item.label}
                </ListItem.Title>
                <ListItem.Content
                  style={{
                    marginTop: Dimens.space / 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ListItem.Chevron
                    size={18}
                    iconType="ionicon"
                    name="ios-play-circle-outline"
                    color="#321C1C"
                  />
                  <ListItem.Subtitle style={[styles.itemSubtitle]}>
                    1:30 mins
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem.Content>
              <ListItem.CheckBox
                onIconPress={() => {
                  const newList = _.includes(checkedList, item.id)
                    ? _.filter(checkedList, (i) => i !== item.id)
                    : [...checkedList, item.id];
                  setCheckedList(newList);
                }}
                checked={checked}
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
  titleDetail: {
    color: '#FFFFFF',
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
  },
  itemTitle: {
    color: '#321C1C',
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
  },
  subtitle: {
    marginTop: Dimens.space / 2,
    color: '#FFFFFF',
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontSize: 16,
  },
  itemSubtitle: {
    color: '#968989',
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontSize: 13,
    alignItems: 'center',
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

export default Detail;
