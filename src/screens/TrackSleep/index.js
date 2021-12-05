import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../themes/icon';
import Colors from '../../themes/color';
import {NavigationUtils} from '../../navigation';

const SleepTracking = props => {
  const [sheepData, setSheepData] = useState([]);

  useEffect(() => {
    setSheepData([
      {
        title: 'Monday',
        date: '5th Dec 2021',
        time: '7h',
        start: '23:00 pm',
        end: '06:00 am',
      },
      {
        title: 'Sunday',
        date: '4th Dec 2021',
        time: '7h',
        start: '23:30 pm',
        end: '06:30 am',
      },
      {
        title: 'Saturday',
        date: '3th Dec 2021',
        time: '8h 28m',
        start: '23:20 pm',
        end: '8:24 am',
      },
      {
        title: 'Friday',
        date: '2th Dec 2021',
        time: '6h 20m',
        start: '23:20 pm',
        end: '7:00 am',
      },
      {
        title: 'Thursday',
        date: '1st Dec 2021',
        time: '6h 29m',
        start: '00:41 pm',
        end: '8:30 am',
      },
      {
        title: 'Wednesday',
        date: '30th Nov 2021',
        time: '8h 07m',
        start: '22:20 pm',
        end: '8:27 am',
      },
      {
        title: 'Tuesday',
        date: '29th Nov 2021',
        time: '6h 20m',
        start: '22:20 pm',
        end: '7:00 am',
      },
    ]);
  }, []);

  const onDetailSleep = item => {
    NavigationUtils.pushScreen(
      props?.componentId,
      'DetailTrackingSleep',
      'Your Sleep Details',
      item,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headContent, styles.h1]}>
          <View style={styles.titGroup}>
            <Image
              source={Icon.icMoon}
              resizeMode="contain"
              style={{width: 32, height: 32}}
            />
            <Text style={styles.t}>Bed time</Text>
          </View>
          <Text style={styles.title}>22:50 pm</Text>
        </View>
        <View style={[styles.headContent, styles.h2]}>
          <View style={styles.titGroup}>
            <View
              style={{
                backgroundColor: '#3D4ABA',
                height: 32,
                width: 32,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icon.icClock}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </View>
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
          {sheepData.map((item, i) => (
            <TouchableOpacity
              style={styles.cVItem}
              key={i}
              onPress={() => onDetailSleep(item)}>
              <View style={styles.cVItime}>
                <Text style={styles.ct}>{item.date}</Text>
                <Text style={styles.ctsub}>{item.time}</Text>
              </View>
              <View style={styles.cvTimeD}>
                <Text style={styles.tc}>Bedtime : {item.start}</Text>
                <Text style={styles.tc}>Wake up : {item.end}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default SleepTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1,
    width: '100%',
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContent: {
    flex: 1,
    width: 160,
    height: 180,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  titGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 140,
    margin: 10,
  },
  t: {
    color: Colors.black,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  title: {
    color: Colors.black,
    fontSize: 32,
    marginTop: 20,
  },
  h1: {
    backgroundColor: '#FAFAFF',
  },
  h2: {
    backgroundColor: '#FAFAFF',
  },
  content: {
    flex: 2,
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: '#FAFAFF',
    borderColor: '#F4F5F6',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  contentH: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cT: {
    color: '#365EE9',
    fontSize: 20,
  },
  cVItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#F4F5F6',
    margin: 10,
  },
  ct: {
    color: '#3299A8',
    fontSize: 18,
  },
  ctsub: {
    color: '#FF9C8A',
  },
  tc: {
    color: '#FF9C8A',
  },
});
