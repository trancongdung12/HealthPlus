import AsyncStorage from '@react-native-community/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import googleFit, {Scopes} from 'react-native-google-fit';
import {useDispatch} from 'react-redux';
import GoogleFittypes from '../../redux/GoogleFitRedux/actions';
import loginType from '../../redux/LoginRedux/Actions';
import Images from '../../themes/image';
import {Colors} from '../../themes/index';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],

  webClientId:
    '16185859257-2ih2ln8hvks4em20v1579f0o9iqm4chn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

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

  const onLogin = async () => {
    try {
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
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={style.containner}>
      <View style={style.img}>
        <Image source={Images.imgLogin} />
      </View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onLogin}
      />
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
    marginBottom: 50,
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
