import React, { Component, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore'

export default function SigninScreen() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function sendFormHandler(e:any) {
        console.log(username)
        console.log(email)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                username,
                authProvider: "local",
                email,
            });
            if (auth.currentUser) {
                await sendEmailVerification(auth.currentUser)
                await updateProfile(auth.currentUser, { displayName: username }).catch(
                    (err) => console.error(err)
                );
            }
            
        } catch (err) {
            console.error(err);
        }

        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <View>
            <Text>Username</Text>
            <TextInput onChangeText={(text) => setUsername(text)} value={username}/>
            <Text>Email</Text>
            <TextInput onChangeText={(text) => setEmail(text)} value={email}/>
            <Text>Password</Text>
            <TextInput onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>
            <Button onPress={sendFormHandler} title="Sign In"/>
        </View>
    )
}
