/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon, Colors} from '../../themes';
import I18n from '../../i18n/i18n';
import Images from '../../themes/image';

export default function Feature({onPress, name, i18nKey, content, icon}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        source={Images.bgSlide}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.content}>
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
          <View style={styles.row}>
            <Text style={styles.title}>{i18nKey ? I18n.t(i18nKey) : name}</Text>
            <View style={styles.borderCheck}>
              <Image source={Icon.icCheck} style={styles.iconCheck} />
            </View>
          </View>
          <Text style={styles.subTitle}>{content}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 233,
    height: 115,
    marginRight: 20,
  },
  bgImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Lato',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Lato',
    color: Colors.colorBlackBlue,
  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  iconCheck: {
    height: 18,
    width: 24,
  },
  borderCheck: {
    height: 44,
    width: 44,
    backgroundColor: Colors.blueGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
