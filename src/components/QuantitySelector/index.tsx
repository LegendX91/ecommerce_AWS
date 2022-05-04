import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

const QuantitySelector = ({quantity, setQuantity}) => {
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }
  
    return (
    <View style={style.root}>
        <Pressable style={style.button} onPress={onMinus}>
            <Text style={style.buttonText}>-</Text>
        </Pressable>

        <Text style={style.quantity}>{quantity}</Text>

        <Pressable style={style.button} onPress={onPlus}>
            <Text style={style.buttonText}>+</Text>
        </Pressable>

    </View>
  )
}

const style = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1',
    },
    buttonText: {
        fontSize: 18
    },
    quantity: {
        color: '#007eb9'
    }
})

export default QuantitySelector