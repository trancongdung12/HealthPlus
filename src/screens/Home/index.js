/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors, Icon } from '../../themes/index';
import Feature from '../../components/Feature';
import { SVG } from '../../themes/Svg';
import Steps from '../../components/Steps';
import Sleep from '../../components/Sleep';
import DisplayedText from '../../components/displayedText';
import LanguageAction  from '../../redux/Language/actions';
import { NavigationUtils } from '../../navigation';

const openFoodDection=()=>{
  NavigationUtils.pushScreen("HomeTab","FoodDetection","Phân tích dinh dưỡng")
}
const openMeansureHeartBeat =()=>{
  NavigationUtils.pushScreen("HomeTab","MeasureHeartBeat","Measure heart beat")
}
const opendoctors =()=>NavigationUtils.pushScreen("HomeTab","Doctors","Get advice from top doctors")

const openGenerality=()=>NavigationUtils.pushScreen("HomeTab","Generality","Tổng quát")

export default function Home() {
  const dispatch = useDispatch()
  const dataUserGoogle =useSelector((state) => state.profile.data);

  const steps=useSelector((state)=>state.googlefit.dailySteps)
  const [currentSteps, setCurrentSteps] = useState(0)
  
  useEffect(() => {
    if(steps){
      steps.length>0 && setCurrentSteps(steps[steps.length-1].value)
    }
  })

  return (
    <View style={{ height: '100%' }}>
      <View style={styles.header}>
      <SVG.Header/>
      </View>
      <View style={styles.content}>
        <View style={styles.headers}>
          {dataUserGoogle !== null ? (
            <>
              <View>
                <Text style={styles.textTitle}>Good afternoon!</Text>
                <Text style={styles.textTitle}>{dataUserGoogle.name}</Text>
              </View>
              <TouchableOpacity>
                <Image source={{ uri: dataUserGoogle.photo }} style={styles.ImageUser} />
              </TouchableOpacity>
            </>
          ) : (
            <Text style={{ color: Colors.white }}>
              Vui Lòng Đăng Nhập Để Sử Dụng Ứng Dụng
            </Text>
          )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.functionHeader}>
            <TouchableOpacity style={[styles.function, { backgroundColor: '#D3664E' }]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image source={Icon.icon_heartbeat} style={styles.iconButton} />
                  {/* <Text style={styles.titleButton}>Nhịp tim</Text> */}
                  <DisplayedText i18nKey={'heartbeat'} styleText={styles.titleButton}> Nhip Tim</DisplayedText>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>66</Text>
                  <Text style={styles.unit}>bpm</Text>
                </View>
              </View>
            </TouchableOpacity>
          <TouchableOpacity style={[styles.function, { backgroundColor: '#F5B04A' }]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image source={Icon.icon_dropWater} style={styles.iconButton} />
                  <DisplayedText i18nKey={'Oxygen'} styleText={styles.titleButton}> Nồng độ oxy </DisplayedText>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>000/00</Text>
                  <Text style={styles.unit}>mmHg</Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      <View style={styles.recommentSession}>
        <Text style={styles.titlePart}>ĐỀ XUẤT </Text>
        <ScrollView horizontal={true}>
          <Feature
          id="A"
          name="Theo dõi hoạt động"
          content="4 hoạt động"
          i18nKey="Activities"
          onpress={openGenerality}
          />
          <Feature
          id="H"
          name="Đo nhịp tim"
          content="Bắt đầu"
          i18nKey="Pulse"
          onpress={openMeansureHeartBeat}
          />
          <Feature
          id="C"
          name="Chat With Mr.Heath+"
          content="Bắt đầu"
          i18nKey="Chat-with-Mr-Health"
          onpress={opendoctors}
          />
          <Feature
          id="F"
          name="Kiểm tra chế độ dinh dưỡng"
          content="Bắt đầu"
          i18nKey="Nutrition"
          onpress={openFoodDection}
          />
        </ScrollView>
      </View>
      
      <View style={styles.activityContainner}>
        <Text style={styles.titlePart}>HOẠT ĐỘNG</Text>
          <Steps
            title={'Đi bộ'}
            icon={Icon.icon_walk}
            completeLevels={currentSteps/5000}
            goal={ currentSteps+'/5000 bước'}
            color={'#87DCFA'}
          />
          <Sleep
            title={'Ngủ'}
            icon={Icon.icon_sleeping}
            completeLevels={null}
            goal={'4 giờ 30 phút'}
            color={'#F8EDD2'}
          />
      </View>
      </ScrollView>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    marginTop:-40

  },
  activityContainner:{
    marginBottom:50

  },
  recommentSession:{
    marginBottom:-50

  },
  content: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
  },
  headers: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: 'bold',
  },
  ImageUser: {
    marginTop: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
  },

  functionHeader: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  function: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  contentFunction: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titlePage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    height: 40,
    width: 40,
  },
  titleButton: {
    marginTop: 5,
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
  parameter: {
    marginTop: 20,
    marginLeft: 15,
  },
  titleParameter: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
  },
  unit: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 10,
  },
  titlePart: {
    marginTop: 35,
    color: Colors.colorBlackBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
