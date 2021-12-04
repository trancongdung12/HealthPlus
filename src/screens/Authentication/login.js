/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';
import loginType from '../../redux/LoginRedux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-community/async-storage';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import googleFit from 'react-native-google-fit';
import GoogleFittypes from '../../redux/GoogleFitRedux/actions';
import { SVG } from '../../themes/Svg';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: '16185859257-2ih2ln8hvks4em20v1579f0o9iqm4chn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const options = {
  scopes: [
    Scopes.FITNESS_ACTIVITY_READ,
    Scopes.FITNESS_ACTIVITY_WRITE,
    Scopes.FITNESS_BODY_READ,
    Scopes.FITNESS_BODY_WRITE,
    Scopes.FITNESS_SLEEP_READ,
    Scopes.FITNESS_SLEEP_WRITE,
  ],
};

export default function Login() {
  const dispatch = useDispatch();

  const login = async () => {
    console.log('login');
    await GoogleSignin.configure();
    let user_data = await GoogleSignin.signIn();
    await AsyncStorage.setItem('USER_DATA', JSON.stringify(user_data));
    dispatch(loginType.userLoginGoogleSuccess(user_data));
    await googleFit.checkIsAuthorized();
    if (!googleFit.isAuthorized) {
      const res = await googleFit.authorize(options);
      if (res.success) {
        dispatch(GoogleFittypes.getDailySteps());
      } else {
      }
    }
  };

  return (
    <View style={style.containner}>
      <View style={style.img}>
        <SVG.Loginsvg />
      </View>
      {/* <TouchableOpacity style={style.buttonGroup} onPress={() => login()}>
        <View style={style.txtButon}>
          <SVG.G />
          <Text style={style.buttonTxt}>Continue with Google</Text>
        </View>
      </TouchableOpacity> */}
      <View style={style.footer}>
        <Text style={style.footerTxt}>
          Các
          <Text style={style.txt}> điều khoản </Text>
          và
          <Text style={style.txt}> chính sách </Text>
          của ứng dụng
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 0.6,
  },
  buttonGroup: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
  },
  txtButon: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonTxt: {
    color: Colors.white,
    fontSize: 18,
    paddingLeft: 10,
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    fontFamily: 'Actor',
    letterSpacing: 1,
  },
  txt: {
    color: Colors.primary,
    fontFamily: 'Actor',
    letterSpacing: 1,
  },
});
