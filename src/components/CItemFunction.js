/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Image, Text, View } from 'react-native';
import { Colors } from '../../src/themes/index';

function CItemFunction(props) {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.function}>
          <Image source={props.icon} style={styles.styleIcon} />
          <Text style={styles.titleFunction}> {props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CItemFunction;

const styles = StyleSheet.create({
  function: {
    marginTop: 20,
    width: 110,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  styleIcon: {
    marginTop: 5,
    height: 70,
    width: 70,
  },

  titleFunction: {
    marginTop: 10,
    height: 50,
    color: Colors.colorLightBlack,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
});
