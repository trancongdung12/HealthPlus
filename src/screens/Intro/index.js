/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Images } from '../../themes/index';
import Swiper from 'react-native-swiper';
import { Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';
import AsyncStorage from '@react-native-community/async-storage';

export default function Intro() {
  console.log('start intro');
  const DATAINTROS = [
    {
      id: 1,
      imageSource: Images.intro1,
      title: 'Theo Dõi Sức Khỏe ',
      subTitle:
        'Ứng dụng của chúng tôi cung cấp các chức năng hữu ích để bạn có thể tự theo dõi tình trạng sức khỏe mọi nơi, mọi lúc.',
      startButton: false,
    },
    {
      id: 2,
      imageSource: Images.intro2,
      title: 'Chat cùng Chatbot',
      subTitle: 'Mọi thắc mắc của bạn sẽ được giải đáp bởi Chatbot thông minh.',
      startButton: false,
    },
    {
      id: 3,
      imageSource: Images.intro3,
      title: 'Bác Sỹ Tư Vấn',
      subTitle:
        'Với đội ngũ các bác sỹ uy tín đến từ các chuyên khoa riêng biệt. Bạn sẽ được dễ dàng được tư vấn nhanh chóng và chuẩn xác.',
      startButton: false,
    },
    {
      id: 4,
      imageSource: Images.intro4,
      title: 'Kiểm Tra sức Khỏe',
      subTitle: 'Bắt đầu kiểm tra sức khỏe cùng Health+ ngay!',
      startButton: true,
    },
  ];

  const start=async ()=>{
    console.log("click start");
    try{
    await AsyncStorage.setItem('start',"start")
    NavigationUtils.startLogin()
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper loop={false} autoplay activeDotColor={'#701BC8'}>
        {DATAINTROS.map((item, index) => {
          return (
            <View key={index} style={styles.Intro}>
              {item.startButton === false ? (
                <View>
                  <Image source={item.imageSource} style={styles.imageIntro} />
                  <Text style={styles.titleIntro}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                </View>
              ) : (
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.titleIntroPageStart}>{item.title}</Text>
                  <Text style={styles.subTitlePageStart}>{item.subTitle}</Text>
                  <TouchableOpacity
                    style={styles.buttonStart}
                    onPress={() => start()}
                  >
                    <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 16 }}>
                      {' '}
                      Bắt đầu
                    </Text>
                  </TouchableOpacity>
                  <Image style={styles.imageIntroPageStart} source={item.imageSource} />
                </View>
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  Intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIntro: {
    marginTop: 10,
  },
  titleIntro: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 16,
    textAlign: 'center',
  },

  // page start
  titleIntroPageStart: {
    fontSize: 30,
    marginTop: 60,
    color: Colors.black,
    marginLeft: 23,
    marginRight: 70,
    fontWeight: 'bold',
  },
  subTitlePageStart: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonStart: {
    width: 150,
    height: 50,
    backgroundColor: Colors.buttonStart,
    borderRadius: 25,
    justifyContent: 'center',
    marginRight: Dimensions.get('window').width - 210,
  },
  imageIntroPageStart: {
    width: 390,
    height: 470,
    marginBottom: 25,
  },
});
