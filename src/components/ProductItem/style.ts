import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        margin: 5,
    },
    title: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    star: {
        margin: 2,
    },
})

export default style; 