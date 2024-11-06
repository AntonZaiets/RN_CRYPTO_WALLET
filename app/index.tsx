import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Dashboard/index';
import SettingsScreen from '../screens/Settings';
import SwapScreen from '../screens/Swap';
import AppPrepearing from '../screens/AppPrepearing';
import SeedPhrase from '../screens/SeedPhrase.tsx';
import CreateNewWallet from '../screens/CreateNewWallet';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTabBarIcon({ focused, icon, label }) {
  return (
    <View style={{ alignItems: 'center' }}>
      {focused ? (
        <Ionicons name={icon} size={24} color="#fff" />
      ) : (
        <Ionicons name={icon} size={22} color="#9493AC" />
      )}
      <Text
        style={{
          color: focused ? '#fff' : '#aaa',
          fontSize: focused ? '12' : '15',
        }}>
        {label}
      </Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let label;

          if (route.name === 'Home') {
            iconName = 'wallet-outline';
            label = 'Wallet';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
            label = 'Settings';
          } else if (route.name === 'Swap') {
            iconName = 'swap-horizontal-outline';
            label = 'Swap';
          }

          return (
            <CustomTabBarIcon focused={focused} icon={iconName} label={label} />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#131118',
          borderTopWidth: 0,
          paddingVertical: 10,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
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
        name="SeedPhrase"
        component={SeedPhrase}
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
