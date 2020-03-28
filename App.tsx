import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './src/screens/WelcomeScreen/Welcome';
import Form from './src/screens/FormScreen/Form';
import Calendar from './src/screens/CalendarScreen/Calendar';
import DateInfo from './src/screens/DateInfoScreen/DateInfo';

const mainNavigator = createStackNavigator({
  Welcome: { screen: Welcome },
  Form: { screen: Form },
  Calendar: { screen: Calendar },
  DateInfo: { screen: DateInfo },
});

const App = createAppContainer(mainNavigator);

export default App;
