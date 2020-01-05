import { createStackNavigator } from 'react-navigation'
import Landing from '../screens/Auth/Landing';
import Register from '../screens/Auth/Register';
import ConfirmRegister from '../screens/Auth/ConfirmRegister';
import Login from '../screens/Auth/Login';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Home from '../screens/Home';
import SelectLoc from '../screens/SelectLocationHome';


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
    },
    SelectLoc: {
        screen: SelectLoc,
        navigationOptions: () => ({
            headerRight: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            ),

        })
    }
})

export default authNavigation