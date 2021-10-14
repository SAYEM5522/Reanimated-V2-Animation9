
import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Card1 from './Component/Card1';
import { data } from './Component/Data';
import Item from './Component/Item';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  ViewContainer:{
    top:25
  },
  BottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:10,
  
    
  },
  IMG:{
    width:100,
    height:50,
    resizeMode:'contain',
    left:-25
  },
});
export default function App() {
  const Y = useSharedValue(0);
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
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

  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
   
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
     
      transform:[{
        translateY:Y.value
      }]
    };
  });

  const renderItem=({item,index})=>{
    return(
    <>
    <Item item={item} index={index} />
    </>
    )
  }

  return (
    <View style={styles.container}>
     <PanGestureHandler onGestureEvent={gestureHandler}>
       <Animated.View style={[styles.ViewContainer,animatedStyle]}>
        <Card1/>
       </Animated.View>
     </PanGestureHandler>
     {/* <View> */}
     <AnimatedFlatlist
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        />
     {/* </View> */}
      <StatusBar style="dark" />
    </View>
  );
}


