/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import { Icon, Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';

export default function resetPassword() {
  const [eyes, setEyes] = useState(true);
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => NavigationUtils.popScreen('loginStack')}>
        <Image source={Icon.icon_back} style={styles.iconBack} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titlePage}>Đặt lại mật khẩu</Text>
        <Text style={styles.subTitle}>Nhập mật khẩu mới và xác nhận mật khẩu</Text>
        <View>
          <Text style={styles.titleInput}>Mật khẩu mới</Text>
          <View style={styles.inputPassword}>
            <TextInput style={styles.tabInputPass} secureTextEntry={eyes} />
            <TouchableOpacity onPress={() => setEyes(!eyes)}>
              {eyes ? (
                <Image source={Icon.icon_closeEye} style={styles.iconEye} />
              ) : (
                <Image source={Icon.icon_eye} style={styles.iconEye} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.titleInput}>Xác nhận mật khẩu</Text>
          <View style={styles.inputPassword}>
            <TextInput style={styles.tabInputPass} secureTextEntry={eyes} />
            <TouchableOpacity onPress={() => setEyes(!eyes)}>
              {eyes ? (
                <Image source={Icon.icon_closeEye} style={styles.iconEye} />
              ) : (
                <Image source={Icon.icon_eye} style={styles.iconEye} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonStart} onPress={() => NavigationUtils.startLogin()}>
            <Text style={{ color: Colors.white, fontSize: 18 }}>Khôi phục mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 25,
  },
  iconBack: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  content: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  titlePage: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 13,
    color: Colors.colorLightBlack,
  },
  titleInput: {
    marginTop: 50,
    color: Colors.colorLightBlack,
  },
  // dhddjd
  inputPassword: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.darkGray,
  },
  iconEye: {
    marginTop: 20,
    height: 25,
    width: 25,
  },
  tabInputPass: {
    fontSize: 18,
    paddingLeft: 10,
    width: 300,
  },
  buttonStart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    width: 330,
    backgroundColor: Colors.primary,
    marginTop: 50,
    borderRadius: 5,
  },
});
