import React from 'react';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers';

// Screens
import Profile from './src/screens/drawer/Profile';
import Settings from './src/screens/drawer/Settings';
import Calendar from './src/screens/toptabs/Calendar/Calendar';
import Dash from './src/screens/toptabs/Dash/Dash';
import Table from './src/screens/toptabs/Table/Table';

// Theme
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

// Navigation
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {

  const MyTheme = {
    colors: {
      primary: '#fafafa',
      background: '#424242',
      card: '#424242',
      text: '#fafafa',
      border: '#5c6bc0',

      dark9: '#212121',
      dark8: '#424242',
      dark7: '#616161',
      light1: '#fafafa',
      light2: '#f5f5f5',
      light3: '#eeeeee',
      success: '#4caf50',
      warning: '#ffca28',
    }
  };

  const createTopTabs = () => (
    <TopTabs.Navigator initialRouteName="Dash" style={{paddingTop: 30}}>
      <TopTabs.Screen name="Table" component={Table}/>
      <TopTabs.Screen name="Dash" component={Dash}/>
      <TopTabs.Screen name="Calendar" component={Calendar}/>
    </TopTabs.Navigator>
  );

  const createHomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );

  const createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={createTopTabs}/>
      <Drawer.Screen name="Profile" children={Profile}/>
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer theme={MyTheme}>
          {createDrawer()}
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
}

export default App;
