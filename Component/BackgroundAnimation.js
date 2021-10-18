import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BACKDROP_HEIGHT = windowHeight*0.7;
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
  },
  LinearGradient:{
    height: BACKDROP_HEIGHT,
    width:windowWidth,
    position: 'absolute',
    bottom: 0,
    zIndex:1000
  }
})
const BackgroundAnimation = ({item,index,translationX}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{

      width:interpolate((translationX.value),[(index - 1) * Size*1.25, (index ) * Size*1.25],[0,windowWidth],Extrapolate.CLAMP)
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
          <LinearGradient
        colors={["transparent",'black', 'black']}
        style={styles.LinearGradient}
      />
      </Animated.View>
  )
}

export default BackgroundAnimation


