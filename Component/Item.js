import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
  BottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:10,
  
    
  },
  IMG:{
    width:100,
    height:50,
    resizeMode:'contain',
    left:-25
  },
})

const Item = ({item}) => {
  return (
    <View style={[styles.BottomContainer]}>
        <Image
        source={{uri:item.image}}
        style={styles.IMG}
        />
        <View>
          <Text style={{fontSize:16,fontWeight:'bold',}}>{item.name}</Text>
          <Text >Transparent</Text>
        </View>
        <Text style={{fontSize:16,fontWeight:'bold',}}>{item.price}</Text>
      </View>
  )
}

export default Item

