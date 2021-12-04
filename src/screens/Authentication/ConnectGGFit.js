import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import googleFitType from '../../redux/GoogleFitRedux/actions'
export default function ConnectGGFit() {
    const dispatch = useDispatch()
    const connect=()=>{
        dispatch(googleFitType.connectGoogleFit())
    }
    return (
        <View style={style.container}>
            <View style={style.logo} >
                <Image style={style.imageH}
                source={require('../../assets/icon/logoHP.png')} 
                />
                <Image style={style.image}
                source={require('../../assets/icon/ggfitIcon.png')}
                />
            </View>
            <View style={style.content}>
                <Text style={style.textContent}>
                Kết nối HealthPlus với google fit để sử dụng được nhiều tính năng hơn
                </Text>
                <TouchableOpacity style={style.button} onPress={()=>connect()}>
                    <Text style={style.buttonText}>Kết nối</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style= StyleSheet.create(
    {
        container:{
            flex:1,
        },
        logo:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        },
        imageH:{
            width:Dimensions.get('screen').width*0.45,
            resizeMode:'contain'
        },
        image:{
             width:Dimensions.get('screen').width*0.45,
            resizeMode:'contain'
        },
        content:{
            alignItems:'center',
            alignContent:'center'
        
        },
        textContent:{
             textAlign:'center',
             fontSize:24,
             fontFamily:'Comfortaa',
             marginTop:-80
        },
        button:{
            backgroundColor:'#4B7FFB',
            width:Dimensions.get('screen').width*0.5,
            alignItems:'center',
            borderRadius:10,
            marginTop:30
        },
        buttonText:{
            color:'white',
            fontSize:28,
            fontFamily:'Comfortaa'
        }

    }
)