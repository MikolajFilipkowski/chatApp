import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
import { styles } from './styles'

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
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>Email</Text>
                <View style={styles.textInputView}>
                    <TextInput style={styles.textInputContent} onChangeText={(text) => setEmail(text)} value={email}/>
                </View>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>Password</Text>
                <View style={styles.textInputView}>
                    <TextInput style={styles.textInputContent} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>
                </View>
            </View>
            <TouchableOpacity style={styles.formButton} onPress={sendFormHandler}>
                <Text style={styles.formButtonTitle}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}