import React from 'react';

import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text
} from 'react-native'

export default function ({ title, titleColor, backgroundColor, width, fontSize, height, borderColor, borderRadius, borderWidth, onPress }) {
    const style = StyleSheet.create({
        textStyle: {
            color: titleColor || 'black',
            textAlign: 'center',
            fontSize: fontSize || 21,
            fontWeight: 'bold'
        },
        containerStyle: {
            width: width || 50,
            height: height || 50,
            backgroundColor: backgroundColor || 'black',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderColor: borderColor || 'black',
            borderRadius: borderRadius || 100,
            borderWidth: borderWidth || 1,
            marginBottom: 5
        }
    })
    return (
        <TouchableOpacity style={style.containerStyle} onPress={onPress}>
            <Text style={style.textStyle}>
                {title || ''}
            </Text>
        </TouchableOpacity>
    )
}   