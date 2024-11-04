import {Stack, Tabs} from "expo-router";
import Home from './home'
import Index from './index'

function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="home"/>
        </Stack>
    );
}

function MainTabsNavigator() {
    return (
        <Tabs>
            <Tabs.Screen
                name="Dashboard"
                options={{headerShown: false}}
            />
            <Tabs.Screen
                name="Portfolio"
                options={{headerShown: false}}
            />
        </Tabs>
    );
}

