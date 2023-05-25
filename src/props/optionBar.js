import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import musicPlayerStyle from '../styles/music_player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import SearchModal from './SearchModal';


export const OptionBar = ({ data, token }) => {
  const {navigate} = useNavigation();
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchModalVisible(!isSearchModalVisible);
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
      <SearchModal
        toggleSearchModal={toggleSearchModal}
        isVisible={isSearchModalVisible}
        token={token}
      />
      <View style={musicPlayerStyle.bottomIconWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigate('MainMenu');
          }}>
          <Ionicons name="home-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleSearchModal}>
          <Ionicons name="search-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('Register');
          }}>
          <Ionicons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigate('PlayListlist', {
            id: 1
          })
        }}>
          <Ionicons name="musical-notes-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigate('MainCrud');}}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};