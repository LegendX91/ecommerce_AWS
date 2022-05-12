import { View, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useCallback, useState } from 'react'


const ImageCarousel = ({images}: {images: string[]}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onListChange = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0){
            setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);

    return (
        <View style={style.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image  key={images.indexOf(item)} style={[style.image, {width: windowWidth - 40 }]} 
                            source={{ uri: item }} />)}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onListChange}
            />
            <View style={style.dots}>
                {images.map((image, index) => (
                    <View style={[
                        style.dot, {
                            backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'  
                        }
                    ]} />
                ))}
            </View>
        </View>
  )
}

const style= StyleSheet.create({
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5,
    },
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    }
})

export default ImageCarousel