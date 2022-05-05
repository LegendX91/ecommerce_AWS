import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import style from './style';
import countryList from 'country-list';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const onCheckout = () => {
        if (!name) {
            Alert.alert('Please fill in the name field');
            return;
        }
        if (!phoneNumber) {
            Alert.alert('Please fill in the phone number field');
            return;
        }
        if (!address) {
            Alert.alert('Please fill in the address field');
            return;
        }
        if (!city) {
            Alert.alert('Please fill in the city field');
            return;
        }
        console.warn('Success!');
    }

    return (
        <KeyboardAvoidingView
        >
            <ScrollView style={style.root}>
                <View style={style.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={setCountry}
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