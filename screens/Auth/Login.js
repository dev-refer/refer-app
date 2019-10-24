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
        },
        inputContainer: {
            flexDirection: 'row',
            width: '100%',
            marginBottom: 50
        },
        formContainer: {
            flex: 1,
            alignItems: "center",
            marginTop: 70,
            marginLeft: 10,
            marginRight: 10,
        },
    })
    const resetNavToMain = () => {
        navigation.navigate('Main')
    }
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
                <View>
                    <ButtonCustom
                        title='LOG IN'
                        titleColor='white'
                        backgroundColor={Color.orangeRefer}
                        width={325}
                        height={43}
                        fontSize={17}
                        borderColor={Color.orangeRefer}
                        onPress={loginAction}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: Color.warmGrey }}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}