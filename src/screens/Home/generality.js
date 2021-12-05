/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Circle} from 'react-native-progress';
import {useSelector} from 'react-redux';
import Icon from '../../themes/icon';
import {SvgIcon} from '../../themes/Svg';

const base = [
  555, 300, 430, 200, 433, 678, 455, 321, 333, 400, 787, 322, 720, 480, 333,
  222, 111, 432, 600, 389, 438, 672, 936, 436, 544, 567, 666, 222, 367, 500,
];
const w = Dimensions.get('screen').width;

const chartConfig = {
  color: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: true,
};

const datac = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    },
  ],
};
export default function Generality() {
  const dataUserGoogle = useSelector(state => state.login.dataUser);
  const [dataChart, setDataChart] = useState({showType: 'week', data: datac});
  const [foodCal, setFoodCal] = useState({value: 0});
  useEffect(() => {
    AsyncStorage.getItem('input_caloires').then(res =>
      setFoodCal(JSON.parse(res)),
    );
    console.log('s');
  }, []);
  const chooseType = type => {
    var now = new Date();
    var labels = [];
    var data = [];
    if (type == 'week') {
      now.setDate(now.getDate() - 6);
      for (let i = 6; i >= 0; i--) {
        labels.push(`${now.getDate()}/${now.getMonth() + 1}`);
        now.setDate(now.getDate() + 1);
        data.push(base[i] * ((i % 2) + 1));
      }
    } else {
      now.setDate(now.getDate() - 30);
      for (let i = 29; i >= 0; i--) {
        data.push(base[i] * ((i % 2) + 1));
        now.setDate(now.getDate() + 1);
      }
    }
    const d = {
      labels: labels,
      datasets: [
        {
          data: data,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };
    setDataChart({showType: type, data: d});
  };
  return (
    <ScrollView style={styles.contenPage} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.titlePage}> Overview</Text>
        <Image
          source={{uri: dataUserGoogle.user.photo}}
          style={styles.ImageUser}
        />
      </View>
      <Text style={styles.titlePart}>Calories</Text>
      <View style={styles.chart}>
        <View style={styles.chartDe}>
          <Text style={styles.chartTit}>Energy consumed today</Text>
          <Text style={styles.chartData}>
            {
              dataChart.data.datasets[0].data[
                dataChart.data.datasets[0].data.length - 1
              ]
            }{' '}
            <Text style={styles.chartUnit}>cal</Text>{' '}
          </Text>
          <Text></Text>
          <Picker
            selectedValue={dataChart.showType}
            onValueChange={(itemValue, itemIndex) => chooseType(itemValue)}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item color="#FF103B" label="Week" value="week" />
            <Picker.Item color="#FF103B" label="Month" value="month" />
          </Picker>
        </View>
        <LineChart
          data={dataChart.data}
          width={w * 0.9}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={true}
          verticalLabelRotation={0}
          bezier
        />
      </View>
      <Text style={styles.titlePart}>Activities</Text>
      <View style={styles.cC}>
        <Text style={[styles.titleC, {color: '#365EE9', marginBottom: 10}]}>
          Steps counter
        </Text>
        <View style={styles.cC1}>
          <Circle
            size={80}
            showsText={true}
            style={{marginLeft: 10}}
            progress={0.4}
          />
          <View style={styles.cGT}>
            <Text style={styles.cD}>5000</Text>
            <Text styles={styles.sCD}>950 steps left to reach the goal</Text>
          </View>
          <View>
            <Image source={Icon.icStep} style={styles.iconWalk} />
          </View>
        </View>
      </View>
      <View style={styles.cC}>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={styles.cCH}>
            <Image source={Icon.icMoon1} style={styles.icon} />
            <Text style={[styles.titleC, {color: '#FF9C8A'}]}>Sleep</Text>
            <View></View>
          </View>
          <Text style={styles.titleM}>
            8 <Text style={styles.titleU}>h</Text> 55{' '}
            <Text style={styles.titleU}>min</Text>{' '}
          </Text>
        </View>
      </View>
      <View style={styles.cC}>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={styles.cCH}>
            <>
              <Image source={Icon.heartbeat} style={styles.icon} />
              <Text style={[styles.titleC, {color: '#FF235B'}]}>
                Heart beat
              </Text>
            </>
          </View>
          <Text style={styles.titleM}>
            90 <Text style={styles.titleU}>BPM</Text>
          </Text>
        </View>
      </View>
      <View style={styles.cC}>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={styles.cCH}>
            <>
              <Image source={Icon.apple} style={styles.icon} />
              <Text style={[styles.titleC, {color: '#E83C00'}]}>
                Nutrition today
              </Text>
            </>
          </View>
          <Text style={styles.titleM}>
            {foodCal.value} <Text style={styles.titleU}>cal</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  iconWalk: {
    width: 30,
    height: 30,
  },
  contenPage: {
    margin: 20,
  },
  cG: {
    flexDirection: 'row',
  },
  sCD: {
    fontSize: 8,
    color: '#B2B2B2',
  },
  cC1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cGT: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  titleM: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleU: {
    fontSize: 11,
    color: '#B2B2B2',
  },
  cCH: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chart: {
    backgroundColor: '#FFFFFF',
  },
  chartTit: {
    marginTop: 20,
    color: '#FF103B',
    fontSize: 18,
    marginHorizontal: 20,
  },
  chartData: {
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  picker: {
    width: 120,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  chartUnit: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titlePage: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  ImageUser: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  titlePart: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
  },
  cC: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  cD: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleC: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
