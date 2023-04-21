import React, { Component, FC } from 'react';
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'

const StartScreen:FC<any> = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.formButtonTitle}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.formButtonTitle}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen