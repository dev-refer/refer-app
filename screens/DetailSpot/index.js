import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import Thumb from '../../assets/icon/thumbUp.png'
import Foto from '../../assets/images/foto.jpeg'
import Color from '../../constants/Colors'
import { isIphoneX } from '../../libs/platform'
import Banner from '../../assets/images/bedugul.jpg'


class DetailSpot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {
        iphoneX: null
    }
    componentDidMount() {
        this.setState({
            iphoneX: isIphoneX()
        })
    }

    resetStack = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (<View style={{ flex: 1, marginTop: this.state.iphoneX ? 40 : 0 }}>
            <ScrollView>
                <ImageBackground source={Banner} resizeMode='stretch' style={{ width: '100%', height: 250 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
                        <TouchableOpacity onPress={this.resetStack}>
                            <Text>
                                Back (nanti icon)
                            </Text>
                        </TouchableOpacity>
                        <Text>
                            (icon love)
                        </Text>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, marginLeft: '3%', marginRight: '3%', marginTop: 15 }}>
                    <View style={{ borderBottomWidth: '1', borderColor: 'rgba(255,92,51,0.35)', width: '100%', height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 20 }}>
                            </Image>
                            <Text>
                                test
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 20 }}>
                            </Image>
                            <Text>
                                test
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 20 }}>
                            </Image>
                            <Text>
                                test
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 20 }}>
                            </Image>
                            <Text>
                                test
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35)' }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>
                            On Three
                        </Text>
                        <Text style={{ marginBottom: 30, color: 'rgb(112,112,112)' }}>
                            It is a long established fact that a point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                    </View>
                    <View style={{ borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35)' }}>
                        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 25 }} />
                            <Text style={{ color: 'green' }}>
                                t is a long established fact that
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 25 }} />
                            <Text style={{ color: 'green' }}>
                                (021)-84444930
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                            <Image source={Thumb} resizeMode='contain' style={{ height: 25 }} />
                            <Text style={{ color: 'green' }}>
                                Open Now
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 12 }}>
                            Reviews(250)
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            See all
                        </Text>
                    </View>
                    <View style={{ marginTop: '5%', borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35) ' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Foto} resizeMode='cover' style={{ height: 40, width: 40, borderWidth: 0.5, borderColor: 'white', borderRadius: 40 / 2 }} />
                            <View style={{ marginLeft: '3%' }}>
                                <Text style={{ color: Color.orangeRefer, fontWeight: 'bold' }}>
                                    Sharajambu
                            </Text>
                                <Text style={{ color: 'rgb(112,112,112)', fontSize: 12 }}>
                                    1 day ago
                            </Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: '5%', marginBottom: '3%', color: 'rgb(112,112,112)' }}>
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                            </Text>
                    </View>
                    <View style={{ marginTop: '5%', borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35) ' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Foto} resizeMode='cover' style={{ height: 40, width: 40, borderWidth: 0.5, borderColor: 'white', borderRadius: 40 / 2 }} />
                            <View style={{ marginLeft: '3%' }}>
                                <Text style={{ color: Color.orangeRefer, fontWeight: 'bold' }}>
                                    Sharajambu
                            </Text>
                                <Text style={{ color: 'rgb(112,112,112)', fontSize: 12 }}>
                                    1 day ago
                            </Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: '5%', marginBottom: '3%', color: 'rgb(112,112,112)' }}>
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                            </Text>
                    </View>
                    <View style={{ marginTop: '5%', borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35) ' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Foto} resizeMode='cover' style={{ height: 40, width: 40, borderWidth: 0.5, borderColor: 'white', borderRadius: 40 / 2 }} />
                            <View style={{ marginLeft: '3%' }}>
                                <Text style={{ color: Color.orangeRefer, fontWeight: 'bold' }}>
                                    Sharajambu
                            </Text>
                                <Text style={{ color: 'rgb(112,112,112)', fontSize: 12 }}>
                                    1 day ago
                            </Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: '5%', marginBottom: '3%', color: 'rgb(112,112,112)' }}>
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                            </Text>
                    </View>
                    <View style={{ marginTop: '5%', borderBottomWidth: '1', borderColor: 'rgba(112,112,112,0.35) ' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Foto} resizeMode='cover' style={{ height: 40, width: 40, borderWidth: 0.5, borderColor: 'white', borderRadius: 40 / 2 }} />
                            <View style={{ marginLeft: '3%' }}>
                                <Text style={{ color: Color.orangeRefer, fontWeight: 'bold' }}>
                                    Sharajambu
                            </Text>
                                <Text style={{ color: 'rgb(112,112,112)', fontSize: 12 }}>
                                    1 day ago
                            </Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: '5%', marginBottom: '3%', color: 'rgb(112,112,112)' }}>
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                            </Text>
                    </View>

                </View>

            </ScrollView>
        </View>);
    }
}

export default DetailSpot;