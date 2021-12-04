import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function CEditInformation(props) {
  return (
    <View style={styles.input}>
      <Text style={styles.titleInput}>{props.title}:</Text>
      {props.setDate ?
        <DatePicker
            date = {new Date(props.inputDate)}
            mode="date"
            format="DD/MM/YYYY"
            minDate="10-01-1778"
            maxDate={props.today}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                display: 'none',
                },
                dateInput: {
                marginLeft: 0,
                width:180
                },
            }}
            onDateChange={props.onChangeText()}
            style={styles.textInput}
            />
      : 
        <TextInput
          defaultValue={props.defaultValue}
          style={[styles.textInput, props.styleWidth && props.styleWidth]}
          onChangeText={(text) => props.onChangeText(text)}
        />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EBF7FF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  titleInput: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#525659',
  },
  textInput: {
    width: '60%',
    marginRight: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
