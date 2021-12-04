/* eslint-disable prettier/prettier */
import React,  { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Icon, Colors, Images } from '../themes/index';

export default function CInput(props) {
    const [eyes, setEyes] = useState(true);
  return (
    <View style={styles.inputInformation}>
        <Text style={styles.titleInput}>{props.title}</Text>
        {props.pass != null ? (
            <View style={styles.inputPassword}>
                <TextInput style={styles.tabInputPass} secureTextEntry={eyes} />
                <TouchableOpacity onPress={() => setEyes(!eyes)}>
                {eyes ? (
                    <Image source={Icon.icon_closeEye} style={styles.iconEye} />
                ) : (
                    <Image source={Icon.icon_eye} style={styles.iconEye} />
                )}
                </TouchableOpacity>
            </View>
        ) : (
            <>
                {props.type != null ? (
                    <TextInput style={styles.input} keyboardType={'number-pad'}/>
                ) : (
                    <TextInput style={styles.input} />
                )}
            </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    inputInformation: {
        marginTop: 10,
    },
    titleInput: {
        fontSize: 18,
        color: Colors.colorLightBlack,
    },
    input: {
        borderBottomWidth: 2,
        fontSize: 18,
        borderBottomColor: Colors.colorLightBlack,
        height: 42,
    },
    inputPassword: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: Colors.darkGray,
    },
    tabInputPass: {
        fontSize: 18,
        paddingLeft: 10,
        width: 300,
    },
    iconEye: {
        marginTop: 20,
        height: 25,
        width: 25,
    },
});
