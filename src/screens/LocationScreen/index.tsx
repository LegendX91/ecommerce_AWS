import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { API, Auth } from 'aws-amplify';
import LocationItem from '../../components/LocationItem';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const LocationScreen = () => {

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    
    const fetchLocations = async() => {
        console.log("Fetching Locations");
        const userData = await Auth.currentAuthenticatedUser();
        API.post('myAPI', '/ecommerce/fetchLocations/byUser', {body:{userSub: userData.attributes.sub}}).then(
            response => setLocations(response.body.data.Items)).then(
            response => setLoading(false)).catch(
            error => console.warn(error));
    }

    useEffect(() => {
        setLoading(true);
        fetchLocations();
    }, [])

    const onPress = () => {
        setLoading(true);
        fetchLocations();
    }

    const removeItem = async(id: String) => {
        setLoading(true);
        console.log(id);
        API.post('myAPI', '/ecommerce/deleteLocationItem', {body:{id: id}}).then(
            response => fetchLocations()).catch(
            error => console.warn(error));
    }

    const addItem = async() => {
        navigation.navigate('Add New Address');
    }

    const isFocused = useIsFocused()

    useEffect(() => {
        setLoading(true);
        fetchLocations();
    } , [isFocused])

    return (
        <View>
            <View style={{marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center'}}>
                <Pressable onPress={addItem} style={{
                    margin: 10, padding: 10, borderWidth: 1, marginHorizontal: '40%', backgroundColor: 'orange',
                    borderColor: 'darkorange', borderRadius: 15, width: '25%'}}>
                        <Entypo name="plus" size={30} color="white" style={{textAlign: 'center'}}/>
                        <Text style={{textAlign: 'center', color: 'black', fontSize: 13, fontStyle: 'italic'}}>Add New</Text>
                </Pressable>
                <Pressable onPress={onPress} style={{
                    margin: 10, padding: 10, borderWidth: 1, marginHorizontal: '40%', backgroundColor: 'orange',
                    borderColor: 'darkorange', borderRadius: 15, width: '25%'}}>
                        <Entypo name="cycle" size={30} color="white" style={{textAlign: 'center'}}/>
                        <Text style={{textAlign: 'center', color: 'black', fontSize: 13, fontStyle: 'italic'}}>Refresh</Text>
                </Pressable>
            </View>
            <View style={{  marginHorizontal: '5%', flexDirection: 'column', height: '85%', borderTopWidth: 1, borderBottomWidth: 1,
                            borderColor: 'lightgrey', borderRadius: 10, paddingTop: 2, paddingVertical: 5}}>
                {loading ? 
                <ActivityIndicator size='large' style={{marginVertical: '75%'}}/> : 
                <FlatList   data={locations} 
                            renderItem={({item}) => <LocationItem key={locations.indexOf(item)} 
                                                                item={item}
                                                                removeItem={removeItem}
                                                                />} 
                            showsVerticalScrollIndicator={true} />
                }
            </View>
        </View>
    )
}

export default LocationScreen