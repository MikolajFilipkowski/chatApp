import { Button } from 'react-native'
import { Text, View } from 'react-native'

export default function StartScreen({navigation}) {
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
