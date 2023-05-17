import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import musicPlayerStyle from '../styles/music_player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import SearchBar from './searchBar';

export const OptionBar = ({ data }) => {
  const {navigate} = useNavigation();
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = (text) => {
    //setSearchQuery(text);
    // Aquí puedes realizar una búsqueda en tu fuente de datos
    // y actualizar el estado de los resultados.
    setResults([]);
  };

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={musicPlayerStyle.bottomcontainer}>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Buscar"
            value={"a"}
            onChangeText={handleSearch}
          />
          <FlatList
            data={results}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
          />
          <Button title="Cerrar" onPress={toggleSearch} />
        </View>
      </Modal>
      <View style={musicPlayerStyle.bottomIconWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigate('MainMenu');
          }}>
          <Ionicons name="home-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            toggleSearch
          }>
          <Ionicons name="search-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Register');
          }}>
          <Ionicons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigate('TrackList',{
            data: data
          })
        }}>
          <Ionicons name="musical-notes-outline" size={30} color="white"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigate('MainCrud');}}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
