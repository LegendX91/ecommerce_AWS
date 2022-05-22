import { View, Text, Pressable} from 'react-native'
import React from 'react'
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';

interface LocationItemProps {
    item: {
        id: string,
        address: string,
        city: string,
        country: string,
        name: string,
        phoneNumber: number,
        userSub: string,
    },
    removeItem: (id: string) => void
}

const LocationItem = (props: LocationItemProps) => {

    const {item} = props;

    return (
        <View style={style.root}>
            <View style={style.rightContainer}>
                <Pressable style={{flex: 1}}onPress={() => props.removeItem(item.id)}>
                    <Entypo name='cross' size={18} color='orange' style={{left: '95%'}} />
                </Pressable>
                <Text style={style.title}>Name: {item.name}</Text>
                <Text style={style.title}>Address: {item.address}</Text>
                <Text style={style.title}>City: {item.city}</Text>
                <Text style={style.title}>Country: {item.country}</Text>
                <Text style={style.title}>Phone Number: {item.phoneNumber}</Text>
            </View>     
        </View>
  )
}

export default LocationItem;