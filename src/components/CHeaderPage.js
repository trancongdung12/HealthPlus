import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, Image, View } from 'react-native';
import { Colors } from '../themes';
import { useSelector, useDispatch } from 'react-redux';

export default function CHeaderPage() {
  const dataUserGoogle =useSelector((state) => state.profile.data);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.headerHome}>
      <TouchableOpacity style={styles.user}>
        <Image style={styles.interfaceUser} source={{ uri: dataUserGoogle.photo }} />
      </TouchableOpacity>
      <View style={styles.logo}>
        <TouchableOpacity>
          <Image style={styles.imageLogo} source={require('../assets/image/logo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  user: {
    marginLeft: 20,
  },
  interfaceUser: {
    borderWidth: 2,
    marginBottom: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  logo: {
    marginRight: 10,
  },
  imageLogo: {
    height: 60,
    width: 90,
  },
});
