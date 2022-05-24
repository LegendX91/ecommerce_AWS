import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { API, Auth } from 'aws-amplify';
import Entypo from 'react-native-vector-icons/Entypo';
import { useIsFocused } from '@react-navigation/native';
import OrderItem from '../../components/OrderItem';

const OrderScreen = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchOrders = async() => {
        console.log("Fetching Orders");
        const userData = await Auth.currentAuthenticatedUser();
        API.post('myAPI', '/ecommerce/fetchOrder/byUser', {body:{userSub: userData.attributes.sub}}).then(
            response => setOrders(response.body.data.Items)).catch(
            error => console.warn(error));
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        fetchOrders();
    }, [])

    const onPress = () => {
        setLoading(true);
        fetchOrders();
    }

    const isFocused = useIsFocused()

    useEffect(() => {
        setLoading(true);
        fetchOrders();
    } , [isFocused])

    return (
        <View>
            <View style={{marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center'}}>
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
                <FlatList   data={orders} 
                            renderItem={({item}) => <OrderItem  key={orders.indexOf(item)} 
                                                                item={item}
                                                                />} 
                            showsVerticalScrollIndicator={true} />
                }
            </View>
        </View>
    )
}

export default OrderScreen