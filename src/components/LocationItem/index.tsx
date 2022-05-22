import { View, Text} from 'react-native'
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
}

const LocationItem = (props: LocationItemProps) => {

    const {item} = props;

    return (
        <View style={style.root}>
            {console.log(item.name)}
            <View style={style.rightContainer}>
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