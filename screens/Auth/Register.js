import React, { useState } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import PhoneInput from 'react-native-phone-input'
import Loading from '../../components/Loading.js'
import axios from '../../libs/axios.js'

import ButtonCustom from '../../components/Button/Button';
import userIcon from '../../assets/images/userIcon.png'
import mailIcon from '../../assets/images/mailIcon.png'
import passwordIcon from '../../assets/images/passwordIcon.png'
import Color from '../../constants/Colors'

import { connect } from 'react-redux';

const propsRedux = state => ({
    state
})
const dispatchRedux = dispatch => ({

})

const registerScreen = ({ navigation, state }) => {

    const [validationColor, setValidationColor] = useState('rgb(158,158,158)')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [term, setTerm] = useState(false)

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
            alignItems: 'center'
        },
        inputSpaceContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 25
        },
        headerContainer: {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 40
        },
        formContainer: {
            // flex: 1, 
            alignItems: "center",
            justifyContent: 'space-between',
            marginTop: 0,
            marginLeft: 40,
            marginRight: 40
        },
        confirmPasswordStyle: {
            borderBottomColor: validationColor,
            borderBottomWidth: 1,
            marginTop: 5,
            fontSize: 20
        },
        labelText: {
            color: 'rgb(167,167,167)'
        },
        referText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgb(230,230,230)'
        },
        createAccountText: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        termsAndCondition: {
            fontSize: 12,
            color: 'rgb(172,171,171)'
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
    // const navigateToConfirm = () => {
    //     if (password !== confirmPassword || !term || !email) {
    //         alert('Please Complete Form')
    //     } else {
    //         navigation.navigate('ConfirmRegister', {
    //             email,
    //             password,
    //             name,
    //             phone
    //         })
    //     }
    // }

    const submitRegister = async () => {
        if (password === confirmPassword) {
            const obj = {
                nationality: 'Indonesia',
                DOB: '1991-1-1',
                gender: 'male',
                name,
                email,
                password,
                phone
            }
            try {
                setLoading(true)
                await axios({
                    method: 'POST',
                    data: obj,
                    url: '/v1/users/register'
                })
                setLoading(false)
                Alert.alert(
                    'Success',
                    'Please go to login page',
                    [
                        {
                            text: 'OK', onPress: () => {
                                const resetStack = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({ routeName: 'Landing' })
                                    ]
                                })
                                navigation.dispatch(resetStack)
                            }
                        },
                    ],
                    { cancelable: true }
                );

            } catch (error) {
                console.log(error.response);

                setLoading(false)
                alert('error while register, please try again later')
            }
        } else {
            setLoading(false)
            alert('please complete form')
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
                    <Text style={style.createAccountText}>
                        Create an account
                    </Text>
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.labelText}>
                        Username
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={name}
                            onChangeText={text => setName(text)}
                            placeholderTextColor='black'
                            style={style.textInput}
                            autoCapitalize='none'

                        />
                    </View>
                </View>
                <View style={style.inputSpaceContainer}>
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
                            autoCapitalize='none'
                            style={style.textInput}
                        />
                    </View>
                </View>
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText}>
                        Phone Number
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={phone}
                            onChangeText={text => setPhone(text)}
                            placeholderTextColor='black'
                            style={style.textInput}
                        />
                        {/* <View style={{ marginTop: 10 }}>
                            <PhoneInput ref={ref => { this.phone = ref; }} />
                        </View> */}
                    </View>
                </View>
                <View style={style.inputSpaceContainer}>
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
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText}>
                        Re-Type Password
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={text => onChangeConfirmPassword(text)}
                            placeholderTextColor='black'
                            style={style.confirmPasswordStyle}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '10%' }}>
                    </View>
                    {/* <View style={{ width: '90%' }}>
                        <View style={style.inputContainer}>
                            <TouchableOpacity
                                style={style.checkBox(term)}
                                onPress={() => setTerm(!term)}
                            />
                            <Text>
                                I have agreed with <Text style={{ color: 'rgb(253,106,2)' }}>Term & Condition</Text> apply
                            </Text>
                        </View>
                    </View> */}
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ButtonCustom
                    title='Register'
                    titleColor='white'
                    backgroundColor='rgb(255,92,51)'
                    width={230}
                    height={44}
                    borderColor='white'
                    fontSize={17}
                    onPress={submitRegister}
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={style.termsAndCondition}>
                        By clicking Sign Up, I agree that i have read and
                    </Text>
                </View>
                <Text style={style.termsAndCondition}>
                    accepted the <Text style={{ color: 'rgb(255,92,51)' }}>Terms of Use</Text> and <Text style={{ color: 'rgb(255,92,51)' }}>Privacy Policy</Text>
                </Text>
            </View>
            <View>

            </View>
        </View>
    )
}

export default connect(
    propsRedux,
    dispatchRedux
)(registerScreen)