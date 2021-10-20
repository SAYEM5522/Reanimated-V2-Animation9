import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated';
import BackgroundAnimation from './BackgroundAnimation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BACKDROP_HEIGHT = windowHeight;
 const data=[

 {
   id:"1",
   img:"https://i2-prod.mirror.co.uk/incoming/article22028564.ece/ALTERNATES/s1200c/0_hp-teaser-sg-m-desktop.jpg",
   name:"Shooter",
   price:"$900"
 },
 {
   id:"2",
   img:"https://media.istockphoto.com/photos/portrait-of-an-african-american-young-woman-in-sunglasses-isolated-on-picture-id1201881974?k=20&m=1201881974&s=612x612&w=0&h=X41gI8ph_9i3CjyPeorHj9U95g8aeNQPX79_CEpx4nc=",
   name:"ROUND METAL ",
   price:"$1000"
 },
 {
   id:"3",
   img:"https://c2.peakpx.com/wallpaper/107/26/326/2k-dark-guy-male-man-wallpaper.jpg",
   name:"AVIATER",
   price:"$1000"
 },
 
 {
   id:"4",
   img:"https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3NlcyUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
   name:" Shooter",
   price:"$1200"
 },

 ]
 const styles = StyleSheet.create({
  Container:{
    height: BACKDROP_HEIGHT,
     width:windowWidth,
      position: 'absolute' 
  }
 })
const BackgroundC = ({translationX}) => {

  const renderItem=({item,index})=>{
    return (
     <BackgroundAnimation item={item} index={index} translationX={translationX} />
    );
   }


  return (
    <View style={styles.Container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id }
        removeClippedSubviews={false}
        contentContainerStyle={{ width:windowWidth, height: BACKDROP_HEIGHT }}
        renderItem={renderItem}
      />
     
    </View>
  );
}

export default BackgroundC


