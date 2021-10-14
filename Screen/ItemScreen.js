import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Image:{
    height:150,
    width:150,
    borderRadius:20
  },
  ImageC:{
    top:windowHeight,
    
  },
  Text:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    left:30,
    top:150
  }
})
const ItemScreen = () => {
  const Y=useSharedValue(0);
  useEffect(()=>{
    Y.value=1
  },[Y.value])
  const ImageAnimatin =useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,-(windowHeight-250)],Extrapolate.CLAMP),{duration:600})
     }],
     opacity:(interpolate(Y.value,[0,1],[0,1],Extrapolate.CLAMP))
    }
  })
  const ImageAnimatin2 =useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,-(windowHeight-250)],Extrapolate.CLAMP),{duration:650})
     }],
     opacity:withTiming(interpolate(Y.value,[0,1],[0,1],Extrapolate.CLAMP),{duration:600})
    }
  })
  const TextAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withTiming( interpolate(Y.value,[0,1],[-100,0],Extrapolate.CLAMP),{duration:500})
      }]
    }
  })
  return (
    <View >
      <Animated.Text style={[styles.Text,TextAnimation]}>Users prompt with questions, get suggestions</Animated.Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

      
      <Animated.View style={[styles.ImageC,ImageAnimatin]}>
        <Image
        source={{uri:'https://weart.co/v2/wp-content/uploads/2017/05/WE_ART_DAVID_BLACK_1705_2.jpg'}}
        style={styles.Image}
        />
      </Animated.View>
      <Animated.View style={[styles.ImageC,ImageAnimatin2]}>
        <Image
        source={{uri:'https://designculture.com.br/wp-content/uploads/2017/06/main03.jpg'}}
        style={styles.Image}
        />
      </Animated.View>
      </View>
    </View>
  )
}

export default ItemScreen


