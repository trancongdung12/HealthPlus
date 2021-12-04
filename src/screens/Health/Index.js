/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import { SVG } from '../../themes/Svg';
import { Icon } from '../../themes';
import I18n from '../../i18n/i18n';

export default function Health() {
  return (
    <View>
      <CHeaderPage />
      <ScrollView >
          <View style={styles.functionHeader}>
            <TouchableOpacity>
              <View style={styles.item}>
                <View style={[styles.item, {backgroundColor: '#3E4DBE'}]}>
                  <Image source={Icon.silhouette} style={styles.icon}/>
                </View>
                <Text style={styles.text}>{I18n.t('1')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item}>
                <View style={[styles.item, {backgroundColor: '#D8553A'}]}>
                  <Image source={Icon.list} style={styles.icon}/>
                </View>
                <Text style={styles.text}>{I18n.t('2')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item}>
                <View style={[styles.item, {backgroundColor: '#FDBA12'}]}>
                  <Image source={Icon.people} style={styles.icon}/>
                </View>
                <Text style={styles.text}>{I18n.t('3')}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
            <SVG.Body/>
          </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  functionHeader: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: Dimensions.get('window').width/3 - 20,
    borderRadius: 12,
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    width: 30,
    tintColor: '#ffffff',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
  },
});
