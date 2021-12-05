import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon, Images} from '../../themes';
import {NavigationUtils} from '../../navigation';
export default function InfoDoctor(props) {
  const data = props.data;
  const onChatWithDoctor = () => {
    NavigationUtils.pushScreen(
      props?.componentId,
      'ChatWithDoctor',
      props?.data?.name,
      {
        name: props.data.name,
        avatar:
          props?.data?.name === 'Dr. Nguyen Thi Xuan Mai'
            ? Images.imgDoctor
            : Images.imgDoctorMan,
      },
    );
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={Images.imgBGDoctorInfo}
          style={styles.imageBackground}
          style={{height: 161}}
        />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => NavigationUtils.popScreen('HomeTab')}>
            <Image source={Icon.left_arrow} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icon.apple} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.infoDoctor}>
            <Image
              source={
                data?.name === 'Dr. Nguyen Thi Xuan Mai'
                  ? Images.imgDoctor
                  : Images.imgDoctorMan
              }
              style={styles.imageDoctor}
            />
            <View style={styles.information}>
              <Text style={styles.nameDoctor}>{data.name}</Text>
              <Text style={styles.specialized}>{data.specialized} </Text>
              <TouchableOpacity
                style={styles.chatWithDoctor}
                onPress={onChatWithDoctor}>
                <Text style={styles.txtChat}>Chat With Doctor</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.brief_info}>
            <Text style={styles.title}>Information</Text>
            <Text style={styles.subtitle}> {data.des} </Text>
          </View>
          <View style={styles.partCalender}>
            <Text style={styles.title}>Upcoming schedule</Text>
            <View style={styles.calender}>
              <View style={[styles.itemCalender, {backgroundColor: '#E9EFFD'}]}>
                <View style={[styles.partDate, {backgroundColor: '#D8E3FF'}]}>
                  <Text style={[styles.date, {color: '#4B7FFB'}]}>12</Text>
                  <Text style={[styles.day, {color: '#4B7FFB'}]}>T1</Text>
                </View>
                <View style={styles.contentDate}>
                  <Text style={styles.titleContentDate}>Tư vấn</Text>
                  <View style={styles.dateTime}>
                    <Text> Chủ nhật </Text>
                    <Text> . 9 giờ - 11 giờ </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.itemCalender, {backgroundColor: '#FAF2EA'}]}>
                <View style={[styles.partDate, {backgroundColor: '#FFEAD6'}]}>
                  <Text style={[styles.date, {color: '#FFB167'}]}>12</Text>
                  <Text style={[styles.day, {color: '#FFB167'}]}>T1</Text>
                </View>
                <View style={styles.contentDate}>
                  <Text style={styles.titleContentDate}>Tư vấn</Text>
                  <View style={styles.dateTime}>
                    <Text> Chủ nhật </Text>
                    <Text> . 9 giờ - 11 giờ </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

InfoDoctor.options = {
  topBar: {
    visible: false,
  },
};
const styles = StyleSheet.create({
  header: {
    marginTop: -145,
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#ffffff',
  },
  iconButton: {
    width: 25,
    height: 25,
  },
  content: {
    marginTop: 105,
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    backgroundColor: '#F9F9F9',
  },
  infoDoctor: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 35,
    flexDirection: 'row',
  },
  imageDoctor: {
    width: 72,
    height: 92,
    borderRadius: 10,
  },
  information: {
    width: Dimensions.get('window').width - 90,
    marginLeft: 10,
    flexDirection: 'column',
  },
  nameDoctor: {
    marginTop: 2,
    fontSize: 16,
    color: '#1E1C61',
  },
  specialized: {
    marginTop: 3,
    fontSize: 11,
    color: '#1E1C61',
  },
  buttonConnect: {
    marginRight: 100,
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brief_info: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
  },
  title: {
    fontSize: 16,
    color: '#1E1C61',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 13,
    marginRight: 10,
  },
  partCalender: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  calender: {
    marginTop: 9,
    marginLeft: 5,
    flexDirection: 'column',
  },
  itemCalender: {
    marginTop: 8,
    flexDirection: 'row',
    borderRadius: 8,
  },
  partDate: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  date: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 14,
    color: '#4B7FFB',
    paddingBottom: 2,
  },
  contentDate: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'column',
  },
  titleContentDate: {
    fontSize: 16,
    color: '#000000',
  },
  dateTime: {
    marginTop: 5,
    flexDirection: 'row',
  },
  chatWithDoctor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff',
    marginRight: 50,
    marginTop: 5,
    borderRadius: 6,
  },
  txtChat: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
