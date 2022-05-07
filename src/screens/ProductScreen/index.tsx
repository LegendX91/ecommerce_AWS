import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import style from './style';
import { Product, CartProduct } from '../../models';
import { DataStore, Auth } from 'aws-amplify';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {

    const navigation = useNavigation();

    const [product, setProduct] = useState<Product|undefined>(undefined);

    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const [quantity, setQuantity] = useState(1);

    const route= useRoute(); //parametri

    const fetchContent = async() => {
        if(!route.params?.id)
            return;
        const result = await DataStore.query(Product, route.params.id);
        setProduct(result);
    }

    useEffect(() => {
        // fetch
        fetchContent();
    }, [route.params?.id]);



    useEffect(() => {
        // controllo opzioni al variare prodotto
        console.log('updated');
        if (product?.options){
            setSelectedOption(product.options[0]);
        }
    }, [product]);

    const onAddToCart = async() => {
        // creazione del CartProduct dalle varie fonti in fetch
        // Pull dei dati utente
        const userData = await Auth.currentAuthenticatedUser(); 
        
        if(!product || !userData) // il prodotto deve essere definito per la creazione di CartProduct
            return;

        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption,
            productID: product.id,
        });

        DataStore.save(newCartProduct); // salva nel DataStore l'oggetto creato
        navigation.navigate("Shopping Cart");
    }

    // Activity Indicator se in fetching da DataStore
    if (!product){
        // in fetching
        return <ActivityIndicator />
    }else{
        return (
            <ScrollView style={style.root}>
                <Text style={style.title}>{product.title}</Text>

                <ImageCarousel images={product.images} />
                
                { 
                    typeof selectedOption !== 'undefined' && <Picker
                        style={{backgroundColor: '#f7f5f0'}}
                        selectedValue={selectedOption}
                        onValueChange={(itemValue) => setSelectedOption(itemValue)}
                    >
                        {product.options.map(option => <Picker.Item label={option} value={option} />)}
                    </Picker>
                }
                
                <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10}}>
                    <View>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                    </View>

                    <Button text={"Add to Cart"} onPress={onAddToCart} ></Button>
                </View>

                

                <Text style={style.price}>Price: €{(Number.parseFloat(product.price) * quantity).toFixed(2)}
                    { product.oldPrice && <Text style={style.oldPrice}>€{(Number.parseFloat(product?.oldPrice)*quantity).toFixed(2)}</Text>}
                </Text>

                <Text style={style.description}>
                    {product.description}
                </Text>
                
            </ScrollView>
    )
}
}

export default ProductScreen;