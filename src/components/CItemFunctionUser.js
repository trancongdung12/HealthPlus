import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon, Images, Colors } from '../themes/index';
import DisplayedText from './displayedText';

export default function CItemFunctionUser(props) {
  return (
    <View style={styles.itemFunction} index={props.index}>
      <TouchableOpacity onPress={ () => props.feature()} style={styles.button}>
        <Image source={props.icon} style={styles.iconButton} />
        {props.i18nKey ?
          <DisplayedText i18nKey={props.i18nKey} styleText={styles.titleContent}> {props.title} </DisplayedText>
        :
        <Text style={styles.titleContent}> {props.title} </Text>
        }
       </TouchableOpacity>
 
    </View>
  );
}

const styles = StyleSheet.create({
  itemFunction: {
    marginTop: 25,
  },
  button: {
    flexDirection: 'row',
  },
  iconButton: {
    height: 35,
    width: 35,
  },
  titleContent: {
    marginLeft: 40,
    fontSize: 15,
  },
});
