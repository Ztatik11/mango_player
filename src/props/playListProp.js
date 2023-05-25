import React , {useState,useEffect} from "react";
import {Text, View,FlatList,Image,TouchableOpacity,Alert,Dimensions} from 'react-native';
import trackStyle from "../styles/trackPropStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

const {height,width} = Dimensions.get('window')

export const TrackProp= ({item,index,data}) => {
  const navigation = useNavigation()
  return(
      <TouchableOpacity style={trackPropStyle.container} onPress={()=>{
        navigation.navigate("TrackList",{
          song: item,
          index: index,
          data: item
        })
      }}>
        <Ionicons name="musical-notes-outline" size={75} color="red"/>
        <View style={trackPropStyle.nameView}>
          <Text style={trackPropStyle.name}>{item.Nombre}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={75} color="red"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}