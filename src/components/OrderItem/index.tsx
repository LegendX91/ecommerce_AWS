import { View, Text, Pressable} from 'react-native'
import React from 'react'
import style from './style';
import { FlatList } from 'react-native-gesture-handler';

const OrderItem = (props: any) => {

    const {cart, location, totalPrice} = props.item;

    return (
        <View style={style.root}>
            <View style={style.rightContainer}>
                <Text style={style.title}>Order #: <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{cart[0].id}</Text></Text>
                <Text style={style.title}>Price: <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{totalPrice} €</Text></Text>
                <Text style={style.title}>Shipping To: </Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{location[0].address}</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{location[0].city}</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{location[0].country}</Text>
                <Text style={style.title}>Mailed To: <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{location[0].name}</Text></Text>
                <Text style={style.title}>Phone Number: <Text style={{fontStyle: 'italic', fontWeight: 'normal', fontSize: 13}}>{location[0].phoneNumber}</Text></Text>
                <Text style={style.title}>Contents: </Text>
                <FlatList 
                    data={cart.slice(0, 3)} 
                    renderItem={({item}) => <Text style={{fontSize:11, fontStyle:'italic'}} numberOfLines={1}> - {cart[cart.indexOf(item)].productName}</Text>}
                />
                {cart.length >= 3 ? <Text>...</Text> : <></>}
            </View>     
        </View>
  )
}

export default OrderItem;