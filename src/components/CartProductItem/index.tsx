import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        product: {
            id: string,
            title: string,
            image: string,
            avgRatings: number,
            ratings: number,
            price: number,
            oldPrice?: number,
        }
    }
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {

    const {quantity: quantityProp, product} = cartItem;

    const [quantity, setQuantity] = useState(quantityProp);

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
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>
  )
}

export default CartProductItem