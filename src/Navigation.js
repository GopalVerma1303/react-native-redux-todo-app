import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SettingScreen from './screens/Setting';

import {
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { useSelector } from "react-redux";

export default () => {

    const Tab = createBottomTabNavigator();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);

    return (
        <NavigationContainer theme={themeReducer.theme ? DarkTheme : DefaultTheme} >
            <PaperProvider theme={themeReducer.theme ? PaperDarkTheme : PaperDefaultTheme}>
                <Tab.Navigator screenOptions={({ route }) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'cog' : 'cog';
                        }
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}  >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingScreen} />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}