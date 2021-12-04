import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Colors } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';

export default function VerifyCode() {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => NavigationUtils.popScreen('loginStack')}>
        <Image source={Icon.icon_back} style={styles.iconBack} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Nhập mã gồm 4 chữ số</Text>
        <View style={styles.numberCode}>
          <TextInput keyboardType={'number-pad'} style={styles.inputNumber} />
          <TextInput keyboardType={'number-pad'} style={styles.inputNumber} />
          <TextInput keyboardType={'number-pad'} style={styles.inputNumber} />
          <TextInput keyboardType={'number-pad'} style={styles.inputNumber} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => NavigationUtils.pushScreen('loginStack', 'ResetPassword')}
          >
            <Text style={styles.titleButton}>Xác nhận</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Chưa nhận được mã xác nhận?</Text>
          <View style={styles.functionSendCodeAgent}>
            <TouchableOpacity>
              <Text style={styles.textButton}>Gửi lại </Text>
            </TouchableOpacity>
            <Text style={styles.textButton}> | </Text>
            <TouchableOpacity>
              <Text style={styles.textButton}> Đổi mã</Text>
            </TouchableOpacity>
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
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  numberCode: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputNumber: {
    fontSize: 25,
    height: 60,
    width: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    textAlign: 'center',
  },
  bottom: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStart: {
    height: 50,
    width: 300,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  titleButton: {
    fontSize: 18,
    color: Colors.white,
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    color: '#8C92A4',
  },
  functionSendCodeAgent: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 17,
    color: '#114EDC',
    fontWeight: 'bold',
  },
});
