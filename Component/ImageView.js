import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Size=windowWidth*0.55
const SPACING = 10;
const EMPTY_ITEM_SIZE = (windowWidth - Size) / 2;
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
  ImageView:{
    // marginHorizontal: SPACING*5,
    // padding: SPACING * 2,
    alignItems: 'center',
   
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
   
  },
  Icon:{
    position:'absolute',
    top:10,
    zIndex:1000,
    left:(windowWidth*0.55)-40
  }
})
const ImageView = ({item,index,translationX}) => {
  const Y=useSharedValue(0);
  useEffect(()=>{
    Y.value=1
  },[Y.value])
  const TransForm=useAnimatedStyle(()=>{
    return{
      transform:[
        {
          translateX:withTiming(interpolate(Y.value,[0,1],[windowWidth/2,0]),{duration:700, easing: Easing.exp})
        },
        {
        translateY:interpolate(translationX.value,[(index-2)*(Size*1.25),(index-1)*(Size*1.25),(index)*(Size*1.25)],[0,-65,0],Extrapolate.CLAMP)
      },
  
    ]
    }
  })
 
  return(
    
      <View style={styles.ImageContainer}>
            <Animated.View
              style={[styles.ImageView,TransForm]}
            >
              <AntDesign style={styles.Icon} name="hearto" size={24} color="white" />
              <Animated.Image
                source={{ uri: item.img}}
                style={[styles.posterImage]}
              />
                </Animated.View>
          </View>
    
  )
}

export default ImageView


