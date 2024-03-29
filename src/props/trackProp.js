import React from "react";
import {Text, View,Image,TouchableOpacity,Alert,Dimensions} from 'react-native';
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

export const TrackProp= ({item,index,data,openSelectedSongModal}) => {
  const navigation = useNavigation()

  const handleAddPlaylist = () => {
    openSelectedSongModal(item)
  };

  return(
      <TouchableOpacity style={trackPropStyle.container} onPress={()=>{
        navigation.navigate("Player",{
          song: item,
          index: index,
          data: data
        })
      }}>
        <Image source={{uri: item.artwork}} style={trackPropStyle.songImage}/>
        <View style={trackPropStyle.nameView}>
          <Text style={trackPropStyle.name}>{item.title}</Text>
          <Text style={trackPropStyle.name}>{item.artist}</Text>
        </View>
        <TouchableOpacity onPress={handleAddPlaylist}>
          <Ionicons name="list-outline" size={75} color="#FFD369"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}