import React from 'react';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers';

// Screens
import Profile from './src/screens/drawer/Profile';
import Settings from './src/screens/drawer/Settings';
import Calendar from './src/screens/toptabs/Calendar';
import Dash from './src/screens/toptabs/Dash';
import Table from './src/screens/toptabs/Table';

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

const store = createStore(allReducers);

const App = () => {

  const MyTheme = {
    colors: {
      primary: '#fafafa',
      background: '#424242',
      card: '#212121',
      text: '#eeeeee',
      border: '#5c6bc0'
    }
  };

  const createTopTabs = () => (
    <TopTabs.Navigator initialRouteName="Dash">
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
