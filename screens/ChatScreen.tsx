import React, { Component, useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ChatInput from './chat/ChatInput';
import { auth, db } from '../firebase';
import { addDoc, collection, onSnapshot, query, getDocs } from 'firebase/firestore'

export default function ChatScreen() {
  const [firedata, setFiredata] = useState<any>([])

  async function getFiredata() {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const data:Object[] = []
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, data:doc.data()})
    });

    setFiredata(data)
    
  }

  useEffect(() => {getFiredata()}, [])

  return (
    <View>
      <ChatInput getFiredata={getFiredata}/>
    </View>
  )
}
