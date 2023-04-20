import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import StartScreen from '../screens/StartScreen';
import { LogBox } from 'react-native';

export default function LoginPanel() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={StartScreen}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signin" component={SigninScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

