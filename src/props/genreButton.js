import { View,Text,FlatList,TouchableOpacity,Image } from "react-native";
import React, {useState} from 'react';
import GenreButtonStyle from "../styles/GenreButtonStyle";
import { PlaylistTrackProp } from "../props/playlisttrackProp";
import { useRoute } from '@react-navigation/native';
import songs from "../models/music";
import { Header } from '../props/header';
import { deleteTrack } from '../apis/MangoPlayerCalls';



export const GenreButton = ({ imageLink, header, genre }) =>{
  const route = useRoute();
  const data = route.params?.data || [];

  return(
    <TouchableOpacity
        style={GenreButtonStyle.cell}
        onPress={() => console.log('Button clicked')}
      >
        <Image source={{ uri: imageLink }} style={GenreButtonStyle.image} />
        <Text style={GenreButtonStyle.title}>{genre}</Text>
      </TouchableOpacity>
  )
}