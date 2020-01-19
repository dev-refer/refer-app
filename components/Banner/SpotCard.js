import React from 'react';

import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
// import * as Font from 'expo-font'
// import travel from '../../assets/images/travel.png'

export default function ({ title, source }) {
    const style = StyleSheet.create({
        textStyle: {
            color: 'black',
            textAlign: 'center',
            fontSize: 11,
            fontWeight: '200'
        },
        containerStyle: {
            flex: 1,
            maxHeight: 180,
            marginVertical: 10,
            overflow: 'hidden',
            // width: '90%',
            // height: '40%',
            backgroundColor: 'white',
            borderColor: 'gray',
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            borderRadius: 5,
            borderWidth: 0.5,
            // textShadowColor: 'rgba(0, 0, 0, 0.75)',
            // textShadowOffset: { height: 1 },
            // textShadowRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            // borderBottomColor: 'black'
            // borderLeftColor: 'black'
        },
        iconStyle: {
            flex: 1,
            resizeMode: 'cover',
            alignSelf: 'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            // marginBottom: 10
        },
        spotDescription: {
            height: '50%'
        },
        spotPictContainer: {
            flex: 1,
            backgroundColor: 'white',
            // borderColor: 'gray',
            // borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
            // textShadowColor: 'rgba(0, 0, 0, 0.75)',
            // textShadowOffset: { height: 1 },
            // textShadowRadius: 10,
            // shadowOpacity: 1
            // borderBottomColor: 'black'
            // borderLeftColor: 'black'
        },
        textSpotStyle: {
            fontWeight: 'bold',

        },
        textAddressStyle: {
            fontSize: 11,
            color: 'grey'
        },
        textAvailableStyle: {
            color: 'green',
            fontSize: 12
        }
    })

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input])

    return (
        // <TouchableWithoutFeedback style={style.containerStyle}>
        <View style={style.containerStyle}>
            <Image source={source} style={style.iconStyle} />


            {/* <Text
                style={{
                    fontFamily: 'awesome',
                    fontSize: 56,
                }}>
                {'\uf000'}
            </Text> */}
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <Text style={style.textSpotStyle}>
                    {title || ''}
                </Text>
                <Text style={style.textAddressStyle}>
                    {/* {title || ''} */}
                    Senopati Suites 3, 3rd floor, Jl. Senopati Raya No.41
                </Text>
                <Text style={style.textAvailableStyle}>
                    Open Now
                </Text>
            </View>
            {/* </View> */}
        </View>
        // </TouchableWithoutFeedback>
    )
}