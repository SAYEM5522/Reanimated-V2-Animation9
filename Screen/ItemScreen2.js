import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Header from '../Component/Header';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Image:{
    height:150,
    width:150,
    borderRadius:5
  },
  ImageC:{
    // top:windowHeight,
  },
  Text:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    left:30,
    top:120,
    width:250
  
  },
  Container:{
    flex:1
  },
  Text1:{
    fontSize:17,
    fontWeight:'700',
    left:35,
    top:8
    
  },
  Text2:{
    fontSize:17,
    fontWeight:'700',
    left:35,
    top:8
  },
  TextC:{
    fontSize:20,
    fontWeight:'700',
    left:30,
    top:50
  }
})

const ItemScreen2 = () => {
  const Y=useSharedValue(0);
  const Exciting=useSharedValue(false);
  const navigation = useNavigation();

const onPress=()=>{
  Exciting.value=(!Exciting.value)
  navigation.push("DetailScreen");
}
useEffect(()=>{
  Y.value=1
},[Y.value])
const ImageAnimatin =useAnimatedStyle(()=>{
  return{
   transform:[{
     translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,windowHeight/3.8],Extrapolate.CLAMP),{duration:600},)
   },
  ],
   left:Exciting.value?withTiming(-170,{duration:150},(_isFinished)=>_isFinished?Exciting.value=withTiming(false,{duration:400}):Exciting.value=true):0,
   opacity:Exciting.value?withTiming(interpolate(Y.value,[0,1],[1,0],Extrapolate.CLAMP),{duration:100}):withTiming(interpolate(Y.value,[0,0.1,1],[0,0.1,1],Extrapolate.CLAMP),{duration:600}),
  }
})
const ImageAnimatin2 =useAnimatedStyle(()=>{
  return{
   transform:[{
     translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,windowHeight/3.8],Extrapolate.CLAMP),{duration:650})
   }],
   opacity:Exciting.value?withTiming(interpolate(Y.value,[0,1],[1,0],Extrapolate.CLAMP),{duration:100}):withTiming(interpolate(Y.value,[0,0.1,1],[0,0.1,1],Extrapolate.CLAMP),{duration:600}),
   right:Exciting.value?withTiming(-170,{duration:150},(_isFinished)=>_isFinished?Exciting.value=withTiming(false,{duration:400}):Exciting.value=true):0,

  }
})
const TextAnimation=useAnimatedStyle(()=>{
  return{
    transform:[{
      translateY:withTiming( interpolate(Y.value,[0,1],[-60,0],Extrapolate.CLAMP),{duration:500})
    }]
  }
})
const TextAnimation1=useAnimatedStyle(()=>{
  return{
    transform:[{
      translateX:withTiming( interpolate(Y.value,[0,1],[-70,0],Extrapolate.CLAMP),{duration:550})
    }]
  }
})
  return (
    <View style={styles.Container} >
      <Header color={"black"} flag={true}/>
      <Animated.Text style={[styles.TextC,TextAnimation1]}>I'm locking for Sunglasses for ...</Animated.Text>
      <Animated.Text style={[styles.Text,TextAnimation]}>And who are you shopping for?</Animated.Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
       
      <Animated.View  style={[styles.ImageC,ImageAnimatin]}>
      <Pressable onPress={onPress}>
        <Image
        source={{uri:'https://c2.peakpx.com/wallpaper/107/26/326/2k-dark-guy-male-man-wallpaper.jpg'}}
        style={styles.Image}
        />
        </Pressable>
        <Text style={styles.Text1}>Man</Text>
      </Animated.View>
      <Animated.View style={[styles.ImageC,ImageAnimatin2]}>
        <Image
        source={{uri:'https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3NlcyUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}}
        style={styles.Image}
        />
         <Text style={styles.Text2}>Weman</Text>
      </Animated.View>
      </View>
    </View>
  )
}

export default ItemScreen2
