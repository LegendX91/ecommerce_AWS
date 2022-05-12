import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import { DataStore, API } from 'aws-amplify';
import { Product } from '../../models';

const HomeScreen = ({searchValue, setSearchValue}: {searchValue: string, setSearchValue: (searchValue: string) => void}) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(false);

    const fetchProducts = async() => {
        setLoading(true);
        API.post('myAPI', '/ecommerce/search', {body: {"searchValue": searchValue}}).then((response) => {
            setProducts(response.body.data.Items);
        }).then(() => setLoading(false)).catch((err) => {
            // Reset if it fails
            setProducts([]);
            setLoading(false);
            setSearchValue('');
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
            {loading ? 
                <ActivityIndicator size='large' style={{marginVertical: '75%'}}/> 
                : // OR
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem key={item.id} item={item} setSearchValue={setSearchValue}/>}
                    showsVerticalScrollIndicator={false}
                />
            }
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