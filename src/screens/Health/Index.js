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
import {Icon} from '../../themes';
import I18n from '../../i18n/i18n';
import Icons from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/color';
import Images from '../../themes/image';

export default function Health() {
  return (
    <View style={styles.container}>
      <CHeaderPage />
      <ScrollView>
        <View style={styles.functionHeader}>
          <TouchableOpacity>
            <View style={[styles.layoutItem, {backgroundColor: '#3E4DBE'}]}>
              <Icons name="stethoscope" size={30} color={Colors.white} />
            </View>
            <Text style={styles.text}>{'Complete the test'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.layoutItem, {backgroundColor: '#D8553A'}]}>
              <Icons name="list-alt" size={30} color={Colors.white} />
            </View>
            <Text style={styles.text}>{'General check up'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.layoutItem, {backgroundColor: '#FDBA12'}]}>
              <Icons name="male" size={30} color={Colors.white} />
            </View>
            <Text style={styles.text}>{'Health status'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.imgBody} source={Images.imgBody} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  functionHeader: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  item: {},
  layoutItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3 - 20,
    borderRadius: 5,
    height: 40,
  },
  imgBody: {
    height: 418,
    width: 272,
  },
  text: {
    marginTop: 5,
    fontSize: 13,
    textAlign: 'center',
  },
});
