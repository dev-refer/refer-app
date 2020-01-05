import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

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
            <View style={{ padding: 85 }}>
                <Text style={style.centerText}>
                    Find something you love
                </Text>
            </View>
        </View>
    )
}