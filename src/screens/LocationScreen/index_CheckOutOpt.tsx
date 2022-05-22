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
            response => setLocations(response.body.data.Items)).catch(
            error => console.warn(error));
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        fetchLocations();
    }, [])

    const removeItem = async(id: String) => {
        setLoading(true);
        console.log(id);
        API.post('myAPI', '/ecommerce/deleteLocationItem', {body:{id: id}}).then(
            response => console.log(response)).catch(
            error => console.warn(error));
    }

    const isFocused = useIsFocused()

    useEffect(() => {
        setLoading(true);
        fetchLocations();
    } , [isFocused])

    return (
        <View style={{  marginHorizontal: '5%', flexDirection: 'column', height: '85%', marginTop: '5%', marginBottom: '15%',
                            borderColor: 'grey', borderRadius: 10, paddingTop: 2, paddingVertical: 5}}>
                {loading ? 
                <ActivityIndicator size='large' style={{marginVertical: '75%'}}/> : 
                <FlatList   data={locations} 
                            renderItem={({item}) => 
                                <Pressable onPress={() => navigation.navigate('Order Placed')}>
                                    <LocationItem   key={locations.indexOf(item)} 
                                                item={item}
                                                removeItem={removeItem}
                                                                />
                                </Pressable>} 
                            showsVerticalScrollIndicator={true} />
                }
        </View>
    )
}

export default LocationScreen