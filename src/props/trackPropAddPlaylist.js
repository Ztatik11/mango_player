import React from "react";
import {Text, View,Image,TouchableOpacity,Dimensions} from 'react-native';
import trackPropStyle from "../styles/trackPropStyle";

const {height,width} = Dimensions.get('window')

export const TrackPropAddPlaylist= ({item}) => {

  return(
      <TouchableOpacity style={trackPropStyle.container} onPress={()=>{}}>
        <Image source={{uri: item.artwork}} style={trackPropStyle.songImage}/>
        <View style={trackPropStyle.nameView}>
          <Text style={trackPropStyle.name}>{item.title}</Text>
          <Text style={trackPropStyle.name}>{item.artist}</Text>
        </View>
      </TouchableOpacity>
  )
}