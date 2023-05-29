import React , {useState,useEffect} from "react";
import {Text, View,FlatList,Image,TouchableOpacity,Alert,Dimensions} from 'react-native';
import trackStyle from "../styles/trackPropStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

const {height,width} = Dimensions.get('window')

export const TrackPropAddPlaylist= ({item}) => {
  const navigation = useNavigation()

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