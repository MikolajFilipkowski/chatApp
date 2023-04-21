import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from '../firebase.js'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function LoggedIn() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Chat" component={ChatScreen}  
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    }}/>
                <Tab.Screen name="Profile" component={ProfileScreen}  
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="account-circle" size={size} color={color} />
                        )
                    }}/>
                <Tab.Screen name="Settings" component={SettingsScreen} 
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings-sharp" size={size} color={color} />
                        )
                    }}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

