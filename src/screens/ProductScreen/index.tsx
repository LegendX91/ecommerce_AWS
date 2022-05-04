import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import style from './style';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <View>
            <Text style={style.title}>{product.title}</Text>
            
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map(option => <Picker.Item label={option} value={option} />)}
            </Picker>

            <Text style={style.price}>from €{product.price}
                { product.oldPrice && <Text style={style.oldPrice}>€{product.oldPrice}</Text>}
            </Text>

            <Text style={style.description}>
                {product.description}
            </Text>

            <View>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>

            <Button text={"Add to Cart"} onPress={() => {console.warn("Added")}} ></Button>
            <Button text={"Buy Now!"} onPress={() => {console.warn("Bought!")}} ></Button>

        </View>
  )
}

export default ProductScreen;