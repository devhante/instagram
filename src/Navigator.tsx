import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const RootSwitch = createSwitchNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
