import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

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


    return (
        <View>
                <Text style={style.title}>Username: {user}</Text>
                <Text style={style.title}>Email: {email}</Text>
                <Pressable  style={style.logOutButton}
                            onPress={() => {
                                Auth.signOut();
                            }}>
                    <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                        Logout
                    </Text>
                </Pressable>
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
        backgroundColor: 'orange',
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