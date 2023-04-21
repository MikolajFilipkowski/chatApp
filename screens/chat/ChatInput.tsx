import React, { Component, FC } from 'react'
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const ChatInput:FC<any> = (props) => {
    return (
        <View>
            <TextInput placeholder='message'></TextInput>
            <TouchableOpacity onPress={props.getFiredata}>
                <Text>Click me!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatInput