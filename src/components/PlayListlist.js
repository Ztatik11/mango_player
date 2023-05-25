import { View,Text,FlatList } from "react-native";
import React , {useEffect, useState} from "react";
import trackListStyle from "../styles/trackListStyle";
import { TrackProp } from "../props/trackProp";
import { useRoute } from '@react-navigation/native';
import { Header } from '../props/header';
import axios from 'axios';



export const PlayListlist = () => {
    const [playlists, setPlaylists] = useState([]);
    const route = useRoute();

useEffect(() => {
  async function fetchPlaylist() {
    const { id } = route.params;
    console.log(id)
    const response = await axios.get('http://192.168.0.23:3000/getPlaylist',{ID_Usuario: id});
    console.log(response.data)
    const transformedJson = response.data.map(item => ({
      ID: item.ID,
      Nombre: item.Nombre,
      ID_Usuario: item.ID_Usuario,
      Canciones: item.Playlist_canciones.map(playlist => ({
        id: playlist.ID,
        trackid: playlist.Canciones.trackid,
        url: playlist.Canciones.url,
        title: playlist.Canciones.title,
        artist: playlist.Canciones.artist,
        artwork: playlist.Canciones.artwork
      }))
    }));
    
    console.log(JSON.stringify(transformedJson, null, 2));
    setPlaylists(response.data);
  }

  fetchPlaylist();
}, []);

  return (
    <View style={trackListStyle.container}>
      <Header text={'Lista de Playlists'}/>
      <FlatList 
        data={playlists}
        renderItem={({item, index}) => {
          return <TrackProp item={item} index={index}/>
        }} />
    </View>
  );
}
