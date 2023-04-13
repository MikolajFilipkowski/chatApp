import { Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function authenticate() {
        
    }

    async function sendFormHandler(e) {
        console.log(email)

        try {
            await signInWithEmailAndPassword(auth, email, password).then(authenticate());
        } catch (err) {
            console.error(err);
            alert(err.message);
        }

        setEmail("")
        setPassword("")
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Text>Password</Text>
            <TextInput onChange={(e) => setPassword(e.target.value)} value={password} secureTextEntry={true}/>
            <Button onPress={sendFormHandler} title="Log In"/>
        </View>
    )
}
