import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    screenTitle: {
        marginTop: 41,
        marginLeft: 17
    }
})

export default function SavedScreen() {
    return (
        <View style={style.container}>
            <View style={style.screenTitle}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Location</Text>
            </View>
        </View>
    )
}