import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import Colors from '../../themes/color';

const SCREEN_WIDTH = Dimensions.get('window').width - 32;

const DetailTracking = ({data}) => {
  const CHART_LINE_DATA = {
    labels: ['23', '00', '01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        data: [
          0,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          100,
          70,
          0,
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
  };
  const getLabelY = value => {
    if (value < 20) {
      return 'Wake up';
    } else if (value < 40) {
      return 'Silence';
    } else if (value < 60) {
      return 'sleeping';
    } else if (value < 80) {
      return 'Deep';
    } else {
      return 'Dream';
    }
  };
  const chartConfig = {
    color: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
  };

  const renderTime = () => {
    let count = 0;
    CHART_LINE_DATA?.datasets?.[0]?.data?.map(item => {
      count = count + item;
    });
    return Math.round((count + 100) / 8);
  };

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <View style={styles.first}>
          <Text style={styles.titleTime}>{data?.title}</Text>
          <Text style={styles.date}>{data?.date}</Text>
        </View>
        <View style={styles.last}>
          <Icon name="calendar-alt" size={24} />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.chartToday}>
        <Text
          style={{
            fontSize: 20,
            color: Colors.primary,
            fontWeight: '600',
          }}>{`Sleep ${renderTime()}%`}</Text>
      </View>
      <View style={styles.chartLine}>
        <LineChart
          data={CHART_LINE_DATA}
          width={Dimensions.get('window').width - 32} // from react-native
          height={220}
          yAxisInterval={1}
          chartConfig={chartConfig}
          bezier
          style={styles.chartSleep}
          barPercentage={1}
          useShadowColorFromDataset={true}
          formatYLabel={value => `${getLabelY(value)}`}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.sleep}>
          <Icon name="moon" size={30} color={'#FFFFFF'} />
          <Text style={styles.txtTime}>{data?.start}</Text>
        </View>
        <View style={styles.sleep}>
          <Icon name="clock" size={30} color={'#FFFFFF'} />
          <Text style={styles.txtTime}>{data?.end}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  time: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  first: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  last: {
    height: 50,
    justifyContent: 'center',
  },
  titleTime: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  date: {
    marginLeft: 10,
  },
  line: {
    marginTop: 5,
    height: 5,
    backgroundColor: '#dcdcdc',
    marginVertical: 50,
  },
  chart: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartToday: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginBottom: 20,
    paddingBottom: 20,
  },
  chartSleep: {
    borderRadius: 8,
    paddingVertical: 12,
  },
  chartDay: {
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 10,
  },
  bottom: {
    marginTop: 30,
    marginBottom: 20,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008080',
    borderRadius: 6,
  },
  sleep: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtTime: {
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 5,
    color: '#FFFFFF',
  },
});
