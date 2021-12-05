/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, Icon} from '../../themes/index';
import Feature from '../../components/Feature';
import Steps from '../../components/Steps';
import Sleep from '../../components/Sleep';
import DisplayedText from '../../components/displayedText';
import {NavigationUtils} from '../../navigation';
import Images from '../../themes/image';

const openFoodDection = () => {
  NavigationUtils.pushScreen(
    'HomeTab',
    'FoodDetection',
    'Nutritional analysis',
  );
};
const openSkinCheck = () => {
  NavigationUtils.pushScreen('HomeTab', 'SkinDetection', 'Skin analysis');
};

const openMeansureHeartBeat = () => {
  NavigationUtils.pushScreen(
    'HomeTab',
    'MeasureHeartBeat',
    'Measure heart beat',
  );
};
const opendoctors = () =>
  NavigationUtils.pushScreen(
    'HomeTab',
    'Doctors',
    'Get advice from top doctors',
  );

const openGenerality = () =>
  NavigationUtils.pushScreen('HomeTab', 'Generality', 'Generality');

export default function Home() {
  const dispatch = useDispatch();
  const dataUserGoogle = useSelector(state => state.profile.data);

  const steps = useSelector(state => state.googlefit.dailySteps);
  const [currentSteps, setCurrentSteps] = useState(0);

  useEffect(() => {
    if (steps) {
      steps.length > 0 && setCurrentSteps(steps[steps.length - 1].value);
    }
  });

  return (
    <View style={{height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ImageBackground
            source={Images.bgHome}
            resizeMode="cover"
            style={styles.headerImage}>
            <View style={styles.headerContent}>
              {dataUserGoogle !== null ? (
                <>
                  <View>
                    <Text style={styles.textTitle}>Good afternoon!</Text>
                    <Text style={styles.textTitle}>{dataUserGoogle.name}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={{uri: dataUserGoogle.photo}}
                      style={styles.ImageUser}
                    />
                  </TouchableOpacity>
                </>
              ) : (
                <Text style={{color: Colors.white}}>
                  Please login to using application
                </Text>
              )}
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.functionHeader}>
            <TouchableOpacity
              style={[styles.function, {backgroundColor: '#D3664E'}]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image
                    source={Icon.icon_heartbeat}
                    style={styles.iconButton}
                  />
                  <DisplayedText
                    i18nKey={'heartbeat'}
                    styleText={[styles.titleButton]}>
                    {' '}
                    Heartbeat
                  </DisplayedText>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>66</Text>
                  <Text style={styles.unit}>bpm</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.function, {backgroundColor: '#F5B04A'}]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image
                    source={Icon.icon_dropWater}
                    style={styles.iconButton}
                  />
                  <DisplayedText
                    // i18nKey={'Oxygen'}
                    styleText={[
                      styles.titleButton,
                      {marginLeft: 15, textAlign: 'left'},
                    ]}>
                    Oxygen concentration{' '}
                  </DisplayedText>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>000/00</Text>
                  <Text style={styles.unit}>mmHg</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.recommentSession}>
            <Text style={styles.titlePart}>SUGGESTIONS</Text>
            <ScrollView
              style={styles.recommendScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Feature
                icon={Icon.icEye}
                name="Theo dõi hoạt động"
                content="4 activities"
                i18nKey="Activities"
                onPress={openGenerality}
              />
              <Feature
                icon={Icon.icHeart}
                name="Đo nhịp tim"
                content="Start"
                i18nKey="Pulse"
                onPress={openMeansureHeartBeat}
              />
              <Feature
                icon={Icon.icChat}
                name="Chat With Mr.Heath+"
                content="Start"
                i18nKey="Chat-with-Mr-Health"
                onPress={opendoctors}
              />
              <Feature
                icon={Icon.icList}
                name="Kiểm tra chế độ dinh dưỡng"
                content="Start"
                i18nKey="Nutrition"
                onPress={openFoodDection}
              />
              <Feature
                icon={Icon.icSkinCheck}
                name="Skin"
                content="Start"
                onPress={openSkinCheck}
              />
            </ScrollView>
          </View>

          <View style={styles.activityContainner}>
            <Text style={styles.titlePart}>ACTIVITIES</Text>
            <Steps
              title={'Đi bộ'}
              icon={Icon.icon_walk}
              completeLevels={currentSteps / 5000}
              goal={currentSteps + '/5000 step'}
              color={'#87DCFA'}
            />
            <Sleep
              title={'Ngủ'}
              icon={Icon.icon_sleeping}
              completeLevels={null}
              goal={'4 hours 30 minutes'}
              color={'#F8EDD2'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 285,
    flex: 1,
    marginTop: -40,
  },
  headerImage: {
    flex: 1,
  },
  activityContainner: {
    marginBottom: 50,
  },
  content: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
  },
  headerContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 70,
    marginHorizontal: 20,
  },
  textTitle: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: 'bold',
  },
  ImageUser: {
    marginTop: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
  },

  functionHeader: {
    marginTop: -60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  function: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  contentFunction: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titlePage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    height: 40,
    width: 40,
  },
  titleButton: {
    marginTop: 5,
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
  parameter: {
    marginTop: 20,
    marginLeft: 15,
  },
  titleParameter: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
  },
  unit: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 10,
  },
  titlePart: {
    marginTop: 35,
    color: Colors.colorBlackBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendScroll: {
    marginTop: 20,
  },
  content: {
    marginHorizontal: 20,
  },
});
