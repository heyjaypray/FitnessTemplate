import images from '../../../Assets';
import Dimens from '../../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../../Styles/Fonts';
import _ from 'lodash';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

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
const Beginer: React.FC = (props) => {
  const [checkedList, setCheckedList] = useState([]);
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
          borderBottomColor: '#E2E2E2',
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
                rounded
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
                <ListItem.Subtitle style={styles.itemSubtitle}>
                  12 reps
                </ListItem.Subtitle>
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
});

export default Beginer;
