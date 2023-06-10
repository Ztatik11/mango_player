import React from "react";
import {Text, View,TouchableOpacity,Dimensions} from 'react-native';
import PlaylistPropStyle from "../styles/PlaylistPropStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height,width} = Dimensions.get('window')

export const AddPlaylistProp= ({item,onPlaylistPress}) => {
  const { ID ,Nombre, Canciones } = item;
  const numCanciones = Canciones?.length || 0;

  const handlePress = () => {
    onPlaylistPress(ID);
  };

  return(
      <TouchableOpacity style={PlaylistPropStyle.container} onPress={() => handlePress()}>
        <Ionicons style={PlaylistPropStyle.listIcon} name="musical-notes-outline" size={75} color="red"/>
        <View style={PlaylistPropStyle.nameView}>
          <Text style={PlaylistPropStyle.name}>{Nombre}</Text>
          <Text style={PlaylistPropStyle.tracks}>Canciones: {numCanciones}</Text>
        </View>
      </TouchableOpacity>
  )
}