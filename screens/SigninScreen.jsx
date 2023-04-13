import { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth'
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore'

export default function SigninScreen() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function sendFormHandler(e) {
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
            await sendEmailVerification(auth.currentUser).then(console.log(auth.currentUser))
        } catch (err) {
            console.error(err);
            alert(err.message);
        }

        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <View>
            <Text>Username</Text>
            <TextInput onChange={(e) => setUsername(e.target.value)} value={username}/>
            <Text>Email</Text>
            <TextInput onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Text>Password</Text>
            <TextInput onChange={(e) => setPassword(e.target.value)} value={password} secureTextEntry={true}/>
            <Button onPress={sendFormHandler} title="Sign In"/>
        </View>
    )
}
