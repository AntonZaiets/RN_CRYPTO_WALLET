import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/Home';
import SettingsScreen from '@/screens/Settings';
import SwapScreen from '@/screens/Swap';

const Tab = createBottomTabNavigator();

export default function Index() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Swap" component={SwapScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}
