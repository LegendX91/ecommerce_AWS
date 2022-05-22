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
                <Text style={style.title}>Name: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{item.name}</Text></Text>
                <Text style={style.title}>Address: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{item.address}</Text></Text>
                <Text style={style.title}>City: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{item.city}</Text></Text>
                <Text style={style.title}>Country: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{item.country}</Text></Text>
                <Text style={style.title}>Phone: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{item.phoneNumber}</Text></Text>
            </View>     
        </View>
  )
}

export default LocationItem;