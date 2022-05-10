import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
    },
    price: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: 10,
        lineHeight: 20,
        textAlign: 'justify',
    }
});

export default style;