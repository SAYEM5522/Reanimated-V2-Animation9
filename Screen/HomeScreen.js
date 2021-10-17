import React from 'react'
import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../Component/Header';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HeaderHeight=80;
const styles = StyleSheet.create({
  Image:{
    height:windowHeight/2,
    width:windowWidth,
    top:-HeaderHeight,
    zIndex:-1000
  },
  ViewC:{
    height:(windowHeight-HeaderHeight*2),
    width:windowWidth,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    top:-HeaderHeight*2.5

  }
})
const HomeScreen = () => {
  const Img1="https://res.cloudinary.com/liingo/image/upload/q_85/v1585003269/content/our-tools-vto.jpg"
  const Img2="https://i.pinimg.com/236x/16/32/04/1632041be6785a774fd9aa1aa60e3a36.jpg"
  const navigation = useNavigation();
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = y.value;
    },
    onActive: (event, ctx) => {
      y.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      y.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: y.value,
        },
      ],
    };
  });
  return (
    <View>
      <StatusBar/>
      <Header/>
      <View>
        <Image
        source={{uri:Img1}}
        style={styles.Image}
        />
        <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.ViewC,animatedStyle]}>

        </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  )
}

export default HomeScreen


