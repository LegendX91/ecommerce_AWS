import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';
import { useNavigation } from '@react-navigation/native';

interface ProductItemProps {
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

const ProductItem = (props: ProductItemProps) => {

    const navigation = useNavigation();

    const {item} = props;

    const onPress = () => {
        navigation.navigate("Product Details", {id: item.id});
    }

    return (
        <Pressable onPress={onPress} style={style.root}>
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
        </Pressable>
  )
}

export default ProductItem