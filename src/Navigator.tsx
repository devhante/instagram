import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';

const RootSwitch = createSwitchNavigator(
    {
        Main: MainScreen
    },
    {
        initialRouteName: 'Main'
    }
);

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
