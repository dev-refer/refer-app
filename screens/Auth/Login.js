import React, { useState } from 'react'
import axios from '../../libs/axios'
import CacheStorage from 'react-native-cache-store';
import Loading from '../../components/Loading'

import {
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native'
import mailIcon from '../../assets/images/mailIcon.png'
import passwordIcon from '../../assets/images/passwordIcon.png'
import ButtonCustom from '../../components/Button/Button'
import Color from '../../constants/Colors'
export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const style = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1
        },
        textInput: {
            borderBottomColor: 'rgb(158,158,158)',
            borderBottomWidth: 1,
            marginTop: 5,
            fontSize: 20
        },
        inputContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
        },
        headerContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 40
        },
        referText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgb(230,230,230)'
        },
        signInText: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        labelText: {
            color: 'rgb(167,167,167)'
        },
        newUserText: {
            fontSize: 12
        },
        formContainer: {
            flex: 1,
            alignItems: "center",
            marginTop: 0,
            marginLeft: 40,
            marginRight: 40,
        },
    })
    // const resetNavToMain = () => {
    //     navigation.navigate('Main')
    // }
    const loginAction = async () => {
        try {
            setLoading(true)
            const result = await axios({
                method: 'POST',
                url: '/v1/users',
                data: {
                    email,
                    password
                }
            })
            setLoading(false)
            CacheStorage.set('token', result.data.token, '10')
            navigation.navigate('Main')
        } catch (error) {
            setLoading(false)
            alert('Error while login, please check email or password')
            console.log(error.message, 'ini err')
        }
    }
    return (
        <View style={style.container}>
            {
                loading
                    ? <Loading />
                    : null
            }
            <View style={style.formContainer}>
                <View style={style.inputContainer}>
                    <Text style={style.referText}>
                        Refer
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.signInText}>
                        Sign In
                    </Text>
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.newUserText}>
                        New user? <Text style={{ color: 'rgb(255,92,51)' }} onPress={() => navigation.navigate('Register')}>Create an account</Text>
                    </Text>
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.labelText}>
                        Email Address
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholderTextColor='black'
                            style={style.textInput}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.labelText}>
                        Password
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            placeholderTextColor='black'
                            style={style.textInput}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 50, flex: 1, alignItems: 'center' }}>
                    <ButtonCustom
                        title='Sign In'
                        titleColor='white'
                        backgroundColor={Color.orangeRefer}
                        width={230}
                        height={43}
                        fontSize={17}
                        borderColor={Color.orangeRefer}
                        onPress={loginAction}
                    />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ flex: 1, alignItems: 'center' }}> */}
                    <Text style={{ color: Color.warmGrey, marginTop: 20 }} onPress={() => navigation.navigate('ForgetPassword')}>
                        Forgot Password
                        </Text>
                    {/* <Text style={{ color: Color.warmGrey, marginTop: 20 }} >
                        Skip
                    </Text> */}
                    {/* </TouchableOpacity> */}
                </View>
            </View>

        </View>
    )
}