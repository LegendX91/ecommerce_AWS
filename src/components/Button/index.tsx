import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string,
    onPress: () => void;
}

const Button = ({ text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={style.root}>
        <Text style={style.text}>{text}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
    root: {
        backgroundColor: 'orange',
        paddingHorizontal: 10,
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'darkorange', 
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
    },
})

export default Button;