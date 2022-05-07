import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

interface quantityProps {
    quantity: number,
    setQuantity: (a: number) => void;
}

const QuantitySelector = ({quantity, setQuantity} : quantityProps) => {
    const onMinus = () => {
        setQuantity(Math.max(1, quantity - 1));
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
        width: 130
    },
    button: {
        width: 35,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: 'darkorange',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18
    },
    quantity: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default QuantitySelector