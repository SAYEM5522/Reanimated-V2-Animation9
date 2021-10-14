
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Card1 from './Component/Card1';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  
  },
  ViewContainer:{
    top:25
  }
});
export default function App() {
  const Y = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
   
    },
    onEnd: (_) => {
   Y.value=0
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
     
      transform:[{
        translateY:Y.value
      }]
    };
  });
  return (
    <View style={styles.container}>
     <PanGestureHandler onGestureEvent={gestureHandler}>
       <Animated.View style={[styles.ViewContainer,animatedStyle]}>
        <Card1/>
       </Animated.View>
     </PanGestureHandler>
      <StatusBar style="dark" />
    </View>
  );
}


