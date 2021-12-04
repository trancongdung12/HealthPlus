import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Circle } from 'react-native-progress';
import { SVG, SvgIcon } from '../../themes/Svg';
import ImgToBase64 from 'react-native-image-base64';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-community/async-storage';

const SERVER_URL = 'https://healthplusai.herokuapp.com';

const FoodDetection = () => {
  const [image, setImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing]= useState(false)
  const [response,setResponse]= useState([])
  const [isOpenD, setIsOpenD] = useState(false)
  const [isSaved,setIsSaved]=useState(false)

  Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
  }
  
  const aceptDialog= async (data)=>{
    let input_caloires= JSON.parse(await AsyncStorage.getItem('input_caloires'))
    console.log(input_caloires);
    input_caloires.value+=data
    AsyncStorage.setItem('input_caloires',JSON.stringify(input_caloires))
    setIsOpenD(false)
    setImage(null)
    setResponse([])
    setIsSaved(true)
  }

  const handleTakePhoto = () => {
    launchCamera(
      {
        base64: true
      }
      ,(res)=>{
      if(res){
        setImage(res)
      }
    })
  };
  const handleChoosePhoto=()=>{
    launchImageLibrary(
      {}
      ,(res)=>{
        setImage(res)
    })
  }
  const handleUploadPhoto = async (e) => {
    setIsAnalyzing(true)
    const img=await ImgToBase64.getBase64String(image.uri)
    const res= await axios.post(`${SERVER_URL}/food/`,{img: img})
    console.log(res.data.data)
    setResponse(res.data.data)
    setIsAnalyzing(false)
  };

  const getDam =()=>Math.round(response.slice(0,11).sum('value')*20*100)/100
  const getBeo=()=>Math.round(response.slice(11,19).sum('value')*20*100)/100
  const getXo=()=>Math.round(response.slice(19,20).sum('value')*20*100)/100

  return (
    <View style={styles.container}>
      {
        isAnalyzing?image.uri&&
          <View style={styles.progress}>
            <Image
              source={{ uri: image.uri }}
              style={styles.imageProg}
            />
            <View style={styles.loading}>
            <ActivityIndicator size="large" color="#000000" />
              <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Analyzing...</Text>
          </View>
          </View>
        :<></>
      }
      <ScrollView showsVerticalScrollIndicator={false} style={isAnalyzing?styles.analyzing:styles.none} >
        <View style={styles.header}>
          <View>
             {
                image?image.uri?
                <Image
                    source={{ uri: image.uri }}
                    style={styles.imageProg}
                  />
                :<SVG.Picture/>
                :<SVG.Picture/>
              }
          </View>
          {
            image?image.uri?
            <View style={styles.s}>
              <TouchableOpacity style={styles.sg} onPress={handleUploadPhoto}>
                <SvgIcon.Analyze width="38" height="29.45"/>
                <Text>Analyze</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sg} onPress={handleTakePhoto}>
                <SvgIcon.Camera/>
                <Text>Take another</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.s}>
                <TouchableOpacity onPress={handleTakePhoto} style={styles.sg} >
                  <SvgIcon.Camera/>
                  <Text>Take photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChoosePhoto} style={styles.sg} >
                  <Image
                  source={require('../../assets/icon/gallery.png')}
                  style={{ width: 38,height: 30 }}
                  />
                  <Text>Get from gallery</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.s}>
                <TouchableOpacity onPress={handleTakePhoto} style={styles.sg} >
                  <SvgIcon.Camera/>
                  <Text>Take photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChoosePhoto} style={styles.sg} >
                  <Image
                  source={require('../../assets/icon/gallery.png')}
                  style={{ width: 38,height: 30 }}
                  />
                  <Text>Get from gallery</Text>
                </TouchableOpacity>
            </View>
          }
         
        </View>
        <View style={styles.content}>
            <Text style={styles.contentTit}>Nutritional ingredients</Text>
            <View style={styles.contentMain}>
              <View style={styles.contentChart}>
                <Circle size={80} showsText={true}  indeterminate={false} progress={response.length>0?getDam()/(getDam()+getBeo()+getXo()):0} color="#FD646F"  direction={"counter-clockwise"}  />
                <Circle size={80} showsText={true} progress={response.length>0?getBeo()/(getBeo()+getDam()+getXo()):0}  color="#4B8311" direction={"counter-clockwise"} />
                <Circle size={80} showsText={true} progress={response.length>0?getXo()/(getXo()+getBeo()+getDam()):0}  color="#D19A08" direction={"counter-clockwise"} />
              </View>
              <View style={styles.contentList}>
                <View style={styles.listIt}>
                  <View style={styles.detGr}>
                    <View style={[styles.dot,styles.dotPink]}></View>
                    <Text style={styles.listTit}>Protein</Text>
                  </View>
                  <Text style={styles.listTit}>{response.length>0?getDam():0}</Text>
                </View>
                <View style={styles.listIt}>
                  <View style={styles.detGr}>
                    <View style={[styles.dot,styles.dotGreem]}></View>
                    <Text style={styles.listTit}>Fat</Text>
                  </View>
                  <Text style={styles.listTit}>{response.length>0?getBeo():0}</Text>
                </View>
                <View style={styles.listIt}>
                  <View style={styles.detGr}>
                    <View style={[styles.dot,styles.dotOrage]}></View>
                    <Text style={styles.listTit}>Fiber</Text>
                  </View>
                  <Text style={styles.listTit}>{response.length>0?getXo():0}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentTit}>Ingredients in the <Text style={{ color: '#FD646F' }}>{response.length>0&&response[0].name}</Text> dish</Text>
            <View style={styles.contentMain}>
              <View style={styles.contentList}>
                {
                  response.length>0&&
                  response.map((item,index)=>
                  <View style={styles.listIt} key={index}>
                    <View style={styles.detGr}>
                      <View style={[styles.dotp,]}></View>
                      <Text style={styles.listTit}>{item.name}</Text>
                    </View>
                    <Text style={styles.listTit}>{Math.round(item.value*20*100)/100}</Text>
                  </View>
                  )
                }
              </View>
            </View>
            {
              response.length>0&&
              <>
              <TouchableOpacity style={styles.saveB} onPress={()=>setIsOpenD(true)}>
                <Text style={styles.saveT}>Save this information</Text>
              </TouchableOpacity>
              <Dialog.Container visible={isOpenD} contentStyle={{justifyContent: 'center', alignItems: 'center'}}>
                  <Dialog.Title style={{ color: '#FD646F' }} >Did you eat <Text style={{ color:'blue' }}>{response.length>0&&response[0].name}</Text> for lunch today? </Dialog.Title>
                  <Dialog.Description style={{ fontSize: 16 }}>
                  Your dish has <Text style={{ color: '#FD646F' }}>
                    {response.length>0&&Math.round(response.sum('value')*20*100)/100} 
                  </Text> calories
                  </Dialog.Description>
                  <Dialog.Description style={{ fontSize: 12 }}>
                    *Save nutrition information will help you easily keep track of your nutrition
                  </Dialog.Description>
                  <View style={styles.dFooter}>
                    <Dialog.Button label="Cancel" style={{ marginRight:50 }} onPress={()=>setIsOpenD(false)} />
                    <Dialog.Button label="Save" style={{ marginLeft:50 }} onPress={()=>aceptDialog(Math.round(response.sum('value')*20*100)/100)} />
                  </View>
              </Dialog.Container>
              </>
            }
            <Dialog.Container visible={isSaved} contentStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <Dialog.Title style={{ color: '#4B8311' }}> Your meal information has been saved successfully </Dialog.Title>
                <Dialog.Button label="OK"  onPress={()=>setIsSaved(false)} />
            </Dialog.Container>
          </View>   
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2
  },
  dFooter:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  saveB:{
    backgroundColor: '#4B7FFB',
    margin:20,
    width: '100%',
    alignItems:'center',
    justifyContent:'center'
  },
  saveT:{
    color:'white',
    padding:5,
    fontSize:18
  },
  analyzing:{
    opacity:0.09
  },
  none:{
    opacity:1
  },
  progress:{
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    zIndex: 1
  },
  imageProg:{
    borderColor:'#D19A08',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('screen').width*0.75, 
    height: Dimensions.get('screen').height*0.3,
  },
  loading:{
    marginTop: 50
  },
  s:{
    display: 'flex',
    flexDirection:'row',
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sg:{
    display: 'flex',
    paddingHorizontal:40,
    alignItems:'center',
    justifyContent:'center',
  },
  st:{
    fontSize: 18,
    textAlign:'center',
    color: 'white',
    padding:10
  },
  header:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  content:{
    flex: 2,
    alignItems:"center",
    justifyContent: "center",
  },
  contentTit:{
    paddingTop:30,
    paddingBottom:20,
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "600",
    alignSelf:"baseline"
  },
  contentMain:{
    paddingVertical:20,
    backgroundColor: "#FFFFFF",
    borderColor:"#F4F5F6",
    borderWidth:1,
    width: Dimensions.get("screen").width*0.9,
    borderRadius:10,

  },
  contentChart:{
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  contentList:{
    flexDirection:"column",
  },
  listIt:{
    padding:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  detGr:{
    flexDirection:"row",
  },
  listTit:{
    fontFamily:"roboto",
    fontSize: 14,
    fontWeight: "bold"
  },
  dot:{
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight:10
  },
  dotp:{
    marginTop: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight:5,
    backgroundColor:'black'
  },
  dotPink:{
    backgroundColor:"#FD646F",
  },
  dotGreem:{
    backgroundColor:"#4B8311",
  },
  dotOrage:{
    backgroundColor:"#D19A08",
  },
  imageTaked:{
    width: 200,
    height:200
  }
});
export default FoodDetection;
