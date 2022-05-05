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
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            ratings: number,
            price: number,
            oldPrice?: number,
        }
    }
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {

    const {quantity: quantityProp, item} = cartItem;

    const [quantity, setQuantity] = useState(quantityProp);

    return (
        <View>
            <View style={style.root}>
                <Image  style={style.image} 
                        source={{ uri: item.image}} />
                <View style={style.rightContainer}>
                    <Text   style={style.title}
                            numberOfLines={3}>
                                {item.title}
                    </Text>
                    <View style={style.rating}>
                        {[0,0,0,0,0].map((el, i) => 
                            <FontAwesome    
                                            key={`${item.id} - ${i}`}
                                            style={style.star} 
                                            name={i < Math.floor(item.avgRating) ? "star" : 'star-o'} 
                                            size={18} 
                                            color={"#e47911"} />)}
                        <Text style={{color:'grey', marginLeft: 10}}>{item.ratings}</Text>
                    </View>
                    <Text style={style.price}>from €{item.price}
                        { item.oldPrice && <Text style={style.oldPrice}>€{item.oldPrice}</Text>}
                    </Text>
                    
                </View>
            </View>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>
  )
}

export default CartProductItem