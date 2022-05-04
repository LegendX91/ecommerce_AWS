import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  return (
    <View style={style.page}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </View>
    )
}

const style = StyleSheet.create({
    page: {
        padding: 10,
    }
})

export default HomeScreen