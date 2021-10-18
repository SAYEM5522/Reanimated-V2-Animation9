import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Image:{
    height:125,
    width:(windowWidth/2)-20,
    position:'relative'
   
  },
  Container:{
    paddingHorizontal:8
  },
  CatagoryName:{
    position:'absolute',
    width:115,
    height:60,
    backgroundColor:'#fff',
    top:(windowWidth/4)-8,
    left:8,
    borderTopRightRadius:20

  },
  CatagoryNameT:{
    fontSize:16,
    fontWeight:'500',
    
  },
  TextGo:{
    backgroundColor:'lightgray',
    width:45,
    height:40,
    position:'absolute',
    left:100,
    top:(windowWidth/4)+10,
    borderRadius:8
  },
  TextGoT:{
    fontSize:15,
    top:9,
    alignSelf:'center'
  }
})
const Catagory = ({img,text}) => {
  return (
    <View style={styles.Container}>
     <Image
     source={{uri:img}}
     style={styles.Image}
     />
     <View style={styles.CatagoryName}>
      <Text style={styles.CatagoryNameT}>{text}</Text>
     </View>
     <View style={styles.TextGo}>
     <Text style={styles.TextGoT}>Go</Text>
     </View>
    
    </View>
  )
}

export default Catagory


