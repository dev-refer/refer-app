import { createStackNavigator } from 'react-navigation';
import Home from '../../screens/Home'
import DetailBanner from '../../screens/DetailSpot/index'
import ManageCategory from '../../screens/manageCategory'
import CategoryList from '../../screens/ListCategories/index'

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    DetailBanner: {
        screen: DetailBanner,
        navigationOptions: {
            header: null
        }
    },
    ManageCategory: {
        screen: ManageCategory,
        navigationOptions: {
            title: 'Categories'
        }
    },
    CategoryList: {
        screen: CategoryList,
        navigationOptions: {
            header: null
        }
    }
})

export default HomeNavigator;

