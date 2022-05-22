import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SVGImg from '../../assets/logo_app_short.svg';

const OrderPlacedScreen = () => {

    const navigation = useNavigation();

    return (
            <View>
                <ImageBackground    blurRadius={3}
                                    source={require('../../../assets/orderPlaced.jpg')} 
                                    style={{    width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                            }}>
                    <View style={{alignItems: 'center'}}>
                        <SVGImg width={200} height={200}/>
                    </View>                            
                    <Text style={style.title}>Congratulations! Your Order has been placed succesfully!</Text>
                    <Pressable  style={[style.logOutButton, {marginTop: 10, borderWidth: 1, backgroundColor: 'orange', borderColor: 'darkorange'}]}
                                onPress={() => {
                                    navigation.navigate("Cart Screen");
                                }}>
                        <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                            Back to your cart
                        </Text>
                    </Pressable>
                </ImageBackground>
            </View>
        )
}

const style=StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        width: '90%',
        marginLeft: 25,
        textShadowColor: 'grey',
        textShadowOffset: {width: 0, height: 5},
        textShadowRadius: 10,
    },
    logOutButton: {
        backgroundColor: 'darkorange',
        width: Dimensions.get('screen').width - 20,
        opacity: 0.8,
        borderRadius: 15,
        justifyContent: 'center',
        marginHorizontal: 10,
        alignItems: 'center',
        top: 40,
        height: 60,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 100,
    },
})

export default OrderPlacedScreen;