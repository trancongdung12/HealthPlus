import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import CColumChartSteps from '../../components/Chart/CColumChartSteps';
import CCricleChartSteps from '../../components/Chart/CCricleChartSteps';
// import {SvgIcon} from '../../themes/Svg';
import {calBMI} from '../../utils/Tool';

export default function StepsCounter() {
  const dataUserGoogle = useSelector(state => state.profile.data);
  const steps = useSelector(state => state.googlefit.dailySteps);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [dailySteps, setDailySteps] = useState(steps);
  const [index, setIndex] = useState(dailySteps.length - 1);
  const now = new Date();
  useEffect(() => {
    if (dailySteps) {
      dailySteps.length > 0 && setCurrentSteps(dailySteps[index]);
    } else {
      setDailySteps([
        {
          date: now.setDate(now.getDate() - 6) && now.toLocaleDateString(),
          value: 0,
        },
        {
          date: now.setDate(now.getDate() + 1) && now.toLocaleDateString(),
          value: 0,
        },
        {
          date: now.setDate(now.getDate() + 1) && now.toLocaleDateString(),
          value: 0,
        },
        {
          date: now.setDate(now.getDate() + 1) && now.toLocaleDateString(),
          value: 0,
        },
        {
          date: now.setDate(now.getDate() + 1) && now.toLocaleDateString(),
          value: 0,
        },
        {
          date: now.setDate(now.getDate() + 1) && now.toLocaleDateString(),
          value: 0,
        },
      ]);
    }
  });
  const preDay = () => {
    let i = index;
    i > 0 && setIndex(i - 1);
  };
  const nextDay = () => {
    let i = index;
    i < 6 && setIndex(i + 1);
  };
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <View style={style.selectDate}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => preDay()}></TouchableOpacity>
          <Text style={style.dateTitle}>Date {currentSteps.date}</Text>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => nextDay()}></TouchableOpacity>
        </View>
        <Text style={style.titleDay}>{dailySteps[index]?.date}</Text>
        <View style={style.cricleChart}>
          <CCricleChartSteps data={currentSteps.value / 5000} />
          <View style={style.cricleChartIconC}>
            <Image
              source={require('../../assets/icon/trophy.png')}
              style={style.trophyIcon}
            />
            <Text style={style.goalStepsT}>
              {calBMI(dataUserGoogle?.weight, dataUserGoogle?.height) * 250}
            </Text>
          </View>
          <View style={style.cricleChartFootIconC}>
            <Image
              source={require('../../assets/icon/footprints.png')}
              style={style.footIcon}
            />
            <Text style={style.curentSteps}>{currentSteps.value}</Text>
          </View>
        </View>
        <View style={style.stepsInfo}>
          <View style={[style.InfoC]}>
            <Text style={style.infoTitle}>Callo</Text>
            <Text style={style.infoData}>
              {Math.round(currentSteps.value * 0.2, 1)}
            </Text>
            <Text style={style.infoTitle}>Kcal</Text>
          </View>
          <View style={[style.InfoC, style.speedInfoC]}>
            <Text style={style.infoTitle}>Speed</Text>
            <Text style={style.infoData}>
              {index == 6 && '5'}
              {index == 5 && '6.5'}
              {index == 4 && '5.5'}
              {index == 3 && '6.5'}
              {index == 2 && '6.2'}
              {index == 1 && '5.3'}
              {index == 0 && '4.5'}
            </Text>
            <Text style={style.infoTitle}>Km/h</Text>
          </View>
          <View style={[style.InfoC]}>
            <Text style={style.infoTitle}>Distance</Text>
            <Text style={style.infoData}>
              {Math.round(currentSteps.value * 0.0025, 1)}
            </Text>
            <Text style={style.infoTitle}>Km</Text>
          </View>
        </View>
      </View>
      <View style={style.mainContainer}>
        <View style={style.mainContent}>
          {/*here*/}
          <CColumChartSteps
            max={calBMI(dataUserGoogle?.weight, dataUserGoogle?.height) * 250}
            data={dailySteps}
            style={style.columChart}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: '100%',
    height: ((Dimensions.get('screen').height * 2) / 3) * 0.8,
    alignItems: 'center',
    backgroundColor: '#4B7FFB',
  },
  selectDate: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTitle: {
    fontFamily: 'roboto',
    fontSize: 15,
    color: '#DADADA',
  },
  titleDay: {
    fontFamily: 'roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: '10%',
  },
  cricleChart: {
    width: Dimensions.get('screen').width * 0.55,
    height: Dimensions.get('screen').width * 0.55,
    marginBottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cricleChartIconC: {
    position: 'absolute',
    bottom: 22,
    right: -5.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophyIcon: {
    width: 30,
    height: 30,
  },
  goalStepsT: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  cricleChartFootIconC: {
    position: 'absolute',
    bottom: Dimensions.get('screen').width * 0.55 * 0.35,
    right: Dimensions.get('screen').width * 0.55 * 0.32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footIcon: {
    width: 40,
    height: 40,
  },
  curentSteps: {
    fontFamily: 'roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stepsInfo: {
    width: '100%',
    height: '30%',
    marginLeft: -20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  InfoC: {
    flex: 1,
    alignItems: 'center',
  },
  speedInfoC: {
    borderRightColor: '#FFFFFF',
    borderRightWidth: 2,
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: 2,
    marginRight: 8,
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  infoData: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainContent: {
    backgroundColor: '#FFFFFF',
    top: -30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: '#FFFFFF',
    alignItems: 'center',
  },
  upIcon: {
    marginTop: 10,
  },
  columChart: {
    marginTop: 20,
  },
});
