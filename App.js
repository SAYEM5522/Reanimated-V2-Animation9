
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
    backgroundColor: '#000',
  
  },
  ViewContainer:{
    top:25
  },
  Context:{
    marginLeft:25,
    fontSize:18,
    fontWeight:'bold',
    top:25,
    color:'white'

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
  const ItemHeight=60
  const getItemLayout = (data, index) => ({
    length: ItemHeight,
    offset: ItemHeight * index,
    index,
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
     <Text style={[styles.Context]}>Transactions</Text>

     <AnimatedFlatlist
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        />
     {/* </View> */}
      <StatusBar style="dark" />
    </View>
  );
}


