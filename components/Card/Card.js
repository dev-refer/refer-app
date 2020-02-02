import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
} from 'react-native'
import Gambar from '../../assets/images/bedugul.jpg'
import Like from '../../assets/icon/thumbUp.png'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={{
                marginTop: '5%',
                backgroundColor: 'white',
                shadowColor: "#000",
                borderRadius: 5,
                shadowOffset: {
                    width: 1,
                    height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 24,
            }}>
                <ImageBackground source={Gambar} resizeMode='stretch' style={{ width: '100%', height: 175 }} >
                    <Image resizeMode='contain' source={Like} style={{ height: 45, width: 45, position: 'absolute', left: '85%', top: '87z%', borderWidth: 0.5, borderColor: 'white', borderRadius: 40 / 2, backgroundColor: 'white' }} />
                </ImageBackground>
                <View style={{ marginLeft: '2%', marginRight: '2%' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: '1%' }}>
                        Martabak Murni
                    </Text>
                    <Text style={{ color: 'rgb(112,112,112)', marginTop: '2%' }}>
                        Jalan Prapanca Raya No.9, Pulo, Kebayoran Baru, RT.1/RW.1, Petogogan,
                    </Text>
                    <Text style={{ color: 'green', marginTop: '1%', marginBottom: '1%' }} >
                        Open Now
                    </Text>
                </View>
            </View>);
    }
}

export default Card;