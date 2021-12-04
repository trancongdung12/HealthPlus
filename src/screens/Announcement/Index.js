/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import { Colors } from '../../themes/index';
import dataNotification from '../../dataFunction/dataNotification';
import NoAnnouncement from './noAnnouncement';

export default function Announcement() {
  return (
    <View>
      <CHeaderPage />
      {dataNotification.length == 0 ? (
        <NoAnnouncement />
      ) : (
        <View style={styles.pageNotification}>
          <Text style={styles.titlePage}>Các thông báo </Text>
          <ScrollView>
            <View style={{ marginBottom: 230 }}>
              {dataNotification.map((item, index) => (
                <View key={index} style={styles.contentAnnotation}>
                  <Text style={styles.dateNotification}> {item.date} </Text>
               
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pageNotification: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  titlePage: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
  },
  contentAnnotation: {
    marginTop: 25,
  },
  dateNotification: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.colorTitleDate,
  },
});
