import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;

const Size=windowWidth*0.55
const styles = StyleSheet.create({
  Container:{
    flex:1,
    position:'absolute'
  },
  Image:{
    height:90,
    width:90,
    alignSelf:'center',
    left:Size/4.5,
    resizeMode:'contain'
  },
  RoundBox1:{
    width:25,
    height:25,
    borderRadius:15,
    backgroundColor:'black',

  },
  RoundBox2:{
    width:25,
    height:25,
    borderRadius:15,
    backgroundColor:'#3b5d94',
    
  },
  RoundBox3:{
    width:25,
    height:25,
    borderRadius:15,
    backgroundColor:'#347aeb',
   
  },
  BoxContainer:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    left:Size/5.5,
    width:100,
    justifyContent:'space-between',
    top:15
  },
  Text1:{
    fontSize:16,
    fontWeight:'700',
    left:30,
    top:25
  }
})
const Product = ({Flag}) => {
  const Rotation=useAnimatedStyle(()=>{
    return{
      transform:[{
        rotateY:180+"deg"
      }]
    }
  })
  return (
    <View style={styles.Container}>
     <Image
     source={{uri:'https://cdn.pixabay.com/photo/2014/02/14/08/20/sunglasses-265839_960_720.jpg'}}
     style={styles.Image}
     />
     <View style={styles.BoxContainer}>
     <View style={styles.RoundBox1}/>
     <View style={styles.RoundBox2}/>
     <View style={styles.RoundBox3}/>
     </View>
     <Animated.Text style={[styles.Text1,Rotation]}>100% UV protection</Animated.Text>
    </View>
  )
}

export default Product


