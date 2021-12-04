/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
// import Icon from 'react-native-vector-icons/health-appicon';
import { Colors } from '../themes/index';
import I18n from '../i18n/i18n';

export default function CFunctionHealth(props) {
  return (
    <View>
      <TouchableOpacity style={{ width: 68 }}>
        <View
          style={[
            styles.iconFunction,
            { backgroundColor: props.colorBackground && props.colorBackground },
          ]}
        >
          <Image source={props.icon} style={styles.styleIcon} />
        </View>
        <Text style={styles.titleFunction}>
          {' '}
          {props.i18nKey ? I18n.t(props.i18nKey) : props.children}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconFunction: {
    //backgroundColor: Colors.primary,
    width: 65,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  styleIcon: {
    width: 35,
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  titleFunction: {
    marginTop: 3,
    fontWeight: 'bold',
    color: Colors.titleFunctionPageHealth,
    fontSize: 9,
    textAlign: 'center',
    height: 27,
  },
});
