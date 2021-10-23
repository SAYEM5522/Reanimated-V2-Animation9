import React, { useEffect } from 'react'
import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native'
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import BackgroundC from '../Component/BackgroundC';
import { data } from '../Component/Data'
import ImageView from '../Component/ImageView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Size=windowWidth*0.55
const EMPTY_ITEM_SIZE = (windowWidth - Size) / 2;
const ButtonHeight=55
const SPACING = 10;
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'white',
    zIndex:-1000
  },
  Icon:{
    position:'absolute',
    top:20,
    left:20,
    zIndex:1000
  },
  Button:{
    position:'absolute',
    bottom:20,
    alignSelf:'center',
    height:ButtonHeight,
    width:'76%',
    backgroundColor:'white',
    borderRadius:10
  },
  ButtonText:{
    alignSelf:'center',
    top:ButtonHeight/4.5,
    fontSize:20,
    fontWeight:'700'
  }
 
})
const DetailScreen = () => {
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList)
  const navigation = useNavigation();
 
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const onPress=()=>{
    navigation.goBack()
  }
 
  const renderItem=({item,index})=>{
    if (item?.flag) {
      return <View style={{ width: EMPTY_ITEM_SIZE }} />;
    }
    return(
      <View style={{top:70}}>
      <ImageView item={item} index={index} translationX={translationX}/>
    
      </View>
      
    )
  }
  return (
    <View style={styles.Container}>
    <AntDesign name="close" style={styles.Icon} onPress={onPress} size={28} color="white" />
     <BackgroundC  translationX={translationX}/>
     <View style={styles.Button}>
       <Text style={styles.ButtonText}>Try Glasses</Text>
     </View>
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


