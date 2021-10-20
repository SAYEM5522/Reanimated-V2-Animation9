import React, { useEffect } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Size=windowWidth*0.55
const SPACING = 10;
const EMPTY_ITEM_SIZE = (windowWidth - Size) / 2;
import { AntDesign } from '@expo/vector-icons';
import Product from './Product';
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
  },
  RotateIMage:{
    position:'absolute',
    backgroundColor:'white',
    height:Size*1.47,
    width:Size,
    borderRadius:24,
    zIndex:1000
  }
})
const ImageView = ({item,index,translationX}) => {
  const Y=useSharedValue(0);
  const Flag=useSharedValue(0);
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
 const onPress=()=>{
  
   Flag.value=(!Flag.value)

 }
 const ImageAnimation=useAnimatedStyle(()=>{
   const outPut=[0,180]
   return{
     transform:[{
       rotateY:withTiming(interpolate(Flag.value,[0,1],outPut,Extrapolate.CLAMP)+"deg",{duration:900})
     }]
   }
 })
 const RotateAnimation=useAnimatedStyle(()=>{
  return{
    transform:[{
    translateY:withTiming(interpolate(Flag.value,[0,1],[-1,0],Extrapolate.CLAMP),{duration:900})
    }],
    opacity:withTiming(interpolate(Flag.value,[0,1],[0,1]),{duration:700})
   
  }
}
)
  return(
    
      <View style={styles.ImageContainer}>
            <Animated.View
              style={[styles.ImageView,TransForm]}
            >
              <Animated.View style={ImageAnimation}>
              <Pressable onPress={onPress}>
                <Animated.View style={[styles.RotateIMage,RotateAnimation]}>
                  <Product Flag={Flag.value}/>
                </Animated.View>
              <AntDesign style={styles.Icon} name="hearto" size={24} color="white" />
             
              <Animated.Image
                source={{ uri: item.img}}
                style={[styles.posterImage]}
                
              />
              </Pressable>
              </Animated.View>
                </Animated.View>
          </View>
    
  )
}

export default ImageView


