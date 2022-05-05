import { View, StyleSheet, FlatList, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

import products from '../../data/cart';

const ShoppingCartScreen = () => {

    const navigation = useNavigation();

    const onCheckout = () => {
        navigation.navigate("Address Details", {});
    }

    const totalPrice = products.reduce(
        (sumPrice, products) => 
            sumPrice + products.item.price * products.quantity,
        0);

    return (
        <View style={style.page}>
            <View>
                <Text style={{fontSize: 18}}>Subtotal ({products.length} items): 
                    <Text style={{color: '#e47911', fontWeight: 'bold'}}>€{totalPrice.toFixed(2)}</Text>
                </Text>
                <Button text="Proceed to CheckOut"
                        onPress={onCheckout}
                />
            </View>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <CartProductItem cartItem={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View> 
        )
}

const style = StyleSheet.create({
    page: {
        padding: 10,
    }
})

export default ShoppingCartScreen