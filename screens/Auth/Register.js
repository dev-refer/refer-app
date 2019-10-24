import React, { useState } from 'react'

import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import ButtonCustom from '../../components/Button/Button';
import userIcon from '../../assets/images/userIcon.png'
import mailIcon from '../../assets/images/mailIcon.png'
import passwordIcon from '../../assets/images/passwordIcon.png'
import Color from '../../constants/Colors'

export default function ({ navigation }) {

    const [validationColor, setValidationColor] = useState('rgb(158,158,158)')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [term, setTerm] = useState(false)

    const style = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1
        },
        textInput: {
            borderBottomColor: 'rgb(158,158,158)',
            borderBottomWidth: 1,
        },
        inputContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center'
        },
        formContainer: {
            flex: 1, alignItems: "center",
            justifyContent: 'space-between',
            marginTop: 70,
            marginLeft: 10,
            marginRight: 10
        },
        confirmPasswordStyle: {
            borderBottomColor: validationColor,
            borderBottomWidth: 1,
        },
        checkBox: term => ({
            height: 12,
            width: 12,
            borderWidth: 1,
            backgroundColor: term ? Color.orangeRefer : 'white',
            marginRight: 5
        })
    })

    const onChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
        if (password !== value) {
            setValidationColor('red')
        } else {
            setValidationColor('rgb(158,158,158)')
        }
    }
    const navigateToConfirm = () => {
        if (password !== confirmPassword || !term || !email) {
            alert('Please Complete Form')
        } else {
        navigation.navigate('ConfirmRegister', {
            email,
            password,
            name
        })
        }
    }

    return (
        <View style={style.container}>
            <View style={style.formContainer}>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                        <Image source={userIcon} />
                    </View>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={name}
                            onChangeText={text => setName(text)}
                            placeholder='Full Name'
                            placeholderTextColor='black'
                            style={style.textInput}
                        />
                    </View>
                </View>

                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                        <Image source={mailIcon} />
                    </View>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholder='Email'
                            placeholderTextColor='black'
                            style={style.textInput}
                        />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                        <Image source={passwordIcon} />
                    </View>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            placeholder='Password'
                            placeholderTextColor='black'
                            style={style.textInput}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>

                    </View>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={text => onChangeConfirmPassword(text)}
                            placeholder='Re-Type Password'
                            placeholderTextColor='black'
                            style={style.confirmPasswordStyle}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                    </View>
                    <View style={{ width: '90%' }}>
                        <View style={style.inputContainer}>
                            <TouchableOpacity
                                style={style.checkBox(term)}
                                onPress={() => setTerm(!term)}
                            />
                            <Text>
                                I have agreed with <Text style={{ color: 'rgb(253,106,2)' }}>Term & Condition</Text> apply
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ButtonCustom
                    title='SIGN UP'
                    titleColor='white'
                    backgroundColor='rgb(255,92,51)'
                    width={325}
                    height={44}
                    borderColor='white'
                    fontSize={17}
                    onPress={navigateToConfirm}
                />
            </View>
        </View>
    )
}