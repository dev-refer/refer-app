import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { isIphoneX } from '../../libs/platform'
import Baner from '../../assets/images/bedugul.jpg'
import Card from '../../components/Card/Card'
import { StackActions, NavigationActions } from 'react-navigation';

class ListCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {
        iphonex: null
    }
    componentDidMount() {
        this.setState({
            iphonex: isIphoneX()
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
        return (
            <View style={{ flex: 1, marginTop: this.state.iphonex ? 40 : 0 }}>
                <ScrollView>

                    <ImageBackground source={Baner} resizeMode='stretch' style={{ height: 300, width: '100%' }}>
                        <View style={{ marginTop: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={this.resetStack}>
                                <Text>
                                    Back (nanti icon)
                    </Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 30, fontWeight: '500', marginRight: '5%', color:'white' }}>
                                Refer
                    </Text>

                        </View>
                        <View style={{ position: 'absolute', top: '60%', left: '12%', maxWidth: '84%' }}>
                            <Text style={{ fontSize: 25, fontWeight: '500', color: 'white' }} >
                                Count the memories, not the calories
                    </Text>
                        </View>
                        <View style={{
                            width: '90%',
                            position: "absolute",
                            left: '5%',
                            right: '5%',
                            height: 40,
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 40,
                            top: '93%',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 1,
                                height: 2,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 3,
                            elevation: 24,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <Text style={{ marginLeft: '5%', color: 'rgb(112,112,112)', fontWeight: '200' }}>
                                Medan, Indonesia
                            </Text>
                            <Text style={{ marginRight: '5%', color: 'orange' }}>
                                V
                            </Text>
                        </View>
                    </ImageBackground>
                    <View style={{ marginRight: '3%', marginLeft: '3%', marginTop: '5%', flex: 1 }}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </View>


                </ScrollView>

            </View>
        );
    }
}

export default ListCategories;