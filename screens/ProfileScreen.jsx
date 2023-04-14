import { View, Text, Button } from "react-native";
import { db, auth } from '../firebase'

export default function ProfileScreen() {
  console.log(db)

  return (
    <View>
        <Text>Profil</Text>
        <Button title="Wyloguj" onPress={() => auth.signOut()} />
    </View>
  )
}
