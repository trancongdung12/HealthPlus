/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import {Bar} from 'react-native-progress';
import NavigationUtils from '../navigation/Utils';
import { SvgIcon } from '../themes/Svg';

export default function Steps(props) {
  return (
      <TouchableOpacity 
        style={styles.containner} 
        onPress={()=>NavigationUtils.pushScreen("HomeTab","StepsCounter","Số bước chân")}
      >
          <View style={styles.leftConatiner}>
            <SvgIcon.Walking/>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.content}>
              <Text style={styles.title}>Đếm bước chân</Text>
              <Text style={styles.subTitle}>{props.goal}</Text>
            </View>
            <View style={styles.progress}>
              {props.completeLevels === null ? (
                <Text style={styles.notStart}> Chưa bắt đầu </Text>
              ) : (
                <Bar
                  progress={props.completeLevels}
                  width={Dimensions.get("screen").width*0.6}
                  color={"#FFF4D8"}
                  borderColor={"#D9E2EC"}
                  unfilledColor={"#D9E2EC"}
                />
              )}
            </View>
          </View>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  containner: {
    marginTop: 20,
    backgroundColor:"white",
    flexDirection: 'row',
    borderRadius: 10,
    height: 85
  },
  leftConatiner:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFF4D8",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10

  },
  rightContainer:{
    flex: 4,
    justifyContent:"center",
  },
  content:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20
  },
  progress:{
    alignItems:"center",
    marginTop:10
  },
  title:{
    fontFamily:"Lato",
    fontWeight:"bold",
    fontSize:13
  },
  subTitle:{
    fontFamily:"Lato",
    fontSize:15,
    color:"#486581"
  },
  notStart:{
    fontFamily:"Lato",
    fontSize:12,
    color:"#9FB3C8"
  }

});
