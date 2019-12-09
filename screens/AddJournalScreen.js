import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default function SavedScreen() {
    return (
        <View style={style.container}>
            <Text>Saved</Text>
        </View>
    )
}