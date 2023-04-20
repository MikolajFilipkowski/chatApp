import React, { Component, FC } from 'react';
import { Button } from 'react-native'
import { Text, View } from 'react-native'

const StartScreen:FC<any> = ({navigation}) => {

    return (
        <View>
            <Button 
                onPress={
                    () => navigation.navigate('Login')
                }
                title="Log In"
            />
            <Button 
                onPress={
                    () => navigation.navigate('Signin')
                }
                title="Sign In"
            />
        </View>
    )
}

export default StartScreen