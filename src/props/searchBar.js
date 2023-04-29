import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Aquí puedes hacer la llamada a una API para obtener los resultados de la búsqueda
    //setSearchResults([...]);
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View>
        <TextInput
          placeholder="Buscar canciones..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <TextInput
            placeholder="Buscar canciones..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Text>Buscar</Text>
          </TouchableOpacity>
          <View>
            {/* Aquí se muestran los resultados de la búsqueda */}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SearchBar;