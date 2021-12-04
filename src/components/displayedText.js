import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import I18n from '../i18n/i18n'

export default function DisplayedText(props) {
    const { i18nKey, styleText } = props;
    return (
        <Text  style={styleText ? styleText : styles.text}>
            {i18nKey ? I18n.t(i18nKey) : props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#000000",
    },
})
