import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import style from './style';
import QuantitySelector from '../QuantitySelector';

import { DataStore, API } from 'aws-amplify';
import { CartProduct } from '../../models';

interface CartProductItemProps {
    cartItem: CartProduct
}


const CartProductItem = ({cartItem}: CartProductItemProps) => {

    const {product, ...cartProduct} = cartItem;

    // Aggiornare il valore di Quantity nel datastore
    const updateQuantity = async (newQuantity: number) => {
        API.post('myAPI', '/ecommerce/fetchCart/addQuantity', 
        {
            body: {
                "id": cartProduct.id,
                "quantity": newQuantity
            }
        }
        ).then(response => console.log("Updated")).catch((e) => console.log(e));
        
        // DA IMPLEMENTARE => il DataStore non viene triggerato dalla sola modifica al DynamoDB in automatico.

        const original = await DataStore.query(CartProduct, cartProduct.id);

        // Aggiorno il prodotto originale sulla tabella CartProduct con il valore aggiornato
        await DataStore.save(
            CartProduct.copyOf(original, updated => {
                updated.quantity = newQuantity;
            })
        )
    }

    const deleteItem = async () => {
        // API.post('myAPI', '/ecommerce/deleteCartItem', {body: {"id" : cartProduct.id}}).then((response) => console.log(response)).catch(
        //    (error) => console.log(error)
        // );

        // DA IMPLEMENTARE => il DataStore non viene triggerato dalla sola modifica al DynamoDB in automatico.

        DataStore.delete(CartProduct, cartProduct.id);
    }

    
    //if(cartProduct.quantity == 0){
    //   return <View></View>
    //}else{
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
                    { cartItem.option ?
                        <Text style={{fontSize: 14, fontStyle: 'italic', color: 'grey'}}>
                            Option: {cartItem.option}
                        </Text> : <View></View>
                    }
                    <Text style={style.price}>Total: € {(Number.parseFloat(product.currentPrice[product.options?.indexOf(cartProduct.option)])*cartProduct.quantity).toFixed(2)}
                        { Number.parseFloat(product.defaultPrice[product.options?.indexOf(cartProduct.option)]) !== (Number.parseFloat(product.currentPrice[product.options?.indexOf(cartProduct.option)])) 
                            && <Text style={style.oldPrice}>€{(Number.parseFloat(product.defaultPrice[product.options?.indexOf(cartProduct.option)])*cartProduct.quantity).toFixed(2)}</Text>}
                    </Text>
                    
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <QuantitySelector quantity={cartProduct.quantity} setQuantity={updateQuantity} />
                <Pressable  style={{    backgroundColor: 'orange', 
                                        padding: 5,
                                        borderColor: 'darkorange',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        margin: 10
                                    }}
                            onPress={deleteItem}>
                    <Text>Remove from Cart</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default CartProductItem