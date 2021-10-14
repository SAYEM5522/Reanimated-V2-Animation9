import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Card1C:{
    height:windowHeight-180,
    backgroundColor:'#171716',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  }
})
const Card1 = () => {
  return (
    <View style={styles.Card1C}>
    
    </View>
  )
}

export default Card1


