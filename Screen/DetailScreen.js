import React from 'react'
import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { data } from '../Component/Data'
import ImageView from '../Component/ImageView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Size=windowWidth*0.55
const EMPTY_ITEM_SIZE = (windowWidth - Size) / 2;

const SPACING = 10;
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'white'
  },

})
const DetailScreen = () => {
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  
  const renderItem=({item,index})=>{
    if (item?.flag) {
      return <View style={{ width: EMPTY_ITEM_SIZE }} />;
    }
    return(
      <>
      
      <ImageView item={item} index={index} translationX={translationX}/>
      </>
      
    )
  }
  return (
    <View style={styles.Container}>
     <AnimatedFlatlist
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      contentContainerStyle={{ alignItems: 'center' }}
      snapToInterval={Size*1.25}
      snapToAlignment='start'
      renderItem={renderItem}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
     />
    </View>
  )
}

export default DetailScreen


