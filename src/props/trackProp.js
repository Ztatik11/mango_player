import React , {useState,useEffect} from "react";
import {Text, View,FlatList,Image,TouchableOpacity,Alert,Dimensions} from 'react-native';
import trackStyle from "../styles/trackPropStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

const {height,width} = Dimensions.get('window')

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
          <Ionicons name="list-outline" size={75} color="red"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}