import React from 'react';

import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import travel from '../../assets/images/travel.png'

export default function ({ title, source, marginLeft }) {
    const style = StyleSheet.create({
        textStyle: {
            color: 'black',
            textAlign: 'center',
            fontSize: 11,
            fontWeight: '200'
        },
        containerStyle: {
            marginLeft: marginLeft ? marginLeft : 0,
            width: 80,
            height: 80,
            backgroundColor: 'white',
            borderColor: 'gray',
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // textShadowColor: 'rgba(0, 0, 0, 0.75)',
            // textShadowOffset: { height: 1 },
            // textShadowRadius: 10,
            shadowOpacity: 1
            // borderBottomColor: 'black'
            // borderLeftColor: 'black'
        },
        iconStyle: {
            height: 39,
            width: 39,
            alignSelf: 'center',
            marginBottom: 10
        }
    })
    return (
        <TouchableOpacity style={style.containerStyle}>
            <Image source={source} style={style.iconStyle} />
            <Text style={style.textStyle}>
                {title || ''}
            </Text>
            {/* {source} */}
        </TouchableOpacity>
    )
}