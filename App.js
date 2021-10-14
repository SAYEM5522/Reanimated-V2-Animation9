
import React from 'react';
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Card1 from './Component/Card1';
import Card2 from './Component/Card2';
import Card3 from './Component/Card3';
import { data } from './Component/Data';
import Item from './Component/Item';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  
  },
  ViewContainer:{
    top:25,
    height:windowHeight-180,
    backgroundColor:'#171716',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    // position:'absolute',
    width:windowWidth
  },
  Context:{
    marginLeft:25,
    fontSize:18,
    fontWeight:'bold',
    top:45,
    color:'white',
    height:80

  },
  BottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:10,
    
  },
  IMG:{
    width:50,
    height:50,
    left:-10,
    borderRadius:25
  },
  Text1:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },
  Text2:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
  
});
export default function App() {
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
        Y.value=withSpring(0,config)
        if(Y.value>100){
          Y.value=withSpring(0,config)
        }
    },
  });

  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
   
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform:[
        {
        translateY:clamp(Y.value,0,(windowHeight/3)-150)
      },
      {
        scaleY:interpolate(Y.value,[0,130],[1,0.53],Extrapolate.CLAMP)
      }
    ],
     
      top:interpolate(Y.value,[0,130],[25,(windowHeight/4.5)],Extrapolate.CLAMP),
      height:interpolate(translationY.value,[0,350],[windowHeight-180,0],Extrapolate.CLAMP)


    };
  });
 
  const TransformAnimaion=useAnimatedStyle(()=>{
    return{
     flex:1,
     
      top:interpolate(Y.value,[0,100],[0,(windowHeight/3)+150],Extrapolate.CLAMP),
      opacity:interpolate(Y.value,[0,20],[1,0],Extrapolate.CLAMP),
    }
  })
  const TextTransform=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:interpolate(translationY.value,[0,100],[0,-400],Extrapolate.CLAMP)
      }]
    }
  })
  const FlatListT = useAnimatedStyle(() => {
    return {
     transform:[{
       translateY:withSpring(interpolate(translationY.value,[0,150],[0,-110],Extrapolate.CLAMP),{mass:1})
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
      <Animated.View style={[styles.BottomContainer,FlatListT]}>
      <Image
      source={{uri:item.img}}
      style={styles.IMG}
      />
      <View style={{left:-60}}>
        <Text style={styles.Text1}>{item.name}</Text>
        <Text style={{color:'white'}}>Transparent</Text>
      </View>
      <Text style={styles.Text2}>{item.price}</Text>
    </Animated.View>

    // <>
    // <Item item={item} index={index} translationY={translationY} />
    // </>
    )
  }

  return (
    <View style={styles.container}>
     <PanGestureHandler onGestureEvent={gestureHandler}>
       <Animated.View style={[styles.ViewContainer,animatedStyle]}>
        <Card1/>
       </Animated.View>
     </PanGestureHandler>
     < Animated.View style={[TransformAnimaion]}>
     <Animated.Text style={[styles.Context,]}>Today</Animated.Text>
     <AnimatedFlatlist
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        />
     </Animated.View>
      <StatusBar style="dark" />
    </View>
  );
}


