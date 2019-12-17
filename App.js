import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { store, history } from './redux/store/index'
import { Provider } from "react-redux";

import AppNavigator from './navigation/AppNavigator';

async function loadResourcesAsync() {
  return Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      require('./assets/images/mailIcon.png'),
      require('./assets/images/passwordIcon.png'),
      require('./assets/images/refer_landing.png'),
      require('./assets/images/userIcon.png'),
      require('./assets/images/splash.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // ...Ionicons.font,
      ...Entypo.font
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // // rsemove this if you are not using it in your app
      // space_mono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends React.Component {
  state = {
    loading: true
  }
  finishLoading() {
    this.setState({ loading: false })
  }
  handleError(e) {
    console.log(e)
  }
  render() {
    return (
      <Provider store={store}>
        {
          !this.props.skipLoadingScreen && !this.state.loading
            ? <AppLoading
              startAsync={loadResourcesAsync}
              onError={(e) => { this.handleError(e) }}
              onFinish={this.finishLoading}
            />
            : <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
            </View>
        }
      </Provider>
    )
  }
}

export default App;