import { View,Text,FlatList } from "react-native";
import React from 'react';
import trackListStyle from "../styles/trackListStyle";
import { TrackProp } from "../props/trackProp";
import { useRoute } from '@react-navigation/native';
import songs from "../models/music";

export const TrackList = () =>{
  const route = useRoute();
  const data = route.params?.data || [];
  console.log("DATOS DE MUSICA"+data)
  return(
    <View style={trackListStyle.container}>
      <View style={trackListStyle.header}>
        <Text style={trackListStyle.logo}>Musica</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={({item,index}) => {
          return <TrackProp item={item} index={index} data={data}/>
        }} />
    </View>
  )
}
