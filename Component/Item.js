import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
  BottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:10,
    top:25
  },
  IMG:{
    width:50,
    height:50,
    left:-10,
    borderRadius:25
  },
  Text1:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },
  Text2:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }

})

const Item = ({item}) => {
  return (
    <View style={[styles.BottomContainer]}>
        <Image
        source={{uri:item.img}}
        style={styles.IMG}
        />
        <View style={{left:-60}}>
          <Text style={styles.Text1}>{item.name}</Text>
          <Text style={{color:'white'}}>Transparent</Text>
        </View>
        <Text style={styles.Text2}>{item.price}</Text>
      </View>
  )
}

export default Item

