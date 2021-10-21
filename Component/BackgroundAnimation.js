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
  },
  TextName:{
    position:'absolute',
    color:'white',
    fontSize:39,
    fontWeight:"bold",
    top:60,
    left:windowWidth/3,
    width:windowWidth/2
  }
})
const BackgroundAnimation = ({item,index,translationX}) => {
  const BackgroundAnimation=useAnimatedStyle(()=>{
    return{

      width:interpolate((translationX.value),[(index - 1) * Size*1.25, (index ) * Size*1.25],[0,windowWidth],Extrapolate.CLAMP)
    }
  })
  
  const TextTransForm=useAnimatedStyle(()=>{
    return{

      transform:[{
        translateX:interpolate((translationX.value),[(index ) * Size*1.25,(index - 1) * Size*1.25],[0,-windowWidth],Extrapolate.CLAMP)
      }]
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
        <Animated.Text style={[styles.TextName,TextTransForm]}>{item.name}</Animated.Text>
          <LinearGradient
        colors={["transparent",'black', 'black']}
        style={styles.LinearGradient}
      />
      </Animated.View>
  )
}

export default BackgroundAnimation


