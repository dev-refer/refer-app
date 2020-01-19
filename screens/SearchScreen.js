import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native'
import SpotCard from '../components/Banner/SpotCard'
import Banner from '../assets/images/jazz-festival-poster.png'
import ontri from '../assets/images/onthree.png'

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    borderLine: {
        borderBottomColor: 'rgb(216,216,216)',
        borderBottomWidth: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(138,138,138)'
    },
    centerText: {
        fontSize: 18,
        color: 'rgb(138,138,138)'
    }
})

export default function SearchScreen() {
    return (
        <View style={style.container}>
            <View style={{ padding: 40, marginTop: 20 }}>
                <TextInput
                    style={style.borderLine}
                    placeholder="Search"
                />
            </View>

            <View style={{
                flex: 1,
                marginHorizontal: 10,
                flexWrap: 'wrap',
                flexDirection: 'column'
            }}>
                {/* <Text style={style.centerText}>
                    Find something you love
                </Text> */}
                <SpotCard source={ontri} title='On Three' />
                <SpotCard source={ontri} title='On Three' />
                <SpotCard source={ontri} title='On Three' />


            </View>
        </View>
    )
}