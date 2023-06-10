import React from "react";
import {Text, View,Image,TouchableOpacity,Dimensions} from 'react-native';
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

const {height,width} = Dimensions.get('window')

export const PlaylistTrackProp= ({item,index,data,onDelete}) => {
  const navigation = useNavigation()

  const handleDelete = () => {
    onDelete(index, item.trackid);
  }

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
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-outline" size={75} color="red"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}