import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { SvgIcon } from '../../themes/Svg'

export default function index() {
    const [sheepData, setSheepData] = useState(
        [
            {
                date: '6th June 2021',
                time: '7h 17m',
                start: '01:20 pm',
                end: '7:00 am'
            },
            {
                date: '5th June 2021',
                time: '5h 20m',
                start: '23:20 pm',
                end: '8:20 am'
            },
            {
                date: '4th June 2021',
                time: '8h 28m',
                start: '23:20 pm',
                end: '8:24 am'
            },
            {
                date: '3th June 2021',
                time: '6h 20m',
                start: '23:20 pm',
                end: '7:00 am'
            },
            {
                date: '2th June 2021',
                time: '6h 29m',
                start: '00:41 pm',
                end: '8:30 am'
            },
            {
                date: '1st June 2021',
                time: '8h 07m',
                start: '22:20 pm',
                end: '8:27 am'
            },
            {
                date: '31th May 2021',
                time: '6h 20m',
                start: '22:20 pm',
                end: '7:00 am'
            }
        ]
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.headContent,styles.h1]}>
                    <View style={styles.titGroup}>
                        <SvgIcon.Moon width="32" height="32"/>
                        <Text style={styles.t}>Bedtime</Text>
                    </View>
                    <Text style={styles.title}>22:50 pm</Text>
                </View>
                <View style={[styles.headContent,styles.h2]}>
                    <View style={styles.titGroup}>
                        <SvgIcon.Clock/>
                        <Text style={styles.t}>Wake up</Text>
                    </View>
                    <Text style={styles.title}>7:00 am</Text>
                </View>

            </View>
            <View style={styles.content}>
                <View style={styles.contentH}>
                    <Text style={styles.cT}>In week</Text>
                    <Text style={styles.ct}>Average sleep time: 6h 20m</Text>
                </View>
                <ScrollView style={styles.cV} showsVerticalScrollIndicator={false}>
                    {
                        sheepData.map((item,i)=>
                        <View style={styles.cVItem} key={i}>
                            <View style={styles.cVItime}>
                                <Text style={styles.ct}>{item.date}</Text>
                                <Text style={styles.ctsub}>{item.time}</Text>
                            </View>
                            <View style={styles.cvTimeD}>
                                <Text style={styles.tc}>Bedtime : {item.start}</Text>
                                <Text style={styles.tc}>Wake up : {item.end}</Text>
                            </View>
                         </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    header:{
        flex: 1,
        width: '100%',
        marginHorizontal: 30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headContent:{
        flex:1,
        width:160,
        height:180,
        margin:10,
        borderRadius:20,
        alignItems:'center',
    },
    titGroup:{
        flexDirection:'row',
        alignItems:'center',
        width: 140,
        margin:10
        
    },
    t:{
        color: '#FFFFFF',
        fontSize:16,
        marginLeft:10
    },
    title:{
        color: '#FFFFFF',
        fontSize:32,
        marginTop:20
    },
    h1:{
        backgroundColor: '#3299A8'
    },
    h2:{
        backgroundColor: '#2492D8'
    },
    content:{
        flex: 2,
        width: Dimensions.get('screen').width*0.9,
        backgroundColor: "#FFFFFF",
        borderColor:"#F4F5F6",
        borderWidth:1,
        borderRadius:20
    },
    contentH:{
        alignItems:'center',
        marginBottom:20
    },
    cT:{
        color:'#365EE9',
        fontSize:20
    },
    cVItem:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth:0.5,
        borderColor:'#F4F5F6',
        margin:10
    },
    ct:{
        color:'#3299A8',
        fontSize:18
    },
    ctsub:{
        color:'#FF9C8A'
    },
    tc:{
        color:'#FF9C8A'
    }
    
}
)