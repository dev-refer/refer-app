import React, { useState } from 'react'

import {
    View,
    TextInput,
    StyleSheet,
    Image
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
            marginBottom: 50
        },
        textInput: {
            borderBottomColor: 'rgb(158,158,158)',
            borderBottomWidth: 1,
        },
        formContainer: {
            flex: 1,
            alignItems: "center",
            marginTop: 70,
            marginLeft: 10,
            marginRight: 10,
        },
    })
    return (
        <View style={style.container}>
            <View style={style.formContainer}>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                        <Image source={mailIcon} />
                    </View>
                    <View style={{ width: '90%', marginRight: 10 }}>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholder='Email'
                            placeholderTextColor='black'
                            style={style.textInput}
                        />
                    </View>
                </View>
                <Button
                    title='RESET PASSWORD'
                    titleColor='white'
                    backgroundColor={Color.orangeRefer}
                    width={325}
                    height={42}
                    fontSize={17}
                    borderColor={Color.orangeRefer}
                />
            </View>

        </View>
    )
}
