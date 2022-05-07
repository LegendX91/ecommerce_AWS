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
        margin: 5,
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
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
        alignContent: 'center',
        justifyContent: 'center',
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