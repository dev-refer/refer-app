import React, { useState, useEffect } from 'react';
import HomeHighlight from '../assets/images/bedugul.jpg'
import InfoButton from '../assets/images/home_info_button.png'
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
import ButtonCustom from '../components/Button/Button'
import CatButton from '../components/Button/CategoryButton'
import Color from '../constants/Colors'
import travel from '../assets/images/travel.png'
import Street from '../assets/images/street-food.png'

import Modal from '../components/Modals/CommonModal'
// import ArrowDown from 'react-native-vector-icons/AntDesign'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
    },
    test: {
        // resizeMode: 'contain'
        // alignItems: 'flex-start'
        // top: -80
    },
    categoryTextStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        lineHeight: 25
    },
    spotTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    cityTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        lineHeight: 40
    },
    categoriesManageSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginVertical: 15
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    manageText: {
        fontSize: 14,
        color: Color.orangeRefer,
        fontWeight: 'bold'
    },
    categoriesButtonSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10
    }

})

// const HomeHighlight = require('../assets/images/home_highlight@2x.png')

export default function Home(props) {
    [modalLocation, setModalLocation] = useState(false)
    const navigateToDetailBaner = () => {
        props.navigation.navigate('DetailBanner')
    }
    const navigateToManageCategory = () => {
        props.navigation.navigate('ManageCategory')
    }
    const navigateToListCat = () => {
        console.log("MASUK SOKIN")
        props.navigation.navigate('CategoryList')
    }
    return (
        <View style={style.container}>

            <ScrollView>
                <View style={{ height: 400, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground
                        imageStyle={style.test}
                        style={style.backgroundStyle}
                        source={HomeHighlight}
                    >
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <Text style={style.categoryTextStyle}>Sightsee</Text>
                            <Text style={style.spotTextStyle}>Penglipuran Village</Text>
                            <Text style={style.cityTextStyle}>Bali</Text>
                            <TouchableOpacity onPress={navigateToDetailBaner}>
                                <Image source={InfoButton} style={{ height: 50, width: 40, marginBottom: 40 }} />
                            </TouchableOpacity>
                            <ButtonCustom
                                title='Select Location'
                                titleColor='black'
                                backgroundColor='white'
                                width={122}
                                height={36}
                                fontSize={10}
                                borderColor='white'
                                onPress={() => { setModalLocation(true) }}
                            >
                            </ButtonCustom>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={style.categoriesManageSection}>
                        <Text style={style.categoriesText}>Your Categories</Text>
                        <TouchableOpacity onPress={navigateToManageCategory}>
                            <Text style={style.manageText}>Manage</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.categoriesButtonSection}>
                        <CatButton
                            title='Food & Drinks'
                            source={travel}
                            onPress={navigateToListCat}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title='Coffee Shop'
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title='Beauty'
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title='Sightsee'
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                    </View>
                    <View style={style.categoriesButtonSection}>
                        <CatButton
                            title='Travel Journal'
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title=''
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title=''
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title=''
                            source={travel}
                        >
                            <Image />
                        </CatButton>
                    </View>
                    <View style={style.categoriesManageSection}>
                        <Text style={style.categoriesText}>Highlights</Text>
                    </View>
                    <ScrollView horizontal>
                        <View style={style.categoriesButtonSection}>
                            <Image
                                source={Street}
                                style={{ height: 111, width: 194 }}
                            />
                            <Image
                                source={Street}
                                style={{ height: 111, width: 194 }}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={style.categoriesManageSection}>
                    <Text style={style.categoriesText}>Highlights</Text>
                </View>
                <ScrollView horizontal>
                    <View style={style.categoriesButtonSection}>
                        <CatButton
                            title=''
                            source={travel}
                            marginLeft={10}
                        >
                            <Image />
                        </CatButton>
                        <CatButton
                            title=''
                            source={travel}
                            marginLeft={10}
                        >
                            <Image />
                        </CatButton>
                    </View>
                </ScrollView>
            </ScrollView>
            <Modal isOpen={modalLocation} />
        </View>
    )
}