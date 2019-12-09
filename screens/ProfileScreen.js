import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

import photo from '../assets/images/photo_unavailable.png'

const style = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%'
    },
    formContainer: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40
    },
    referText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(230,230,230)'
    },
    inputContainer: {
        // flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start'
    },
    inputSpaceContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 25
    },
    myProfileText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    // headerContainer: {
    //     flexDirection: 'row',
    //     // width: '100%',
    //     alignItems: 'flex-start',

    // },
    labelText: {
        color: 'rgb(167,167,167)'
    },
    textInput: {
        borderBottomColor: 'rgb(158,158,158)',
        borderBottomWidth: 1,
        marginTop: 5,
        fontSize: 20,
        // backgroundColor: 'red'
    },
    profPictSection: {
        // flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 12,
        justifyContent: 'space-between'
    },
    profpict: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2
    },
    followJournalSection: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    followJournal: {
        marginHorizontal: 37,
        // justifyContent: 'space-between'
    }

})

export default function ProfileScreen(props) {
    const { navigation } = props

    const [name, setName] = useState('Sharajambu')
    const [email, setEmail] = useState('sharajambu@gmail.com')
    const [phone, setPhone] = useState('0812081212')
    const [nationality, setNationality] = useState('Indonesia')
    const [gender, setGender] = useState('Female')


    return (
        <View style={style.container}>
            <View style={style.formContainer}>
                <View>
                    <Text style={style.referText}>Refer</Text>
                    <Text style={style.myProfileText}>My Profile</Text>
                </View>
                <View style={style.profPictSection}>
                    <Image style={style.profpict} source={require('../assets/images/photo_unavailable.png')} />
                    <View style={style.followJournalSection}>
                        <View style={style.followJournal}>
                            <Text>8000</Text>
                            <Text style={style.labelText}>Followers</Text>
                        </View>
                        <View>
                            <Text>30</Text>
                            <Text style={style.labelText}>Journals</Text>
                        </View>
                    </View>
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
                        Nationality
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={nationality}
                            onChangeText={text => setNationality(text)}
                            placeholderTextColor='black'
                            autoCapitalize='none'
                            style={style.textInput}
                        />
                    </View>
                </View>
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText}>
                        Gender
                    </Text>
                </View>
                <View style={style.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            value={gender}
                            onChangeText={text => setGender(text)}
                            placeholderTextColor='black'
                            autoCapitalize='none'
                            style={style.textInput}
                        />
                    </View>
                </View>
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText}>
                        Edit Profile
                    </Text>
                </View>
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText}>
                        Change Password
                    </Text>
                </View>
                <View style={style.inputSpaceContainer}>
                    <Text style={style.labelText} onPress={() => navigation.navigate('Landing')}>
                        Sign Out
                    </Text>
                </View>
            </View>
        </View>
    )
}