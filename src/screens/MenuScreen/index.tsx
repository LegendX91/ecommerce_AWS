import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { Auth, API } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

import SVGImg from '../../assets/logo_app_short.svg';

const MenuScreen = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    async function checkUser() {
        let test = await Auth.currentAuthenticatedUser();  
        setUser(test.username);
        setEmail(test.attributes.email);
    }

    useEffect(() => {
        checkUser();
    }, [])

    const navigation = useNavigation();

    async function helloFromLambda() {
        API.post('myAPI', '/ecommerce/test', {body:{productID: '36533580-9ed3-4867-af72-d5d0ca059c31'}}).then((response) => {
            console.warn(response);
        }).catch(error => console.warn(error));
    }

    return (
            <View>
                <ImageBackground    blurRadius={3}
                                    source={require('../../../assets/creare-sito-ecommerce.jpg')} 
                                    style={{    width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                            }}>
                    <View style={{alignItems: 'center'}}>
                        <SVGImg width={200} height={200}/>
                    </View>                            
                    <Text style={style.title}>Username: {user}</Text>
                    <Text style={style.title}>Email: {email}</Text>
                    <Pressable  style={[style.logOutButton, {marginTop: 10, borderWidth: 1, backgroundColor: 'orange', borderColor: 'darkorange'}]}
                                onPress={() => {
                                    helloFromLambda();
                                }}>
                        <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                            Lambda!
                        </Text>
                    </Pressable>
                    <Pressable  style={[style.logOutButton, {marginTop: 10, borderWidth: 1, borderColor: 'darkorange'}]}
                                onPress={() => {
                                    Auth.signOut();
                                }}>
                        <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                            Logout
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

export default MenuScreen;