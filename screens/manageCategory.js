import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text,
    ScrollView,
    SafeAreaView
} from 'react-native'
import CatButton from '../components/Button/CategoryButton'
import travel from '../assets/images/travel.png'

const Detail = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>

                <View>
                    <Text style={{ marginLeft: 10, marginTop: 20, fontWeight: 'bold' }}>
                        Your Favourites
            </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton />
                </View>
                <View>
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 30 }}>
                        Other Category
            </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />
                    <CatButton source={travel} title='test' />

                </View>
            </ScrollView>
        </View>
    )
}

export default Detail