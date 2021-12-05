import AsyncStorage from '@react-native-community/async-storage';
import React, {Component, useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-progress';
import Torch from 'react-native-torch';
import Easing from 'react-native/Libraries/Animated/Easing';
import Icon from '../../themes/icon';
import {SVG, SvgIcon} from '../../themes/Svg';
import Images from '../../themes/image';

const MeasureHeartBeat = () => {
  const [output, setOutput] = useState(0);
  const anim = useRef(new Animated.Value(1));
  const bpm = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
  let cr;
  const startAnimate = async f => {
    if (Platform.OS === 'ios') {
      Torch.switchState(true);
    } else {
      const cameraAllowed = await Torch.requestCameraPermission(
        'Camera Permissions',
        'We require camera permissions to use this feature.',
      );

      if (cameraAllowed) {
        Torch.switchState(true);
      }
    }
    cr.animate(100, 8000, Easing.quad);
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: 1.2,
          duration: 200,
        }),
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 200,
        }),
      ]),
    ).start();
  };

  const finishAnimate = bpm => {
    Torch.switchState(false);
    AsyncStorage.setItem('heart_beat', JSON.stringify({value: bpm})).then(
      res => {
        setOutput(bpm);
      },
    );
  };

  return (
    <View style={styles.container}>
      {output == 0 ? (
        <AnimatedCircularProgress
          ref={ref => (cr = ref)}
          size={200}
          width={10}
          fill={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {fill => (
            <>
              {fill == 100 && finishAnimate(bpm)}
              <>
                {fill != 100 && fill != 0 ? (
                  <View style={styles.Hc}>
                    <Animated.View style={{transform: [{scale: anim.current}]}}>
                      <Image
                        source={Icon.icon_heart}
                        style={{width: 32, height: 32}}
                      />
                    </Animated.View>
                    <Text style={styles.out}>
                      {fill > 90 && bpm} <Text style={styles.outU}>BPM</Text>{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => forceUpdate()}
                      style={styles.btn}>
                      <Text style={styles.btnT}>ReStart</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.Hc}>
                    <Image
                      source={Icon.icon_heart}
                      style={{width: 32, height: 32}}
                    />
                    <Text style={styles.out}>
                      00<Text style={styles.outU}>BPM</Text>{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => startAnimate()}
                      style={styles.btn}>
                      <Text style={styles.btnT}>Start</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </>
            </>
          )}
        </AnimatedCircularProgress>
      ) : (
        <View style={styles.output}>
          <Text style={styles.tOut}>
            {output} <Text style={styles.tOutU}>BPM</Text>{' '}
          </Text>
          <Image
            resizeMode="contain"
            source={Images.imgBPM}
            style={{height: 70}}
          />
          <Text style={styles.s}>Information has been saved</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tOut: {
    fontSize: 50,
    fontWeight: '700',
    color: '#04A550',
    marginBottom: 50,
  },
  s: {
    marginTop: 30,
  },
  tOutU: {
    fontSize: 30,
  },
  out: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  outU: {
    fontSize: 30,
    fontWeight: 'normal',
    color: '#DADADA',
  },
  Hc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnT: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  ic: {
    marginLeft: 10,
    marginVertical: 7,
  },
});

export default MeasureHeartBeat;
