import React , {useState,useEffect} from "react";
import {Text, View,FlatList,Image,TouchableOpacity,Alert,Dimensions} from 'react-native';
import trackStyle from "../styles/trackPropStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import trackPropStyle from "../styles/trackPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"

const {height,width} = Dimensions.get('window')

export const PlayListProp= ({item,index, onDelete }) => {
  const navigation = useNavigation()
  const { ID,Nombre, Canciones } = item;
  const numCanciones = Canciones.length;

  const handleDelete = () => {
    onDelete(index,ID); // Llamar a la función onDelete con el índice del elemento
  };

  return(
      <TouchableOpacity style={trackPropStyle.container} onPress={()=>{
        navigation.navigate("TrackList",{
          data: item.Canciones
        })
      }}>
        <Ionicons name="musical-notes-outline" size={75} color="red"/>
        <View style={trackPropStyle.nameView}>
          <Text style={trackPropStyle.name}>{Nombre}</Text>
          <Text style={trackPropStyle.name}>{numCanciones}</Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-outline" size={75} color="red"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}