import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Size=windowWidth*0.55
const SPACING = 10;
const EMPTY_ITEM_SIZE = (windowWidth - Size) / 2;
const styles = StyleSheet.create({
  ImageView:{
    // marginHorizontal: SPACING*5,
    // padding: SPACING * 2,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 34,
    width: Size+10,
    height: Size *1.47,
 
  },
  posterImage: {
    width: Size,
    height: Size *1.47,
    resizeMode: 'cover',
    borderRadius: 24,

  },
  ImageContainer:{
    width: Size*1.25,
   
  }
})
const ImageView = ({item,index,translationX}) => {
  const TransForm=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:interpolate(translationX.value,[(index-2)*(Size*1.25),(index-1)*(Size*1.25),(index)*(Size*1.25)],[0,-65,0],Extrapolate.CLAMP)
      }]
    }
  })
  return(
    
      <View style={styles.ImageContainer}>
            <Animated.View
              style={[styles.ImageView,TransForm]}
            >
              <Animated.Image
                source={{ uri: item.img}}
                style={[styles.posterImage]}
              />
                </Animated.View>
          </View>
    
  )
}

export default ImageView


