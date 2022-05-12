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

    function discountCondition() {
        return Number.parseFloat(product.defaultPrice[product.options?.indexOf(selectedOption)]) !== (Number.parseFloat(product.currentPrice[product.options?.indexOf(selectedOption)]));
    }

    function defaultPrice() {
        return Number.parseFloat(product.defaultPrice[product.options?.indexOf(selectedOption)]);
    }

    function currentPrice() {
        return Number.parseFloat(product.currentPrice[product.options?.indexOf(selectedOption)]);
    }

    function getAvailability() {
        return product.availability[product.options?.indexOf(selectedOption)]
    }

    // Activity Indicator se in fetching da DataStore
    if (!product){
        // in fetching
        return <ActivityIndicator />
    }else{
        return (
            <ScrollView style={style.root}>
                {console.log("Updating Product Screen...")}
                <Text style={style.title}>{product.title}</Text>

                <ImageCarousel images={product.images} />
                
                { 
                    (typeof selectedOption !== 'undefined' && product.options?.length !== 1) && 
                        <Picker
                            style={{backgroundColor: '#f7f5f0'}}
                            selectedValue={selectedOption}
                            onValueChange={(itemValue) => setSelectedOption(itemValue)}
                        >
                        {product.options.map(option => <Picker.Item key={product.options?.indexOf(option)} label={option} value={option} />)}
                    </Picker>
                }
                
                <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10}}>
                    <View>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                    </View>

                    <Button text={"Add to Cart"} onPress={onAddToCart} ></Button>
                </View>

                

                <Text style={style.price}>Price: €{(currentPrice() * quantity).toFixed(2)}
                    { discountCondition() 
                        && 
                            <Text style={style.oldPrice}>
                                €{(defaultPrice()*quantity).toFixed(2)}
                            </Text>
                    }
                </Text>
                { discountCondition() 
                        && 
                            <Text style={{fontSize: 20,color: 'red', fontStyle:'italic', fontWeight:'normal', textAlign: 'center'}}>
                                Save {(100-(100 * currentPrice()) / defaultPrice()).toFixed(2)}%
                            </Text>
                }

                <Text style={{  textAlign: 'center', 
                                color: ((String)(getAvailability()).includes('week') ? 'darkorange' : (
                                            (String)(getAvailability()).includes('month') ? 'red' : 'green'
                                        )), 
                                fontWeight: 'bold'}}>
                    Shipping in {getAvailability()}
                </Text>

                <Text style={style.description}>
                    {product.description}
                </Text>
                
            </ScrollView>
    )
}
}

export default ProductScreen;