import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const navigator = createStackNavigator ({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Register: RegisterScreen
  }, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Free Market'
    }
  }
);

export default createAppContainer(navigator);
