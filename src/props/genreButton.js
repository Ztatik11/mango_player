import { View,Text,FlatList,TouchableOpacity,Image } from "react-native";
import React, {useState} from 'react';
import GenreButtonStyle from "../styles/GenreButtonStyle";
import { PlaylistTrackProp } from "../props/playlisttrackProp";
import { useRoute } from '@react-navigation/native';
import songs from "../models/music";
import { Header } from '../props/header';
import { deleteTrack } from '../apis/MangoPlayerCalls';
import {buscarCanciones} from '../apis/SpotifyCalls'
import {useNavigation} from '@react-navigation/native';


export const GenreButton = ({ imageLink, header, genre,token }) =>{
  const route = useRoute();
  const { navigate } = useNavigation();
  console.log(header + token);

  const fetchCanciones = async ({ token, searchTerm }) => {
    try {
      console.log(token);
      const cancionesResult = await buscarCanciones({ token, searchTerm });
      return cancionesResult;
    } catch (error) {
      // Manejar el error si ocurre algún problema en la búsqueda de canciones
      console.error("Error al buscar canciones:", error);
      return null;
    }
  };

  const handlePress = async () => {
    const data = await fetchCanciones({ token: token, searchTerm: genre });

    navigate('GenretrackList', {
      data: data,
      header: header
    });
  };

  return (
    <TouchableOpacity
      style={GenreButtonStyle.cell}
      onPress={handlePress}
    >
      <Image source={{ uri: imageLink }} style={GenreButtonStyle.image} />
      <Text style={GenreButtonStyle.title}>{genre}</Text>
    </TouchableOpacity>
  );
}