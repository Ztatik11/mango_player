import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addPlaylist } from '../apis/MangoPlayerCalls';
import CreateNewPlaylistStyle from "../styles/CreateNewPlaylistStyle";

export const PlaylistCreation = ({ onPlaylistCreate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = async () => {
    try {
        const newPlaylist = await addPlaylist(playlistName, 1);
    
        if (newPlaylist) {
          onPlaylistCreate(newPlaylist);
          setPlaylistName('');
          setModalVisible(false);
        }
      } catch (error) {
        console.error('Error creating playlist:', error.message);
        Alert.alert('Error', error.message);
      }
  };

  return (
    <View>
      <TouchableOpacity style={CreateNewPlaylistStyle.container} onPress={()=>{setModalVisible(true)}}>
        <Ionicons name="add-outline" size={75} color="red" marginLeft={14}/>
        <View style={CreateNewPlaylistStyle.nameView}>
          <Text style={CreateNewPlaylistStyle.name}>Crear nueva playlist</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Nueva Playlist</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre de la playlist"
            value={playlistName}
            onChangeText={setPlaylistName}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleCreatePlaylist}>
            <Text style={styles.buttonText}>Agregar Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});