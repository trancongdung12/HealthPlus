/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Icon, Images, Colors } from '../../themes/index';
import DataInterface from '../../dataFunction/dataShowInfo';
import CItemFunctionUser from '../../components/CItemFunctionUser';
import { NavigationUtils } from '../../navigation/index';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import googleFit from 'react-native-google-fit';
import DisplayedText from '../../components/displayedText';
import Dialog from "react-native-dialog";
import LanguageAction  from '../../redux/Language/actions';

//loginEditInform
export default function User() {
  const dataUserGoogle =useSelector((state) => state.profile.data);

  var gender_user = ''
  if(dataUserGoogle.gender == true){
    gender_user = 'Nam'
  }else{
    gender_user = 'Nữ'
  }

  const dataInformation = [
    {
      id: 2,
      icon: Icon.icon_gmail,
      title: dataUserGoogle.email,
    },
    {
      id: 3,
      icon: Icon.icon_age,
      title: dataUserGoogle.age,
    },
    {
      id: 4,
      icon: Icon.icon_height,
      title: dataUserGoogle.height,
    },
    {
      id: 5,
      icon: Icon.icon_weight,
      title: dataUserGoogle.weight,
    },
    {
      id: 6,
      icon: Icon.icon_gender,
      title: gender_user,
    },
  ];
  
  
  const dispatch = useDispatch();
  const [category, setCategory] = useState(true);
  const [information, setInformation] = useState(false);
  const [dataShow, setDataShow] = useState(DataInterface);
  const [visible, setVisible] = useState(false);

  const menu = () => {
    setCategory(true);
    setInformation(false);
    setDataShow(DataInterface);
  };
  const info = () => {
    setCategory(false);
    setInformation(true);
    setDataShow(dataInformation);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("USER_DATA")
    await AsyncStorage.removeItem("User_profile")
    googleFit.disconnect()
    await GoogleSignin.signOut()
    NavigationUtils.startLogin()
  };

  const changeLanguage = () => {
    // setVisible(true)
    NavigationUtils.pushScreen('User','SettingLanguage');
  }

  return (
    <View>
      <View style={styles.logo}>
        <Image source={Images.logo} style={styles.imageLogo} />
      </View>
      <View style={styles.user}>
        <Image source={{ uri: dataUserGoogle.photo }} style={styles.imageUser} />
        <View style={styles.username}>
          <Text style={styles.name}>{dataUserGoogle.name}</Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => NavigationUtils.startEditInformation()}
          >
          <DisplayedText i18nKey={'edit-info'} styleText={styles.textButton}>Chỉnh sửa thông tin cá nhân</DisplayedText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.functionPage}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={
              category === true
                ? [styles.buttonTabBar, { backgroundColor: '#114EDC' }]
                : styles.buttonTabBar
            }
            onPress={() => menu()}
          >
            <DisplayedText i18nKey={'menu'} styleText={styles.titleButton}>Danh mục</DisplayedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              information === true
                ? [styles.buttonTabBar, { backgroundColor: '#114EDC' }]
                : styles.buttonTabBar
            }
            onPress={() => info()}
          >
            <DisplayedText i18nKey={'information'} styleText={styles.titleButton}>Thông tin cá nhân</DisplayedText>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height: 362,}}>
          <View style={styles.content}>
            {dataShow.map((item, index) => (
              <CItemFunctionUser title={item.title} icon={item.icon} index={index} i18nKey={item.i18nKey} />
            ))}
            <CItemFunctionUser title={'Language'} icon={Icon.icon_language} feature={changeLanguage} />
            <CItemFunctionUser title={'Đăng xuất'} icon={Icon.icon_logout} feature={logout} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageLogo: {
    marginTop: 5,
    width: 100,
    height: 55,
  },
  user: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    marginLeft: 20,
    marginTop: 13,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  functionPage: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  tabBar: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#4B7FFB',
    borderRadius: 25,
    justifyContent: 'space-evenly',
  },
  buttonTabBar: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  titleButton: {
    color: Colors.white,
  },
  content: {
    marginLeft: 25,
    marginTop: 7,
    marginBottom: 4,
  },
});
