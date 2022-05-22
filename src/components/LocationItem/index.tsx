import { View, Text, Pressable} from 'react-native'
import React from 'react'
import style from './style';

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
                <Text style={style.title}>Name: {item.name}</Text>
                <Text style={style.title}>Address: {item.address}</Text>
                <Text style={style.title}>City: {item.city}</Text>
                <Text style={style.title}>Country: {item.country}</Text>
                <Text style={style.title}>Phone Number: {item.phoneNumber}</Text>
                <Pressable onPress={() => props.removeItem(item.id)}><Text>REMOVE ITEM</Text></Pressable>
            </View>     
        </View>
  )
}

export default LocationItem;