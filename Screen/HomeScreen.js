import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../Component/Header';
const HomeScreen = () => {
  const Img1="https://res.cloudinary.com/liingo/image/upload/q_85/v1585003269/content/our-tools-vto.jpg"
  const Img2="https://i.pinimg.com/236x/16/32/04/1632041be6785a774fd9aa1aa60e3a36.jpg"
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar/>
      <Header/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
