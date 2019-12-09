import { createStackNavigator } from 'react-navigation'
import Landing from '../screens/Auth/Landing';
import Register from '../screens/Auth/Register';
import ConfirmRegister from '../screens/Auth/ConfirmRegister';
import Login from '../screens/Auth/Login';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Home from '../screens/Home'


const authNavigation = createStackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: () => ({
            // headerLeft:null,
            headerStyle: {
                borderBottomColor: 'white'
            }
        }),
    },
    ConfirmRegister: {
        screen: ConfirmRegister,
        navigationOptions: () => ({
            // headerLeft:null,
            headerStyle: {
                borderBottomColor: 'white'
            }
        }),
    },
    Login: {
        screen: Login,
        navigationOptions: () => ({
            // headerLeft:null,
            headerStyle: {
                borderBottomColor: 'white'
            }
        }),
    },
    ForgetPassword: {
        screen: ForgetPassword,
        navigationOptions: () => ({
            // headerLeft:null,
            headerStyle: {
                borderBottomColor: 'white'
            }
        }),
    },
    Home: {
        screen: Home,
        // headerMode: 'none',
        navigationOptions: () => ({
            // headerStyle: {
            //     borderBottomColor: 'white'
            // }
            header: null

        })
    }
})

export default authNavigation