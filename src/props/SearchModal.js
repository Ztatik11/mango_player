import React, { useState,useEffect } from 'react';
import { Modal, View, TextInput, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import SearchModalStyle from '../styles/SearchModalStyle';
import PlaylistModalStyle from '../styles/PlaylistModalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buscarCanciones } from "../apis/SpotifyCalls";
import { TrackProp } from "../props/trackProp";
import { TrackPropAddPlaylist } from "../props/trackPropAddPlaylist";
import { fetchPlaylist,addSongsToPlaylist } from '../apis/MangoPlayerCalls';
import { AddPlaylistProp } from '../props/addPlaylistProp';
import {Header} from '../props/header';

const SearchModal = ({ toggleSearchModal , isVisible, token }) => {
  const [searchTerm, setSearchTerm] = useState('No Surrender');
  const [showSelectedSongModal, setShowSelectedSongModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [data, setData] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleClose = () => {
    toggleSearchModal();
  };

  const openSelectedSongModal = (songData) => {
    setSelectedSong(songData);
    setShowSelectedSongModal(true);
  };

  const getPlaylistID = async (playlistId) =>{
    await addSongsToPlaylist(playlistId,selectedSong)
  };

  const closeSelectedSongModal = () => {
    setShowSelectedSongModal(false);
  };

  useEffect(() => {
    const fetchCanciones = async ({searchTerm}) => {
      try {
        console.log(token);
        const cancionesResult = await buscarCanciones({ token,searchTerm });
        if (cancionesResult !== null) {
          setData(cancionesResult);
        } else {
          console.error("Error al buscar canciones");
        }
      } catch (error) {
        console.error("Error al buscar canciones:", error);
      }
    }

    const fetchPlaylists = async ({id}) => {
      try {
      const fetchedPlaylists = await fetchPlaylist({ id });
        
        setPlaylists(fetchedPlaylists);
        
      } catch (error) {
        console.error('Error al obtener las playlists:', error);
      }
    };
    fetchPlaylists({ id: 1 })
    fetchCanciones({searchTerm})
  }, [searchTerm]);

  return (
    <View>
      <Modal visible={isVisible} animationType="slide">
      <View style={SearchModalStyle.modalContainer}>
      <Header text={'Busqueda'} />
      <View  style={SearchModalStyle.searchContainer}>
      
      <TextInput
          style={SearchModalStyle.input}
          placeholder="Introduce que quieres buscar..."
          value={searchTerm}
          onChangeText={handleSearch}
      />
      <Ionicons name="search" size={24} color="#FFD369"/>
      </View>
      
    <FlatList 
        data={data}
        renderItem={({item,index}) => {
          return <TrackProp item={item} index={index} data={data} openSelectedSongModal={openSelectedSongModal}/>
        }} />
      <TouchableOpacity onPress={toggleSearchModal} style={SearchModalStyle.exitButton}>
        <Ionicons name="add-circle" size={50} color="#FFD369" style={{ transform: [{ rotate: '45deg' }] }} />
      </TouchableOpacity>
      </View>
    </Modal>
    <Modal visible={showSelectedSongModal} animationType="slide" onRequestClose={closeSelectedSongModal}>
    <Header text={'¿Dónde quieres introducir la canción?'} />
        <View style={SearchModalStyle.modalContainer}>
          {/* Mostrar los datos de la canción seleccionada */}
          <Text style={SearchModalStyle.trackToAdd}>Cancion</Text>
          <TrackPropAddPlaylist item={selectedSong}/>
          <Text style={SearchModalStyle.trackToAdd}>Playlists</Text>
          <FlatList
            data={playlists}
            renderItem={({item, index}) => (
              <AddPlaylistProp
                item={item}
                index={index}
                onPlaylistPress={getPlaylistID}
              />
            )}
            keyExtractor={item => item.ID.toString()}
          />
        </View>
      </Modal>
    </View>
    
    
  );
};

export default SearchModal;