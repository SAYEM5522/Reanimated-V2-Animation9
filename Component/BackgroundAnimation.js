import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BACKDROP_HEIGHT = windowHeight;
const Size=windowWidth*0.55
const styles = StyleSheet.create({
  Container:{
    position: 'absolute',
    width: windowWidth,
    height:windowHeight,
    overflow: 'hidden',
  },
  Image:{
    width:windowWidth,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
  }
})
const BackgroundAnimation = ({item,index,translationX}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{
      // transform:[{
      //   translateX:interpolate(translationX.value,[(index - 2) * Size, (index - 1) * Size],[0,windowWidth],Extrapolate.CLAMP)
      // }]
      width:interpolate(translationX.value,[(index - 1) * Size, (index ) * Size],[0,windowWidth],Extrapolate.CLAMP)
    }
  })
  return (
    <Animated.View
        removeClippedSubviews={false}
        style={[styles.Container,BackgroundAnimation]}
      >
        <Image
          source={{ uri: item.img }}
          style={styles.Image}
        />
      </Animated.View>
  )
}

export default BackgroundAnimation


