import React, { Component, FC } from 'react'
import { View, Text } from 'react-native'

const Message:FC<any> = ({author, message}) => {
  return (
    <View>
        <Text>{author}</Text>
        <Text>{message}</Text>
    </View>
  )
}

export default Message