import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import {DataStore, Auth, API} from 'aws-amplify';

import {Product, CartProduct} from '../../models';

const ShoppingCartScreen = () => {

    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const fetchCartProducts = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        // API.post('myAPI', '/ecommerce/fetchCart/byUser', {body: {"userSub": userData.attributes.sub}}).then(response => {
        //      console.log(response);
        // })
        DataStore.query(CartProduct, cp =>
            cp.userSub('eq', userData.attributes.sub),
        ).then(setCartProducts)
    };
    
    useEffect(() => {
        fetchCartProducts();
    }, []);

    useEffect(() => {
        if (cartProducts.filter(cp => !cp.product).length === 0) {
            return;
        }
        const fetchProducts = async () => {
            const products = await Promise.all(cartProducts.map(
                // Fetch of all products in cart
                cartProduct =>  API.post('myAPI', '/ecommerce/fetchCart', {body: {"productID": cartProduct.productID}}).then((response) => {
                    return response.body.data.Items;
                }).catch((err) => {
                    // Reset if it fails
                    setCartProducts([]);
                })
            ));
            setCartProducts(currentCartProducts =>
                currentCartProducts.map(cartProduct => ({
                    ...cartProduct,
                    product: products.find(p => p.id === cartProduct.productID),
                })),
            );
        };
        fetchProducts();
      }, [cartProducts]);
    
    useEffect(() => {
        const subscription = DataStore.observe(CartProduct).subscribe(msg => 
            fetchCartProducts()
        );
        return subscription.unsubscribe;
    }, []);
    
    const onCheckout = () => {
        navigation.navigate("Address Details");
    }

    const totalPrice = cartProducts.reduce(
        (sumPrice, product) => 
            sumPrice + (product?.product?.currentPrice[product?.product?.options.indexOf(product?.option)] || 0) * product.quantity,
            0
    );

    return (
        <View style={style.page}>
            {console.log("Updating Cart Screen...")}
            <View style={{borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                <Text style={{fontSize: 18}}>Subtotal ({cartProducts.length} items): 
                    <Text style={{color: '#e47911', fontWeight: 'bold'}}>€{totalPrice.toFixed(2)}</Text>
                </Text>
                <Button text="Proceed to CheckOut"
                        onPress={onCheckout}
                />
            </View>
            <FlatList
                data={cartProducts}
                renderItem={({item}) => (
                    <CartProductItem cartItem={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View> 
    )
}

const style = StyleSheet.create({
    page: {
        marginBottom: 75,
        padding: 10,
    }
})

export default ShoppingCartScreen