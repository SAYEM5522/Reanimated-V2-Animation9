import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
const windowWidth = Dimensions.get('window').width;

const  data=[
  {
    id:"1",
    image:"https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Glasses-USA-Ottoto-Pluto-Aviator-Glasses.jpg",
    name:"Aivater Classic ",
    price:"$900",
    des:"4 colors"
  },
  {
    id:"2",
    image:"https://www.iceoptic.com/42974-large_default/ray-ban-round-metal-flash-lenses-demiglos-brushed-bronze-red-mirror.jpg",
    name:"Flash Lenses",
    price:"$1000",
    des:"8 colors"
  },
  {
    id:"3",
    image:"https://m.media-amazon.com/images/I/71Lv5EVXSxL._AC_UX679_.jpg",
    name:"Carbic Glases",
    price:"$1000",
    des:"3 colors"
  },
  
  {
    id:"4",
    image:"https://d1b5h9psu9yexj.cloudfront.net/33087/J-S-Premium-Military-Style-Classic-Aviator-Sunglasses--Polarized--100--UV-protection_20190619-213719_full.jpeg",
    name:" Flash Lenses",
    price:"$1200",
   des:"5 colors"
  },
  {
    id:"5",
    image:"https://m.media-amazon.com/images/I/51gxSBWohlL._UL1100_.jpg",
   
    name:"Aivater Classic",
    price:"$1000",
   des:"7 colors"
  },

  ]
const styles = StyleSheet.create({
  Container:{
    paddingVertical:25,
    paddingHorizontal:15
  },
  TextHeader:{
    fontSize:27,
    fontWeight:'900',
    color:'black'
  },
  ScrollImage:{
    height:120,
    width:120,
    resizeMode:'contain'
  },
  BottomSheetImage:{
    paddingHorizontal:18
  },
  Text1:{
    fontSize:16,
    fontWeight:'600'
  },
  Text2:{
    fontSize:16,
    fontWeight:'600',
    color:'gray',
    top:8
  },
  Text3:{
    fontSize:16,
    fontWeight:'600',
    top:12,
    color:'black'
  },
  Line:{
    height:1.5,
    width:(windowWidth/2)-50,
    backgroundColor:'lightgray',
    left:(windowWidth/2)+25,
    top:25
  },
})
const ItemCollection = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.Line}/>
     <Text style={styles.TextHeader}>New Collection</Text>
     <View style={{height:200,}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          {
            data.map((data,index)=>{
              return(
                <View
                key={index}
                style={styles.BottomSheetImage}
                >
                  <Image
                  source={{uri:data.image}}
                  style={styles.ScrollImage}
                  />
                  <Text style={styles.Text1}>{data.name}</Text>
                  <Text style={styles.Text2}>{data.price}</Text>
                  <Text style={styles.Text3}>{data.des}</Text>
                </View>

              )
            })
          }
        
        </ScrollView>
        </View>
    </View>
  )
}

export default ItemCollection


