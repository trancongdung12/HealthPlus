import React from 'react'
import { View, Dimensions } from 'react-native'
import Svg, {Defs, Line,LinearGradient,Polyline,Stop, Text } from 'react-native-svg'

export default function CColumChartSteps(props) {
    const w=Dimensions.get('screen').width*0.85
    const h=200
    const data=props.data
    const style=props.style
    return (
        <View style={style}>
        <Svg width={w} height={h} >
            <Defs>
                <LinearGradient id="grad" x1="0" y1="1" x2="0" y2="0">
                <Stop offset="0" stopColor="#DADADA" stopOpacity="1" />
                <Stop offset="1" stopColor="#114EDC" stopOpacity="1" />
                </LinearGradient>
            </Defs>
            {
               data.map((data,i)=>{
                   const y=data.value
                   const percent=data.value/5000
                   return(
                    i!=5?
                    <View key={i} >
                        <Line x1={65+i*40} y1={ (h-15)} x2={65+i*40} y2={(h-15)-percent*125} stroke="url(#grad)" strokeWidth="6" />
                        <Text x={65+i*40-12} y={h-4} fontSize="12" fill="black">{data.date.slice(5,10).replace("-","/")}</Text>
                    </View>
                   :
                   <View key={i} >
                   <Line x1={65+i*40} y1={(h-15)} x2={65+i*40} y2={(h-15)-percent*125} stroke="url(#grad)" strokeWidth="6" />
                   <Text x={65+i*40-10} y={h-4} fontSize="12" fill="black">Now</Text>
                 </View>
                   )
               }
               )
            }
            {
                createDash(50,65,268,60).map((i,index)=>
                    {
                        return(
                        <Line key={index} x1={i.s.x} y1={i.s.y} x2={i.e.x} y2={i.e.y} stroke="#045C7C" strokeWidth="2" />
                       ) 
                    }
                   
                )
            }
            <Text
                x="0"
                y="60"
                fontSize="15"
                fill="black"
            >
             Mục tiêu
            </Text>
            <Text
                x={w-34}
                y="60"
                fontSize="15"
                fill="black"
            >
             5000
            </Text>
        </Svg>
        </View>
    )
}

const createDash=(n,startX,endX,y)=>{
    var points=[]
    var k=(endX-startX)/n
    var p=startX
    while(endX>p){
        let s={x:p,y:y}
        let e={x:p+k,y:y}
        points.push({s:s,e:e})
        p=p+k*2
    }
    return points
}
  

