import React, { useState } from 'react'

import {
    View,
    TextInput,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import mailIcon from '../../assets/images/mailIcon.png'
import Button from '../../components/Button/Button';
import Color from '../../constants/Colors';


export default function ForgetPassword() {
    const [email, setEmail] = useState('')
    const submit = async () => {
        try {

        } catch (error) {

        }
    }
    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
        },
        inputContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
        },
        textInput: {
            borderBottomColor: 'rgb(158,158,158)',
            borderBottomWidth: 1,
        },
        formContainer: {
            flex: 1,
            alignItems: "center",
            marginTop: 0,
            marginLeft: 40,
            marginRight: 40,
        },
        referText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgb(230,230,230)'
        },
        resetPasText: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        headerContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 40
        },
        labelText: {
            color: 'rgb(167,167,167)'
        },
        textInput: {
            borderBottomColor: 'rgb(158,158,158)',
            borderBottomWidth: 1,
            marginTop: 5,
            fontSize: 20
        }
    })
    return (
        <View style={style.container}>
            <View style={style.formContainer}>
                <View style={style.inputContainer}>
                    <Text style={style.referText}>
                        Refer
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.resetPasText}>
                        Reset Password
                    </Text>
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.labelText}>
                        Email Address
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%', marginRight: 10 }}>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholderTextColor='black'
                            style={style.textInput}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Button
                        title='Reset Password'
                        titleColor='white'
                        backgroundColor={Color.orangeRefer}
                        width={230}
                        height={42}
                        fontSize={17}
                        borderColor={Color.orangeRefer}
                    />
                </View>
            </View>
        </View>
    )
}
