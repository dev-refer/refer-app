import React, { useState, useEffect } from 'react'
import iconLanding from '../../assets/images/refer_landing.png'
import CacheStorage from 'react-native-cache-store'

import axios from '../../libs/axios'

import {
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import Button from '../../components/Button/Button'
import Color from '../../constants/Colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    backgroundSyle: {
        width: '100%',
        height: '100%'
    },
    layer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    safeArea: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    bodyText: {
        fontSize: 37,
        color: 'white',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 40,
        color: 'rgb(253,106,2)',
        fontWeight: 'bold',
        marginTop: 20
    }
})

export default function Landing(props) {
    const { navigation } = props

    useEffect(() => {
        checkLogin()
            .then(data => {
                if (data) {
                    return axios({
                        method: 'GET',
                        url: '/v1/users/auth',
                        headers: {
                            token: data
                        }
                    })
                }
            })
            .then(result => {
                if (result.data.user) {
                    navigation.navigate('Main')
                }
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const checkLogin = async () => {
        const result = await CacheStorage.get('token')
        return result
    }

    const navigateToRegister = () => {
        navigation.navigate('Register')
    }
    const navigateToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={style.container}>
            <ImageBackground
                style={style.backgroundSyle}
                source={iconLanding}
            >
                <View style={style.layer}>
                    <SafeAreaView style={style.safeArea}>
                        <View style={style.contentContainer}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 325 }}>
                                    <Text style={style.titleText}>
                                        Refer
                                    </Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 325 }}>
                                    <Text style={style.bodyText}>
                                        The World,
                                    </Text>
                                    <Text style={style.bodyText}>
                                        is yours to explore
                                    </Text>
                                </View>
                            </View>


                            <View style={style.buttonContainer}>
                                <Button
                                    onPress={navigateToRegister}
                                    title='SIGN UP'
                                    titleColor='white'
                                    width={325}
                                    height={42}
                                    fontSize={17}
                                    backgroundColor='rgb(255,92,51)'
                                    borderWidth={0}
                                    borderColor={Color.orangeRefer}
                                />
                                <Button
                                    onPress={navigateToLogin}
                                    title='LOG IN'
                                    titleColor='white'
                                    fontSize={17}
                                    width={325}
                                    height={42}
                                    backgroundColor='transparent'
                                    borderColor='white'
                                />
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </View>
    )


}