import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Header = () => {
  return (
    <View style={styles.Header}>
     <AntDesign name="menu-fold" size={24} color="black" />
     <View style={styles.Icon}>
     <EvilIcons name="search" size={33} style={{right:20}} color="black" />
     <Ionicons name="lock-closed-outline" size={24} color="black" />
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Header:{
    height:90,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    top:-10
  
  },
  Icon:{
    flexDirection:'row',
    alignItems:'center'
  }
})
