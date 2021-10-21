import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import Header from '../Component/Header';


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
    left:20,
    top:8
    
  },
  Text2:{
    fontSize:17,
    fontWeight:'700',
    left:20,
    top:8
  },
  TextC:{
    fontSize:20,
    fontWeight:'700',
    left:30,
    top:50
  }
})
const ItemScreen = () => {
  const Y=useSharedValue(0);
  const Exciting=useSharedValue(false);
  // const [Exciting,setExciting]=useState(false);
  const navigation = useNavigation();

const onPress=()=>{
  // setExciting((!Exciting))
  Exciting.value=true
  navigation.push("ItemScreen2");
}
  useEffect(()=>{
    Y.value=1
  },[Y.value])
  const ImageAnimatin =useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,windowHeight/3.8],Extrapolate.CLAMP),{duration:750},)
     },
    ],
     left:Exciting.value?withTiming(-170,{duration:150},(_isFinished)=>_isFinished?Exciting.value=withTiming(false,{duration:400}):Exciting.value=true):0,
     opacity:Exciting.value?withTiming(interpolate(Y.value,[0,1],[1,0.0001],Extrapolate.CLAMP),{duration:300}):withTiming(interpolate(Y.value,[0,0.1,1],[0,0.1,1],Extrapolate.CLAMP),{duration:600}),
    }
  })
  const ImageAnimatin2 =useAnimatedStyle(()=>{
    return{
     transform:[{
       translateY:withTiming( interpolate(Y.value,[0,1],[windowHeight,windowHeight/3.8],Extrapolate.CLAMP),{duration:800})
     }],
     opacity:Exciting.value?withTiming(interpolate(Y.value,[0,1],[1,0.0001],Extrapolate.CLAMP),{duration:300}):withTiming(interpolate(Y.value,[0,0.1,1],[0,0.1,1],Extrapolate.CLAMP),{duration:600}),
     right:Exciting.value?withTiming(-170,{duration:150},(_isFinished)=>_isFinished?Exciting.value=withTiming(false,{duration:400}):Exciting.value=true):0,

    }
  })
  const TextAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withTiming( interpolate(Y.value,[0,1],[-80,0],Extrapolate.CLAMP),{duration:500})
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
      <Animated.Text style={[styles.TextC,TextAnimation1]}>I'm locking for ...</Animated.Text>
      <Animated.Text style={[styles.Text,TextAnimation]}>So, What are you looking for?</Animated.Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
       
      <Animated.View  style={[styles.ImageC,ImageAnimatin]}>
      <Pressable onPress={onPress}>
        <Image
        source={{uri:'https://i.pinimg.com/736x/e7/d3/08/e7d308240242be3ccb46f93b7631d97c.jpg'}}
        style={styles.Image}
        />
        </Pressable>
        <Text style={styles.Text1}>Sunglasses</Text>
      </Animated.View>
      <Animated.View style={[styles.ImageC,ImageAnimatin2]}>
        <Image
        source={{uri:'https://www.popsci.com/uploads/2021/03/03/Z6SNWJWQQJFYDOITXTZTDLK33U.jpg'}}
        style={styles.Image}
        />
         <Text style={styles.Text2}>Eyeglasses</Text>
      </Animated.View>
      </View>
    </View>
  )
}

export default ItemScreen


