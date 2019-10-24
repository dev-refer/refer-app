import React from 'react'
import Color from '../constants/Colors'

import {
    ActivityIndicator,
    Text,
    View
} from 'react-native'

export default function Loading() {
    return (
        <View style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <ActivityIndicator size="large" color={Color.orangeRefer}  />
        </View>
    )
}
