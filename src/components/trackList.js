import { View,Text,FlatList } from "react-native";
import React from 'react';
import trackListStyle from "../styles/trackListStyle";
import songs from "../models/music";
import { TrackProp } from "../props/trackProp";

export const TrackList = () =>{
  return(
    <View style={trackListStyle.container}>
      <View style={trackListStyle.header}>
        <Text style={trackListStyle.logo}>Musica</Text>
      </View>
      <FlatList 
        data={songs}
        renderItem={({item,index}) => {
          return <TrackProp item={item} index={index} data={songs}/>
        }} />
    </View>
  )
}
