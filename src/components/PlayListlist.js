import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import trackListStyle from '../styles/trackListStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PlayListProp } from '../props/playListProp';
import { PlaylistCreation } from '../props/addPlaylist';
import CreateNewPlaylistStyle from "../styles/CreateNewPlaylistStyle";
import {useRoute} from '@react-navigation/native';
import {Header} from '../props/header';
import { fetchPlaylist } from '../apis/MangoPlayerCalls';
import { deletePlaylist } from '../apis/MangoPlayerCalls';

export const PlayListlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const route = useRoute();

  useEffect(() => {
    async function fetchData() {
      const { id } = route.params;
      const fetchedPlaylists = await fetchPlaylist({ id });
      setPlaylists(fetchedPlaylists);
      console.log(JSON.stringify(fetchedPlaylists, null, 2));
    }
    fetchData();
  }, []);

  const handlePlaylistCreate = (newPlaylist) => {
    // Actualizar la lista de playlists agregando la nueva playlist
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const handleDeletePlaylist = (index,idplaylist) => {
    const updatedPlaylists = [...playlists];
    deletePlaylist(idplaylist)
    updatedPlaylists.splice(index, 1);
    setPlaylists(updatedPlaylists);
  };

  return (
    <View style={trackListStyle.container}>
      <Header text={'Lista de Playlists'} />
      <PlaylistCreation onPlaylistCreate={handlePlaylistCreate} />
      <FlatList
        data={playlists}
        renderItem={({item, index}) => {
          return <PlayListProp item={item} index={index} onDelete={handleDeletePlaylist} />;
        }}
      />
    </View>
  );
};
