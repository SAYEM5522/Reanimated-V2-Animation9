import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar/>
      <Pressable onPress={()=>navigation.push("ItemScreen")}>
      <Text style={{alignSelf:'center',alignItems:'center'}}>HomeScreen</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
