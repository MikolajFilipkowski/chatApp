import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    textInput: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    textInputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 10,
        width:'70%',
        maxWidth:300,
        height: 45,
        alignItems: "center",
    },
    textInputContent: {
        width:'94%',
        height: 50,
        marginHorizontal:'3%',
        padding: 10,
    },
    textInputLabel: {
        minWidth:100,
        width:'5%',
        height: 50,
        padding: 10,
        fontSize:16,
        fontWeight:"600",
        alignSelf:'center',
        textAlign:'center',
    },
    formButton: {
        width: "95%",
        maxWidth:400,
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        marginTop: 30,
        backgroundColor: "#FF1493",
    },
    formButtonTitle: {
        color:'white'
    }
})