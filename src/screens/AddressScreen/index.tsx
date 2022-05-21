import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import style from './style';
import countryList from 'country-list';
import Button from '../../components/Button';
import { API, Auth } from 'aws-amplify';

import { v4 as uuidv4 } from 'uuid';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const onCheckout = async () => {
        const userData = await Auth.currentAuthenticatedUser(); 
        API.post('myAPI', '/ecommerce/checkOut/addAddress', 
            {body: {
                id: uuidv4(),
                country: country,
                name: name,
                phoneNumber: phoneNumber,
                address: address,
                city: city,
                userSub: userData.attributes.sub,
            }}).then(response => response === "Input Error" ? setError(true) : console.warn(response)).catch(error => console.warn(error));
    }

    return (
        <KeyboardAvoidingView
        >
            <ScrollView style={style.root}>
                {error && <Text style={{color: 'red', fontSize: 15, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold'}}>Input Error! Please verify your data</Text>}
                <View style={style.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={setCountry}
                        style={{backgroundColor: 'white'}}
                    >
                        {countries.map((country: {name: string}) => (
                            <Picker.Item value={country.name} label={country.name} />
                        ))}
                    </Picker>
                </View>

                <View style={style.row}>
                    <Text style={style.label}>Full name(First and Last name)</Text>
                    <TextInput 
                        style={style.input} 
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.label}>Phone Number</Text>
                    <TextInput 
                        style={style.input} 
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType={'phone-pad'}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.label}>Address</Text>
                    <TextInput 
                        style={style.input} 
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.label}>City</Text>
                    <TextInput 
                        style={style.input} 
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Button text="CheckOut" onPress={onCheckout}/>

            </ScrollView>
        </KeyboardAvoidingView>
  )
}

export default AddressScreen