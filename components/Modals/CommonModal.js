import React, { useState } from 'react';
import { Modal, Text, View, Alert, StyleSheet, TextInput, ScrollView } from 'react-native';
import { isIphoneX } from '../../libs/platform';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function (props) {
    const [recent, setRecent] = useState(['Bali, Indonesia', 'Semarang, Central Java', 'Medan, Indonesia', 'Senopati, Jakarta', 'New York, USA'])
    const style = StyleSheet.create({
        container: {
            marginTop: isIphoneX() ? 40 : 20,
            height: '100%',
            width: '80%',
            left: '10%',
            right: '10%'
        }
    })
    return (
        <View>
                  {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}

            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={style.container}>
                    <TextInput style={{
                        borderBottomColor: 'rgb(112,112,112)',
                        borderBottomWidth: 1,
                        marginTop: 100,
                        height: 50,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}
                        placeholder='Where To?'
                    />

                    <TouchableOpacity style={{ marginTop: 25 }}>
                        <Text>(icon ntar) Use my current location</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 25 }}>
                        Recent
                    </Text>
                    {
                        recent.map((val, index) => {
                            return (
                                <Text style={{ marginTop: 20 }} key={index}>
                                    {val}
                                </Text>
                            )
                        })
                    }
                </View>
            </Modal>
        </View>
    );
}