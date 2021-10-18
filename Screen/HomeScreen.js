import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../Component/Header';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import ItemCollection from '../Component/ItemCollection';
import Catagory from '../Component/Catagory';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HeaderHeight=80;
const image1="https://i2-prod.mirror.co.uk/incoming/article22028564.ece/ALTERNATES/s1200c/0_hp-teaser-sg-m-desktop.jpg"
const image2="https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHdpdGglMjBzdW5nbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
const styles = StyleSheet.create({
  Image:{
    height:windowHeight/2,
    width:windowWidth,
    top:-HeaderHeight,
    zIndex:-1000,
    position:'relative'
  },
  ViewC:{
    height:(windowHeight-HeaderHeight*2),
    width:windowWidth,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    top:-HeaderHeight*3.5,
  

  },
  TextC:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
    top:-HeaderHeight*4.4,
    left:50
  },
  IconList:{
    flexDirection:'row',
    alignItems:'center',
    width:windowWidth/3,
    alignSelf:'center',
    position:'absolute'
  },
  Icon:{
    padding:7,
    backgroundColor:'#fff',
    borderRadius:50,
    marginRight:20
  },
  Line:{
    height:1.5,
    width:(windowWidth/2)+30,
    backgroundColor:'lightgray',
    left:5
  },
  BestS:{
    flexDirection:'row',
    alignItems:'center'
  },
  BestST:{
    fontSize:21,
    fontWeight:'700',
    color:'black',
    left:15,
    letterSpacing:-0.1,
  },
  ComponentL:{
    flexDirection:'row',
    alignItems:'center',
    top:5,
    paddingHorizontal:5
  }
})
const HomeScreen = () => {
  const Img1="https://c2.peakpx.com/wallpaper/107/26/326/2k-dark-guy-male-man-wallpaper.jpg"
  const Img2="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3NlcyUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  const navigation = useNavigation();
  const y = useSharedValue(0);
  // const Change=useSharedValue(0)
  const [Change,setChange]=useState(false)
  const config={
    mass:0.3,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:10,
    restSpeedThreshold:10
  }
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const TranX=(value)=>{
     setChange(value)
    
   
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = y.value;
    },
    onActive: (event, ctx) => {
      y.value = ctx.startX + event.translationY;

    },
    onEnd: (_) => {
      y.value = withSpring(0,config);
      if(y.value>30){
        runOnJS(TranX)(true)
        }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:clamp(y.value,0,60)
        },
      ],
    };
  });
  const IconTransform=useAnimatedStyle(()=>{
    return{
    
      top:80,
      opacity:Change?1:0,
      // interpolate(y.value,[0,60],[150,80],Extrapolate.CLAMP),
      // transform:[{
      //   translateY:interpolate(y.value,[0,20,50,60],[0,5,30,65],Extrapolate.CLAMP)
      // }],

    }
  })
  const onPress=()=>{
    navigation.push("ItemScreen")
  }
  const IconA1=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withTiming(interpolate(y.value,[0,20,50,60],[0,5,30,65],Extrapolate.CLAMP),{duration:60})
      }],

    }
  })
  const IconA2=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withSpring(interpolate(y.value,[0,20,50,60],[0,5,30,65],Extrapolate.CLAMP),{mass:0.5,stiffness:90})
      }],

    }
  })
  const IconA3=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withTiming(interpolate(y.value,[0,20,50,60],[0,5,30,65],Extrapolate.CLAMP),{duration:60})
      }],

    }
  })
  const OpacityAnimation =useAnimatedStyle(()=>{
    return{
      opacity:Change?withSpring(1):withSpring(0)
    }
  })

  return (
    <View>
      <StatusBar/>
      <Header/>
      <View>
        <Image
        source={{uri:(Change)?(Img2):(Img1)}}
        style={styles.Image}
        />
        <Animated.View style={[styles.IconList,IconTransform]}>
          <Animated.View style={[styles.Icon,IconA1]}>
          <AntDesign name="setting" size={24} color="black" />
          </Animated.View>
          <Animated.View style={[styles.Icon,IconA2]}>
          <AntDesign name="caretdown" onPress={onPress} size={24} color="black" />
          </Animated.View>
          <Animated.View style={[styles.Icon,IconA3]}>
          <AntDesign name="hearto" size={24} color="black" />
          </Animated.View>
        </Animated.View>
        <Animated.Text style={[styles.TextC,OpacityAnimation]}>Virtual try-on </Animated.Text>
        <PanGestureHandler
         activeOffsetX={[-30, 30]}
         activeOffsetY={[-30, 30]}
        onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.ViewC,animatedStyle]}>
          <ItemCollection/>
            <View style={styles.BestS}>
              <View style={styles.Line}/>
              <Text style={styles.BestST}>Best Selling</Text>
            </View>
            <View style={styles.ComponentL}>
            <Catagory img={image1} text="Men's collection"/>
            <Catagory img={image2} text="Women's collection"/>
            </View>
        </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  )
}

export default HomeScreen


