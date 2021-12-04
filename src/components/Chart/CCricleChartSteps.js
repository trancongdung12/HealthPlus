import React from 'react'
import { Dimensions } from 'react-native';
import Svg, { Polyline,Circle } from 'react-native-svg';
export default function CCricleChartSteps(props) {
    console.log("percent ",props);
    const size=Math.round(Dimensions.get('screen').width/2);
    const r=Math.round(size/2)-5
    const percent= props.data
    const end=percent*(370-120)+120
    var points=""
    var points2=""
    var dot={'x':0,'y':0}
    for (i = 120; i < end; i++) {
        x = r+5 + r * Math.cos(Math.PI * i / 180);
        y = r+5 + r * Math.sin(Math.PI * i / 180);
       points+=x+','+y+' '
       dot.x=x
       dot.y=y
    }
    for (i = end; i < 370; i++) {
        let k=Math.round(size/2)-5
        x = k+5 + k * Math.cos(Math.PI  * i / 180);
        y = k+5 + k * Math.sin(Math.PI  * i / 180);
       points2+=x+','+y+' '
    }
    return (
        <Svg height={size} width={size}>
            <Polyline
                    points={points}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="5"
            />
            <Polyline
                    points={points2}
                    fill="none"
                    stroke="#C4C4C4"
                    strokeWidth="4"
            />
            <Circle cx={dot.x} cy={dot.y} r="6" fill="#FFFFFF" />
        </Svg>
    )
}
