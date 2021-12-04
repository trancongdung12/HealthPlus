/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';

export default function emailResetPassword() {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => NavigationUtils.popScreen('loginStack')}>
        <Image source={Icon.icon_back} style={styles.iconBack} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titlePage}>Quên Mật Khẩu</Text>
        <Text style={styles.subTitle}>
          Vui lòng nhập lại email đã đăng ký để thay đổi mật khẩu.
        </Text>
        <View style={styles.textInput}>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput style={styles.styleInput} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={styles.buttonReset}
            onPress={() => NavigationUtils.pushScreen('loginStack', 'VerifyCode')}
          >
            <Text style={{ color: Colors.white }}>Khôi phục mật khẩu</Text>
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
    marginTop: 30,
    fontSize: 13,
  },
  textInput: {
    marginTop: 70,
  },
  titleInput: {
    fontSize: 18,
    color: '#A8ADBB',
  },
  styleInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A8ADBB',
  },
  buttonReset: {
    width: 300,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 70,
  },
});
