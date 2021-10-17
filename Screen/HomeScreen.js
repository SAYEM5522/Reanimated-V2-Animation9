import React from 'react'
import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../Component/Header';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Image:{
    height:windowHeight/2,
    width:windowWidth,
    top:-80,
    zIndex:-1000
  }
})
const HomeScreen = () => {
  const Img1="https://res.cloudinary.com/liingo/image/upload/q_85/v1585003269/content/our-tools-vto.jpg"
  const Img2="https://i.pinimg.com/236x/16/32/04/1632041be6785a774fd9aa1aa60e3a36.jpg"
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar/>
      <Header/>
      <View>
        <Image
        source={{uri:Img1}}
        style={styles.Image}
        />
      </View>
    </View>
  )
}

export default HomeScreen


