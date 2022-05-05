import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';
import QuantitySelector from '../QuantitySelector';

import { DataStore } from 'aws-amplify';
import { CartProduct } from '../../models';

interface CartProductItemProps {
    cartItem: CartProduct
}


const CartProductItem = ({cartItem}: CartProductItemProps) => {

    const {product, ...cartProduct} = cartItem;

    // Aggiornare il valore di Quantity nel datastore
    const updateQuantity = async (newQuantity: number) => {
        // Estraggo il prodotto originale
        const original = await DataStore.query(CartProduct, cartProduct.id);

        // Aggiorno il prodotto originale sulla tabella CartProduct con il valore aggiornato
        await DataStore.save(
            CartProduct.copyOf(original, updated => {
                updated.quantity = newQuantity;
            })
        )
    }

    return (
        <View>
            <View style={style.root}>
                <Image  style={style.image} 
                        source={{ uri: product.image}} />
                <View style={style.rightContainer}>
                    <Text   style={style.title}
                            numberOfLines={3}>
                                {product.title}
                    </Text>
                    <View style={style.rating}>
                        {[0,0,0,0,0].map((el, i) => 
                            <FontAwesome    
                                            key={`${product.id} - ${i}`}
                                            style={style.star} 
                                            name={i < Math.floor(product.avgRatings) ? "star" : 'star-o'} 
                                            size={18} 
                                            color={"#e47911"} />)}
                        <Text style={{color:'grey', marginLeft: 10}}>{product.ratings}</Text>
                    </View>
                    <Text style={style.price}>from €{product.price.toFixed(2)}
                        { product.oldPrice && <Text style={style.oldPrice}>€{product.oldPrice.toFixed(2)}</Text>}
                    </Text>
                    
                </View>
            </View>
            <QuantitySelector quantity={cartProduct.quantity} setQuantity={updateQuantity} />
        </View>
  )
}

export default CartProductItem