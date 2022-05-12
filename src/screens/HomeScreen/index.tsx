import { View, StyleSheet, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import { DataStore, API } from 'aws-amplify';
import { Product } from '../../models';

const HomeScreen = ({searchValue, setSearchValue}: {searchValue: string, setSearchValue: (searchValue: string) => void}) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async() => {
        API.post('myAPI', '/ecommerce/search', {body: {"searchValue": searchValue}}).then((response) => {
            setProducts(response.body.data.Items);
        });
    };

    useEffect(() => {
        fetchProducts();
    }, [searchValue])

    useEffect(() => {
        const subscription = DataStore.observe(Product).subscribe(msg =>
            fetchProducts(),
        );
        return subscription.unsubscribe;
    }, []);

    return (
        <View style={style.page}>
            {console.log("Updating Home Screen...")}
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