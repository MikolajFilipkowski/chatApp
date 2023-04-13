import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from '../firebase.js'
import ChatScreen from '../screens/ChatScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';
import SettingsScreen from '../screens/SettingsScreen.jsx';

const Tab = createBottomTabNavigator();

export default function LoggedIn() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Chat" component={ChatScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
