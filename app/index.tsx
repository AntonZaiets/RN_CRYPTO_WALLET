import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import SwapScreen from '../screens/Swap';
import AppPrepearing from '../screens/AppPrepearing';
import CreateNewWallet from '../screens/CreateNewWallet';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Swap" component={SwapScreen} />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppPrepearing"
        component={AppPrepearing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateNewWallet"
        component={CreateNewWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
