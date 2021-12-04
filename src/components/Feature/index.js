/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../themes/index';
import {SVG} from '../../themes/Svg';
import I18n from '../../i18n/i18n';

export default function Feature(props) {
  const data=props
  let Group=null
  switch (data.id) {
    case "A":
      Group={group: <SVG.Activitygroup/>,check:<SVG.Checkblue/>}
      break;
    case "H":
      Group={group: <SVG.Heartgroup/>,check:<SVG.Checkpink/>}
      break;
    case "C":
      Group={group: <SVG.Chatgroup/>,check:<SVG.Checkpurple/>}
      break;
    case "F":
      Group={group: <SVG.Foodgroup/>,check:<SVG.Checkyellow/>}
      break;
  }
  return (
    <TouchableOpacity style={style.container} onPress={()=>data.onpress()}>
      {Group.group}
      <View style={style.content}>
        <Text style={style.contentTitle}> {data.i18nKey ? I18n.t(data.i18nKey) : props.children} </Text>
        <Text style={style.subTitle}>{data.content}</Text>
      </View>
      <View style={style.checkGroup}>
        {Group.check}
      </View>
    </TouchableOpacity>  
  );
}
const style=StyleSheet.create({
  container:{
    marginLeft:-40,
  },
  content:{
    position:"absolute",
    top: 60,
    left: 60
  },
  checkGroup:{
    position:"absolute",
    top: 80,
    right:40
  },
  contentTitle:{
    width: 132,
    fontSize:13,
    fontWeight: 'bold',
    fontFamily:"Lato"
  },
  subTitle:{
    fontSize: 12,
    fontFamily:"Lato",
    color:Colors.colorBlackBlue
  }
})
