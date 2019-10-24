import React, { useState } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native'
import Loading from '../../components/Loading'

import SelectInput from 'react-native-picker-select'
import DatePicker from 'react-native-datepicker'

import ButtonCustom from '../../components/Button/Button'
import Color from '../../constants/Colors'
import axios from '../../libs/axios';

export default function ConfirmRegister({ navigation }) {
    const [nationality, setNationality] = useState('')
    const [DOB, setDOB] = useState('')
    const [gender, setGender] = useState('')
    const [loading, setLoading] = useState(false)

    const style = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        pickerStyle: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 4,
            color: 'black',
        },
        formContainer: {
            flex: 5,
            width: '100%'
        },
        inputContainer: {
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'rgb(106,106,106)',
            width: '80%',
            marginLeft: 30,
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        dateContainer: {
            marginBottom: 15,
            width: '80%',
            marginLeft: 30,
            marginBottom: 30
        }
    })
    const country = [
        {
            "name": "Afghanistan"
        },
        {
            "name": "Åland Islands"
        },
        {
            "name": "Albania"
        },
        {
            "name": "Algeria"
        },
        {
            "name": "American Samoa"
        },
        {
            "name": "Andorra"
        },
        {
            "name": "Angola"
        },
        {
            "name": "Anguilla"
        },
        {
            "name": "Antarctica"
        },
        {
            "name": "Antigua and Barbuda"
        },
        {
            "name": "Argentina"
        },
        {
            "name": "Armenia"
        },
        {
            "name": "Aruba"
        },
        {
            "name": "Australia"
        },
        {
            "name": "Austria"
        },
        {
            "name": "Azerbaijan"
        },
        {
            "name": "Bahamas"
        },
        {
            "name": "Bahrain"
        },
        {
            "name": "Bangladesh"
        },
        {
            "name": "Barbados"
        },
        {
            "name": "Belarus"
        },
        {
            "name": "Belgium"
        },
        {
            "name": "Belize"
        },
        {
            "name": "Benin"
        },
        {
            "name": "Bermuda"
        },
        {
            "name": "Bhutan"
        },
        {
            "name": "Bolivia (Plurinational State of)"
        },
        {
            "name": "Bonaire, Sint Eustatius and Saba"
        },
        {
            "name": "Bosnia and Herzegovina"
        },
        {
            "name": "Botswana"
        },
        {
            "name": "Bouvet Island"
        },
        {
            "name": "Brazil"
        },
        {
            "name": "British Indian Ocean Territory"
        },
        {
            "name": "United States Minor Outlying Islands"
        },
        {
            "name": "Virgin Islands (British)"
        },
        {
            "name": "Virgin Islands (U.S.)"
        },
        {
            "name": "Brunei Darussalam"
        },
        {
            "name": "Bulgaria"
        },
        {
            "name": "Burkina Faso"
        },
        {
            "name": "Burundi"
        },
        {
            "name": "Cambodia"
        },
        {
            "name": "Cameroon"
        },
        {
            "name": "Canada"
        },
        {
            "name": "Cabo Verde"
        },
        {
            "name": "Cayman Islands"
        },
        {
            "name": "Central African Republic"
        },
        {
            "name": "Chad"
        },
        {
            "name": "Chile"
        },
        {
            "name": "China"
        },
        {
            "name": "Christmas Island"
        },
        {
            "name": "Cocos (Keeling) Islands"
        },
        {
            "name": "Colombia"
        },
        {
            "name": "Comoros"
        },
        {
            "name": "Congo"
        },
        {
            "name": "Congo (Democratic Republic of the)"
        },
        {
            "name": "Cook Islands"
        },
        {
            "name": "Costa Rica"
        },
        {
            "name": "Croatia"
        },
        {
            "name": "Cuba"
        },
        {
            "name": "Curaçao"
        },
        {
            "name": "Cyprus"
        },
        {
            "name": "Czech Republic"
        },
        {
            "name": "Denmark"
        },
        {
            "name": "Djibouti"
        },
        {
            "name": "Dominica"
        },
        {
            "name": "Dominican Republic"
        },
        {
            "name": "Ecuador"
        },
        {
            "name": "Egypt"
        },
        {
            "name": "El Salvador"
        },
        {
            "name": "Equatorial Guinea"
        },
        {
            "name": "Eritrea"
        },
        {
            "name": "Estonia"
        },
        {
            "name": "Ethiopia"
        },
        {
            "name": "Falkland Islands (Malvinas)"
        },
        {
            "name": "Faroe Islands"
        },
        {
            "name": "Fiji"
        },
        {
            "name": "Finland"
        },
        {
            "name": "France"
        },
        {
            "name": "French Guiana"
        },
        {
            "name": "French Polynesia"
        },
        {
            "name": "French Southern Territories"
        },
        {
            "name": "Gabon"
        },
        {
            "name": "Gambia"
        },
        {
            "name": "Georgia"
        },
        {
            "name": "Germany"
        },
        {
            "name": "Ghana"
        },
        {
            "name": "Gibraltar"
        },
        {
            "name": "Greece"
        },
        {
            "name": "Greenland"
        },
        {
            "name": "Grenada"
        },
        {
            "name": "Guadeloupe"
        },
        {
            "name": "Guam"
        },
        {
            "name": "Guatemala"
        },
        {
            "name": "Guernsey"
        },
        {
            "name": "Guinea"
        },
        {
            "name": "Guinea-Bissau"
        },
        {
            "name": "Guyana"
        },
        {
            "name": "Haiti"
        },
        {
            "name": "Heard Island and McDonald Islands"
        },
        {
            "name": "Holy See"
        },
        {
            "name": "Honduras"
        },
        {
            "name": "Hong Kong"
        },
        {
            "name": "Hungary"
        },
        {
            "name": "Iceland"
        },
        {
            "name": "India"
        },
        {
            "name": "Indonesia"
        },
        {
            "name": "Côte d'Ivoire"
        },
        {
            "name": "Iran (Islamic Republic of)"
        },
        {
            "name": "Iraq"
        },
        {
            "name": "Ireland"
        },
        {
            "name": "Isle of Man"
        },
        {
            "name": "Israel"
        },
        {
            "name": "Italy"
        },
        {
            "name": "Jamaica"
        },
        {
            "name": "Japan"
        },
        {
            "name": "Jersey"
        },
        {
            "name": "Jordan"
        },
        {
            "name": "Kazakhstan"
        },
        {
            "name": "Kenya"
        },
        {
            "name": "Kiribati"
        },
        {
            "name": "Kuwait"
        },
        {
            "name": "Kyrgyzstan"
        },
        {
            "name": "Lao People's Democratic Republic"
        },
        {
            "name": "Latvia"
        },
        {
            "name": "Lebanon"
        },
        {
            "name": "Lesotho"
        },
        {
            "name": "Liberia"
        },
        {
            "name": "Libya"
        },
        {
            "name": "Liechtenstein"
        },
        {
            "name": "Lithuania"
        },
        {
            "name": "Luxembourg"
        },
        {
            "name": "Macao"
        },
        {
            "name": "Macedonia (the former Yugoslav Republic of)"
        },
        {
            "name": "Madagascar"
        },
        {
            "name": "Malawi"
        },
        {
            "name": "Malaysia"
        },
        {
            "name": "Maldives"
        },
        {
            "name": "Mali"
        },
        {
            "name": "Malta"
        },
        {
            "name": "Marshall Islands"
        },
        {
            "name": "Martinique"
        },
        {
            "name": "Mauritania"
        },
        {
            "name": "Mauritius"
        },
        {
            "name": "Mayotte"
        },
        {
            "name": "Mexico"
        },
        {
            "name": "Micronesia (Federated States of)"
        },
        {
            "name": "Moldova (Republic of)"
        },
        {
            "name": "Monaco"
        },
        {
            "name": "Mongolia"
        },
        {
            "name": "Montenegro"
        },
        {
            "name": "Montserrat"
        },
        {
            "name": "Morocco"
        },
        {
            "name": "Mozambique"
        },
        {
            "name": "Myanmar"
        },
        {
            "name": "Namibia"
        },
        {
            "name": "Nauru"
        },
        {
            "name": "Nepal"
        },
        {
            "name": "Netherlands"
        },
        {
            "name": "New Caledonia"
        },
        {
            "name": "New Zealand"
        },
        {
            "name": "Nicaragua"
        },
        {
            "name": "Niger"
        },
        {
            "name": "Nigeria"
        },
        {
            "name": "Niue"
        },
        {
            "name": "Norfolk Island"
        },
        {
            "name": "Korea (Democratic People's Republic of)"
        },
        {
            "name": "Northern Mariana Islands"
        },
        {
            "name": "Norway"
        },
        {
            "name": "Oman"
        },
        {
            "name": "Pakistan"
        },
        {
            "name": "Palau"
        },
        {
            "name": "Palestine, State of"
        },
        {
            "name": "Panama"
        },
        {
            "name": "Papua New Guinea"
        },
        {
            "name": "Paraguay"
        },
        {
            "name": "Peru"
        },
        {
            "name": "Philippines"
        },
        {
            "name": "Pitcairn"
        },
        {
            "name": "Poland"
        },
        {
            "name": "Portugal"
        },
        {
            "name": "Puerto Rico"
        },
        {
            "name": "Qatar"
        },
        {
            "name": "Republic of Kosovo"
        },
        {
            "name": "Réunion"
        },
        {
            "name": "Romania"
        },
        {
            "name": "Russian Federation"
        },
        {
            "name": "Rwanda"
        },
        {
            "name": "Saint Barthélemy"
        },
        {
            "name": "Saint Helena, Ascension and Tristan da Cunha"
        },
        {
            "name": "Saint Kitts and Nevis"
        },
        {
            "name": "Saint Lucia"
        },
        {
            "name": "Saint Martin (French part)"
        },
        {
            "name": "Saint Pierre and Miquelon"
        },
        {
            "name": "Saint Vincent and the Grenadines"
        },
        {
            "name": "Samoa"
        },
        {
            "name": "San Marino"
        },
        {
            "name": "Sao Tome and Principe"
        },
        {
            "name": "Saudi Arabia"
        },
        {
            "name": "Senegal"
        },
        {
            "name": "Serbia"
        },
        {
            "name": "Seychelles"
        },
        {
            "name": "Sierra Leone"
        },
        {
            "name": "Singapore"
        },
        {
            "name": "Sint Maarten (Dutch part)"
        },
        {
            "name": "Slovakia"
        },
        {
            "name": "Slovenia"
        },
        {
            "name": "Solomon Islands"
        },
        {
            "name": "Somalia"
        },
        {
            "name": "South Africa"
        },
        {
            "name": "South Georgia and the South Sandwich Islands"
        },
        {
            "name": "Korea (Republic of)"
        },
        {
            "name": "South Sudan"
        },
        {
            "name": "Spain"
        },
        {
            "name": "Sri Lanka"
        },
        {
            "name": "Sudan"
        },
        {
            "name": "Suriname"
        },
        {
            "name": "Svalbard and Jan Mayen"
        },
        {
            "name": "Swaziland"
        },
        {
            "name": "Sweden"
        },
        {
            "name": "Switzerland"
        },
        {
            "name": "Syrian Arab Republic"
        },
        {
            "name": "Taiwan"
        },
        {
            "name": "Tajikistan"
        },
        {
            "name": "Tanzania, United Republic of"
        },
        {
            "name": "Thailand"
        },
        {
            "name": "Timor-Leste"
        },
        {
            "name": "Togo"
        },
        {
            "name": "Tokelau"
        },
        {
            "name": "Tonga"
        },
        {
            "name": "Trinidad and Tobago"
        },
        {
            "name": "Tunisia"
        },
        {
            "name": "Turkey"
        },
        {
            "name": "Turkmenistan"
        },
        {
            "name": "Turks and Caicos Islands"
        },
        {
            "name": "Tuvalu"
        },
        {
            "name": "Uganda"
        },
        {
            "name": "Ukraine"
        },
        {
            "name": "United Arab Emirates"
        },
        {
            "name": "United Kingdom of Great Britain and Northern Ireland"
        },
        {
            "name": "United States of America"
        },
        {
            "name": "Uruguay"
        },
        {
            "name": "Uzbekistan"
        },
        {
            "name": "Vanuatu"
        },
        {
            "name": "Venezuela (Bolivarian Republic of)"
        },
        {
            "name": "Viet Nam"
        },
        {
            "name": "Wallis and Futuna"
        },
        {
            "name": "Western Sahara"
        },
        {
            "name": "Yemen"
        },
        {
            "name": "Zambia"
        },
        {
            "name": "Zimbabwe"
        }
    ]
    country.map((val, index) => {
        val.label = val.name
        val.value = val.name
        val.key = index
        val.color = 'black'
    })
    const submitRegister = async () => {
        if (nationality || DOB || gender) {
            const obj = {
                nationality,
                DOB,
                gender,
                name: navigation.getParam('name'),
                email: navigation.getParam('email').toLowerCase(),
                password: navigation.getParam('password'),
                phone: '621234567'
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
            <View style={{ flex: 2, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    One More Step
            </Text>
            </View>

            <View style={style.formContainer}>
                <View style={style.inputContainer}>
                    <View>
                        <SelectInput
                            onValueChange={(value) => setNationality(value)}
                            placeholderTextColor='black'
                            items={country}
                            value={nationality}
                            placeholder={{ label: 'Nationality' }}
                        />
                    </View>
                    <View>
                        <Ionicons name="md-arrow-dropdown" size={32} color="rgb(106,106,106)" />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <View>
                        <SelectInput
                            onValueChange={(value) => setGender(value)}
                            placeholderTextColor='black'
                            items={[
                                { label: 'Male', value: 'male', color: 'black', key: 1 },
                                { label: 'Female', value: 'female', color: 'black', key: 2 },
                            ]}
                            value={gender}
                            placeholder={{ label: 'Gender' }}
                        />
                    </View>
                    <View>
                        <Ionicons name="md-arrow-dropdown" size={32} color="rgb(106,106,106)" />
                    </View>
                </View>
                <View style={style.dateContainer}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={DOB}
                        mode="date"
                        placeholder="Date of Birth"
                        format="YYYY-MM-DD"
                        maxDate="2019-12-30"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { setDOB(date) }}
                    />
                </View>
            </View>
            <View style={{ flex: 5 }}>

                <ButtonCustom
                    title="AWESOME!"
                    titleColor='white'
                    height={47}
                    width={325}
                    fontSize={17}
                    backgroundColor={Color.orangeRefer}
                    borderColor={Color.orangeRefer}
                    onPress={submitRegister}
                />
            </View>


        </View>
    )
}