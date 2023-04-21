import React, { Component, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore'
import { styles } from './styles'

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
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>Username</Text>
                <View style={styles.textInputView}>
                    <TextInput style={styles.textInputContent} onChangeText={(text) => setUsername(text)} value={username}/>
                </View>
            </View>
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
                <Text style={styles.formButtonTitle}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
