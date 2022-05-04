import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import style from './style';
import product from '../../data/product';

const ProductScreen = () => {
  return (
    <View>
        <Text style={style.title}>{product.title}</Text>
        
        

        <Text style={style.price}>from €{product.price}
            { product.oldPrice && <Text style={style.oldPrice}>€{product.oldPrice}</Text>}
        </Text>

        <Text style={style.description}>
            {product.description}
        </Text>



    </View>
  )
}

export default ProductScreen;