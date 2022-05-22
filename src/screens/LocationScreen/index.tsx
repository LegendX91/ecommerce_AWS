import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { API, Auth } from 'aws-amplify';
import LocationItem from '../../components/LocationItem';
import Button from '../../components/Button';

const LocationScreen = () => {

    const [locations, setLocations] = useState([]);
    
    const fetchLocations = async() => {
        const userData = await Auth.currentAuthenticatedUser();
        API.post('myAPI', '/ecommerce/fetchLocations/byUser', {body:{userSub: userData.attributes.sub}}).then(
            response => setLocations(response.body.data.Items)).catch(
            error => console.warn(error));
    }

    useEffect(() => {
        fetchLocations();
    }, [])

    const onPress = () => {
        fetchLocations();
    }

    return (
        <View style={{marginHorizontal: 20}}>
            {console.log(locations)}
            <Button text="Refresh" onPress={onPress}/>
            <FlatList   data={locations} 
                        renderItem={({item}) => <LocationItem key={locations.indexOf(item)} 
                                                            item={item}
                                                            />} 
                        showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default LocationScreen