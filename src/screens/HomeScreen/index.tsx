import { View, StyleSheet, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';

const HomeScreen = ({searchValue, setSearchValue}: {searchValue: string, setSearchValue: (searchValue: string) => void}) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async() => {
        let results = await DataStore.query(Product, (
            p => p.or(
                p => p.title("contains", (searchValue)).title("contains", searchValue.toUpperCase()).title("contains", searchValue.toLowerCase()
                ).tags("contains", (searchValue)).tags("contains", (searchValue.toUpperCase())).tags("contains", (searchValue.toLowerCase())))
            ));
        setProducts(results);
    };

    useEffect(() => {
        console.log("fetching");
        fetchProducts();
    }, [searchValue])

    return (
        <View style={style.page}>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem key={item.id} item={item} setSearchValue={setSearchValue}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
        )
}

const style = StyleSheet.create({
    page: {
        paddingBottom: 1,
        paddingTop: 1,
        paddingRight: 5,
        paddingLeft: 5,
    }
})

export default HomeScreen