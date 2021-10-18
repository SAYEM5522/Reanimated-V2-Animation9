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
   name:"Entertainment",
   price:"$900"
 },
 {
   id:"2",
   img:"https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHdpdGglMjBzdW5nbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
   name:"Food & Drinks",
   price:"$1000"
 },
 {
   id:"3",
   img:"https://c2.peakpx.com/wallpaper/107/26/326/2k-dark-guy-male-man-wallpaper.jpg",
   name:"Gyme",
   price:"$1000"
 },
 
 {
   id:"4",
   img:"https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3NlcyUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
   name:" Comunicate",
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


