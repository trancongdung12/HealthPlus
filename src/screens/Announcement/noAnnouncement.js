import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from '../../themes/index';

export default function NoAnnouncement() {
  return (
    <View style={styles.NoAnnouncement}>
      <Image source={Icon.icon_bellRing} style={styles.iconBell} />
      <Text style={styles.title}>Chưa có thông báo</Text>
      <Text style={styles.subTitle}>
        Hãy tiếp tục sử dụng các dịch vụ để theo dõi sức khỏe và nhận thêm thông báo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  NoAnnouncement: {
    marginTop: 250,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBell: {
    height: 200,
    width: 200,
  },
  title: {
    marginTop: 25,
    color: '#F23400',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
  },
});
