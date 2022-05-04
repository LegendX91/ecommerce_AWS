import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';

const ProductItem = () => {
  return (
        <View style={style.root}>
            <Image  style={style.image} 
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg'}} />
            <View style={style.rightContainer}>
                <Text   style={style.title}
                        numberOfLines={3}>
                            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
                </Text>
                <View style={style.rating}>
                    <FontAwesome style={style.star} name="star" size={18} color={"#e47911"} />
                    <FontAwesome style={style.star} name="star" size={18} color={"#e47911"} />
                    <FontAwesome style={style.star} name="star" size={18} color={"#e47911"} />
                    <FontAwesome style={style.star} name="star-half-full" size={18} color={"#e47911"} />
                    <FontAwesome style={style.star} name="star-o" size={18} color={"#e47911"} />
                    <Text style={{color:'grey', marginLeft: 10}}>13.023</Text>
                </View>
                <Text style={style.price}>from €13.57 
                    <Text style={style.oldPrice}>€17.00</Text>
                </Text>
                
            </View>
        </View>
  )
}

export default ProductItem