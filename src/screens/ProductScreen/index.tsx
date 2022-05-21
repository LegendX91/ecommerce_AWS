import { View, Text, ScrollView, ActivityIndicator, Modal, Pressable } from 'react-native';
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

    const [modalVisible, setModalVisible] = useState(false);

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
            <View>
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
                    <View  style={{  borderWidth: 1,
                                    marginTop: 10,
                                    marginBottom: 20,
                                    borderRadius: 15,
                                    borderColor: 'lightgrey',
                                    backgroundColor: '#f7f5f0',
                                    }}>
                            <Text style={style.description} numberOfLines={10} onPress={() => setModalVisible(true)}>
                                {product.description}
                            </Text>
                    </View>

                    <Modal
                        visible={modalVisible}
                        onRequestClose={
                            () => 
                                setModalVisible(false)
                        }
                        animationType='fade'
                        transparent={true}
                    >
                            <Pressable 
                                        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f7f5f0', opacity: 0.85}}
                                        onPress={() => setModalVisible(false)}    
                            >
                                <View style={{borderWidth: 1, margin: 10, borderRadius: 10, backgroundColor: 'white', borderColor: 'lightgrey'}}>
                                    <Text style={{margin: 10}}>{product.description}</Text>
                                </View>
                                <Button text={"Go Back"} onPress={() => setModalVisible(false)} ></Button>
                            </Pressable>
                    </Modal>
                    
                </ScrollView>
            </View>
    )
}
}

export default ProductScreen;