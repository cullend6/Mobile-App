import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from './src/screens/WelcomeScreen/Welcome';
import Form from './src/screens/FormScreen/Form';

const mainNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    Form: { screen: Form },
}); 

const App = createAppContainer(mainNavigator);

export default App;
