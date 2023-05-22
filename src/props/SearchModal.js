import React, { useState,useEffect } from 'react';
import { Modal, View, TextInput, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import SearchModalStyle from '../styles/SearchModalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buscarCanciones } from "../apis/SpotifyCalls";
import { TrackProp } from "../props/trackProp";

const SearchModal = ({ toggleSearchModal , isVisible, token }) => {
  const [searchTerm, setSearchTerm] = useState('No Surrender');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const handleSearch = (text) => {
    setSearchTerm(text);
    // Aquí puedes realizar la búsqueda en la API de Spotify con el término ingresado y actualizar los resultados en el estado "results"
    // Puedes utilizar la función fetch o librerías como axios para realizar la solicitud HTTP
  };

  const handleClose = () => {
    toggleSearchModal(); // Llama a la función toggleSearchModal pasada como prop para cerrar el modal
  };

  useEffect(() => {
    const fetchCanciones = async ({searchTerm}) => {
      try {
        console.log(token);
        const cancionesResult = await buscarCanciones({ token,searchTerm });
        if (cancionesResult !== null) {
          setData(cancionesResult);
        } else {
          // Manejar el caso en que cancionesResult sea null
          console.error("Error al buscar canciones");
        }
      } catch (error) {
        // Manejar el error si ocurre algún problema en la búsqueda de canciones
        console.error("Error al buscar canciones:", error);
      }
    }
    fetchCanciones({searchTerm})
  }, [searchTerm]);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={SearchModalStyle.modalContainer}>
      <View style={SearchModalStyle.header}>
        <Text style={SearchModalStyle.logo}>Busqueda</Text>
      </View>
      <TextInput
          placeholder="Introduce que quieres buscar..."
          value={searchTerm}
          onChangeText={handleSearch}
      />
    <FlatList 
        data={data}
        renderItem={({item,index}) => {
          return <TrackProp item={item} index={index} data={data}/>
        }} />
      <TouchableOpacity onPress={toggleSearchModal} style={SearchModalStyle.exitButton}>
        <Ionicons name="add-circle" size={50} color="#FFD369" style={{ transform: [{ rotate: '45deg' }] }} />
      </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SearchModal;