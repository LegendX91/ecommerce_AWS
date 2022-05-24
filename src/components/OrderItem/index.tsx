import { View, Text, Pressable, Modal} from 'react-native'
import React, { useState } from 'react'
import style from './style';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../Button';

const OrderItem = (props: any) => {

    const {cart, location, totalPrice} = props.item;

    const [modalVisible, setModalVisible] = useState(false);

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
                    renderItem={({item}) => <Text onPress={() => setModalVisible(true)} style={{fontSize:11, fontStyle:'italic'}} numberOfLines={1}> - {cart[cart.indexOf(item)].productName}</Text>}
                />
                {cart.length >= 3 ? <Text>...</Text> : <></>}
            </View>

            <Modal
                visible={modalVisible}
                onRequestClose={
                    () => 
                        setModalVisible(false)
                }
                animationType='fade'
                transparent={true}
            >
                    <Pressable 
                                style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f7f5f0', opacity: 0.85}}
                                onPress={() => setModalVisible(false)}    
                    >
                        <View style={{borderWidth: 1, padding: 10, width: '90%', borderRadius: 10, backgroundColor: 'white', borderColor: 'lightgrey'}}>
                            <FlatList
                                data={cart}
                                renderItem={({item}) => <Text style={{fontSize:13, fontStyle:'italic'}}> - {cart[cart.indexOf(item)].productName}</Text>}
                            />
                        </View>
                        <Button text={"Go Back"} onPress={() => setModalVisible(false)} ></Button>
                    </Pressable>
            </Modal>     
        </View>
  )
}

export default OrderItem;