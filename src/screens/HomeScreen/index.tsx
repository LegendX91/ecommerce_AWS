import { View, StyleSheet, FlatList } from 'react-native';
import React, {useState, useEffect, componentDidMount} from 'react';
import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async() => {
        const results = await DataStore.query(Product, (p => p.title("contains", searchValue)) );
        setProducts(results);
    };

    useEffect(() => {
        fetchProducts();
    }, [searchValue])

    return (
        <View style={style.page}>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
        )
}

const style = StyleSheet.create({
    page: {
        paddingBottom: 1,
        paddingTop: 10,
        paddingRight: 5,
        paddingLeft: 5,
    }
})

export default HomeScreen