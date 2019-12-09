import React, { useState, useEffect } from 'react'
import iconLanding from '../../assets/images/refer_landingpage.jpg'
import CacheStorage from 'react-native-cache-store'

import axios from '../../libs/axios'

import {
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
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
        // backgroundColor: 'rgba(0,0,0,0.7)',
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
    worldText: {
        fontSize: 37,
        color: '#ff5c33',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { height: 1 },
        textShadowRadius: 10,
        shadowOpacity: 1000
    },
    toExploreText: {
        fontSize: 37,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { height: 1 },
        textShadowRadius: 10,
        shadowOpacity: 1000
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'right'
    },
    button: {
        // borderRadius: 25,
        // paddingTop: 3,
        // paddingBottom: 1,
        // paddingLeft: 3,
        // paddingRight: 3,
        // backgroundColor: '#000000',
        // shadowColor: 'rgba(0, 0, 0, 0.1)',
        // shadowOpacity: -1,
        // elevation: 6,
        // shadowRadius: 25,
        // shadowOffset: { width: 1, height: 1 },
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 10, height: 10 },
        textShadowRadius: 10
    },
    // textWithShadow: {
    //     textShadowColor: 'rgba(0, 0, 0, 0.75)',
    //     textShadowOffset: { width: -1, height: 1 },
    //     textShadowRadius: 10
    // }
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
                                    <Text style={style.titleText} onPress={() => navigation.navigate('Main')}>
                                        Skip
                                    </Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 325 }}>
                                    <Text style={style.worldText}>
                                        World
                                    </Text>
                                    <Text style={style.toExploreText}>
                                        to explore
                                    </Text>
                                </View>
                            </View>


                            <View style={style.buttonContainer}>
                                <TouchableOpacity style={style.button}>
                                    <Button
                                        onPress={navigateToRegister}
                                        title='Register'
                                        titleColor='white'
                                        width={230}
                                        height={42}
                                        fontSize={17}
                                        backgroundColor='rgb(255,92,51)'
                                        borderWidth={0}
                                        borderColor={Color.orangeRefer}
                                    />
                                </TouchableOpacity>
                                <Button
                                    onPress={navigateToLogin}
                                    title='Sign In'
                                    titleColor='rgb(255,92,51)'
                                    fontSize={17}
                                    width={230}
                                    height={42}
                                    backgroundColor='white'
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