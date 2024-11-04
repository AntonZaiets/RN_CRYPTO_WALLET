import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import SwapScreen from '../screens/Swap';
import AppPrepearing from '../screens/AppPrepearing';

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
                <Stack.Screen name="AppPrepearing" component={AppPrepearing} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
}
