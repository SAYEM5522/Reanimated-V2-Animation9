import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
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

const ItemScreen2 = () => {
  const Y=useSharedValue(0);
  const Exciting=useSharedValue(false);
  const navigation = useNavigation();

const onPress=()=>{
  Exciting.value=(!Exciting.value)
  navigation.push("HomeScreen");
}
  useEffect(()=>{
    Y.value=1
  },[Y.value])
  const ImageAnimatin =useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,-(windowHeight-250)],Extrapolate.CLAMP),{duration:600},(_isFinished)=>interpolate(_isFinished,[0,1],[-200,0],Extrapolate.CLAMP))
     },
    //  {
    //     translateX:(Exciting.value)&& withTiming(-200,{duration:6000})
    //  }
    ],
    //  left:(Exciting.value)&& withTiming(-200,{duration:6000}),
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
        translateY:withTiming( interpolate(Y.value,[0,1],[-100,0],Extrapolate.CLAMP),{duration:900})
      }]
    }
  })
  return (
    <View >
    {/* <Pressable onPress={()=>navigation.push("ItemScreen2")}>
  
   <Animated.Text style={[styles.Text,TextAnimation]}>Users prompt with questions, get suggestions</Animated.Text>
   </Pressable> */}
   
   <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
     
   <Animated.View  style={[styles.ImageC,ImageAnimatin]}>
     <Image
     
     source={{uri:'https://media.gq.com/photos/5d39cba1a66ff60008318e25/16:9/w_2560%2Cc_limit/stearns-tout.jpg'}}
     style={styles.Image}
     />
   </Animated.View>
  
   <Animated.View style={[styles.ImageC,ImageAnimatin2]}>
     <Image
     source={{uri:'http://images.ctfassets.net/58l7lmmaka1i/2jqTg1i70ce8G6yUyIi624/77fcf976d461fd96715da306b0afec34/cover.jpg'}}
     style={styles.Image}
     />
   </Animated.View>
   </View>
 </View>
  )
}

export default ItemScreen2
