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

export default function ({ title, source }) {
    const style = StyleSheet.create({
        textStyle: {
            color: 'black',
            textAlign: 'center',
            fontSize: 11,
            fontWeight: '200'
        },
        containerStyle: {
            width: 170,
            height: 90,
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
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            borderRadius: 15,

            // marginBottom: 10
        }
    })
    return (
        <TouchableOpacity style={style.containerStyle}>
            <Image source={source} style={style.iconStyle} />
            {/* <Text style={style.textStyle}>
                {title || ''}
            </Text> */}
            {/* {source} */}
        </TouchableOpacity>
    )
}