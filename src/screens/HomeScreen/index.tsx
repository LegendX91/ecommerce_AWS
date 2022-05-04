import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={style.page}>
        <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
        />
    </View>
    )
}

const style = StyleSheet.create({
    page: {
        padding: 10,
    }
})

export default HomeScreen