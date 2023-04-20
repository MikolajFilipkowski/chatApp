import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function sendFormHandler(e:any) {

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }

        setEmail("")
        setPassword("")
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput onChangeText={(text) => setEmail(text)} value={email}/>
            <Text>Password</Text>
            <TextInput onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>
            <Button onPress={sendFormHandler} title="Log In"/>
        </View>
    )
}
