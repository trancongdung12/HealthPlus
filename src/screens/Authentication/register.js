/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, TextInput } from 'react-native';
import { Icon, Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';
import CInput from '../../components/CInput';

export default function RegisterUser() {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => NavigationUtils.popScreen('loginStack')}>
        <Image source={Icon.icon_back} style={styles.iconBack} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.titlePage}>Đăng ký tài khoản</Text>
        <CInput title={'Tên đầy đủ'} />
        <CInput title={'Email'} />
        <CInput title={'Số điện thoại'} type={true} />
        <CInput title={'Mật khẩu'} pass={true} />
        <CInput title={'Xác nhận mật khẩu'} pass={true} />
        <View style={styles.functionPage}>
          <TouchableOpacity style={styles.buttonStart} onPress={() => NavigationUtils.startLogin()}>
            <Text style={styles.titleButton}> Đăng ký </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subTitlePage}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bạn đã đồng ý với </Text>
            <TouchableOpacity style={{ marginTop: 0 }}>
              <Text style={{ color: Colors.primary }}>các Điều khoản </Text>
            </TouchableOpacity>
            <Text>và</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 0 }}>
              <Text style={{ color: Colors.primary }}>Chính sách </Text>
            </TouchableOpacity>
            <Text>sử dụng của Health+</Text>
          </View>
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  titlePage: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  functionPage: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStart: {
    height: 50,
    width: 325,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  titleButton: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitlePage: {
    marginTop: 15,
  },
});
