import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import musicPlayerStyle from '../styles/OptionBarStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {User} from '../models/Users'
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
    <View style={musicPlayerStyle.container}>
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
          <Ionicons name="home-outline" size={30} color="#FFD369" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleSearchModal}>
          <Ionicons name="search-outline" size={30} color="#FFD369" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigate('PlayListlist', {
            id: User.ID
          })
        }}>
          <Ionicons name="musical-notes-outline" size={30} color="#FFD369" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigate('Profile', { user: User });}}>
          <Ionicons name="person-circle-outline" size={30} color="#FFD369" />
        </TouchableOpacity>
      </View>
    </View>
  );
};