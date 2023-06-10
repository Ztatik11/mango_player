import React from "react";
import {Text, View,TouchableOpacity,Dimensions} from 'react-native';
import PlaylistPropStyle from "../styles/PlaylistPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"


export const PlayListProp= ({item,index, onDelete }) => {
  const navigation = useNavigation()
  const { ID ,Nombre, Canciones } = item;
  const numCanciones = Canciones?.length || 0;

  const handleDelete = () => {
    onDelete(index,ID); // Llamar a la función onDelete con el índice del elemento
  };

  return(
      <TouchableOpacity style={PlaylistPropStyle.container} onPress={()=>{
        navigation.navigate("TrackList",{
          data: item.Canciones
        })
      }}>
        <Ionicons style={PlaylistPropStyle.listIcon} name="musical-notes-outline" size={75} color="red"/>
        <View style={PlaylistPropStyle.nameView}>
          <Text style={PlaylistPropStyle.name}>{Nombre}</Text>
          <Text style={PlaylistPropStyle.tracks}>Canciones: {numCanciones}</Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-outline" style={PlaylistPropStyle.deleteIcon} size={50} color="red"/>
        </TouchableOpacity>
      </TouchableOpacity>
  )
}