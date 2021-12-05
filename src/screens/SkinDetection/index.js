import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Dialog from 'react-native-dialog';
import ImgToBase64 from 'react-native-image-base64';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Circle} from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon as Icons} from '../../themes';
import Images from '../../themes/image';

const SERVER_URL = 'https://skindetect.herokuapp.com/';

const SkinDetection = () => {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [response, setResponse] = useState([]);
  const [isOpenD, setIsOpenD] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  Array.prototype.sum = function (prop) {
    var total = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
      total += this[i][prop];
    }
    return total;
  };

  const aceptDialog = async data => {
    let input_caloires = JSON.parse(
      await AsyncStorage.getItem('input_caloires'),
    );
    console.log(input_caloires);
    input_caloires.value += data;
    AsyncStorage.setItem('input_caloires', JSON.stringify(input_caloires));
    setIsOpenD(false);
    setImage(null);
    setResponse([]);
    setIsSaved(true);
  };

  const handleTakePhoto = () => {
    launchCamera(
      {
        base64: true,
      },
      res => {
        if (res) {
          setImage(res);
        }
      },
    );
  };
  const handleChoosePhoto = () => {
    launchImageLibrary({}, res => {
      setImage(res);
    });
  };
  const handleUploadPhoto = async e => {
    setIsAnalyzing(true);
    const img = await ImgToBase64.getBase64String(image.uri);
    const res = await axios.post(`${SERVER_URL}/skin/`, {img: img});
    console.log('res', res);
    // setResponse(res.data.data);
    // setIsAnalyzing(false);
  };

  return (
    <View style={styles.container}>
      {isAnalyzing ? (
        image.uri && (
          <View style={styles.progress}>
            <Image source={{uri: image.uri}} style={styles.imageProg} />
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#000000" />
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Analyzing...
              </Text>
            </View>
          </View>
        )
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={isAnalyzing ? styles.analyzing : styles.none}>
        <View style={styles.header}>
          <View>
            {image ? (
              image.uri ? (
                <Image source={{uri: image.uri}} style={styles.imageProg} />
              ) : (
                <Image
                  source={Images.imgDefault}
                  style={{height: 150, width: 250, borderRadius: 10}}
                />
              )
            ) : (
              <Image
                source={Images.imgDefault}
                style={{height: 150, width: 250, borderRadius: 10}}
              />
            )}
          </View>
          {image ? (
            image.uri ? (
              <View style={styles.s}>
                <TouchableOpacity style={styles.sg} onPress={handleUploadPhoto}>
                  <Image
                    source={Icons.icAnalysis}
                    resizeMode="contain"
                    style={{width: 30, height: 30}}
                  />
                  <Text>Analyze</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sg} onPress={handleTakePhoto}>
                  <Icon name="camera" size={30} />
                  <Text>Take another</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.s}>
                <TouchableOpacity onPress={handleTakePhoto} style={styles.sg}>
                  <Icon name="camera" size={30} />
                  <Text>Take photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChoosePhoto} style={styles.sg}>
                  <Icon name="image" size={30} />
                  <Text>Get from gallery</Text>
                </TouchableOpacity>
              </View>
            )
          ) : (
            <View style={styles.s}>
              <TouchableOpacity onPress={handleTakePhoto} style={styles.sg}>
                <Icon name="camera" size={30} />
                <Text>Take photo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleChoosePhoto} style={styles.sg}>
                <Icon name="image" size={30} />
                <Text>Get from gallery</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTit}>Skin disease</Text>
          <View style={styles.contentMain}>
            {!image?.uri ? (
              <Text style={styles.textDesc}>No data</Text>
            ) : (
              <>
                <Text style={styles.textTitle}>Acne</Text>
                <Text style={styles.textDesc}>
                  {
                    'Commonly located on the face, neck, shoulders, chest, and upper backn \nBreakouts on the skin composed of blackheads, whiteheads, pimples, or deep, painful cysts and nodules \nMay leave scars or darken the skin if untreated'
                  }
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2,
  },
  dFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveB: {
    backgroundColor: '#4B7FFB',
    margin: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveT: {
    color: 'white',
    padding: 5,
    fontSize: 18,
  },
  analyzing: {
    opacity: 0.09,
  },
  none: {
    opacity: 1,
  },
  progress: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  imageProg: {
    borderColor: '#D19A08',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('screen').width * 0.75,
    height: Dimensions.get('screen').height * 0.3,
  },
  loading: {
    marginTop: 50,
  },
  s: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sg: {
    display: 'flex',
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  st: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTit: {
    paddingTop: 30,
    paddingBottom: 10,
    fontFamily: 'roboto',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'baseline',
  },
  textTitle: {
    fontWeight: '700',
    fontFamily: 'roboto',
    fontSize: 16,
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  textDesc: {
    fontFamily: 'roboto',
    fontSize: 14,
    paddingHorizontal: 16,
  },
  contentMain: {
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F5F6',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.9,
    borderRadius: 10,
  },
  contentChart: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentList: {
    flexDirection: 'column',
  },
  listIt: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detGr: {
    flexDirection: 'row',
  },
  listTit: {
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  dotp: {
    marginTop: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: 'black',
  },
  dotPink: {
    backgroundColor: '#FD646F',
  },
  dotGreem: {
    backgroundColor: '#4B8311',
  },
  dotOrage: {
    backgroundColor: '#D19A08',
  },
  imageTaked: {
    width: 200,
    height: 200,
  },
});
export default SkinDetection;
