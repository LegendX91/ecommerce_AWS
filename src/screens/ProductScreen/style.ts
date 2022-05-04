import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
});

export default style;