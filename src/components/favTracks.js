import React , {useEffect, useState} from "react";
import { Text,TextInput,View,TouchableOpacity,Image,useContext, Alert,Linking,Modal } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux";
import {launchImageLibrary} from 'react-native-image-picker';
import {authorize} from 'react-native-app-auth';
import {OptionBar} from '../props/optionBar'
import LoginStyle from "../styles/LoginStyle"
import SafeAreaViewStyle from '../styles/SafeAreaViewStyle'
import songs from "../models/music";
import { SafeAreaView } from "react-native-safe-area-context";

export const mainMenu= () => {
    const [songs, setSongs] = useState([]);
    const [likedSongs, setLikedSongs] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/getSongs')
        .then(response => setSongs(response.data))
        .catch(error => console.log(error));
    }, []);
  
    const handleLike = (songId) => {
      if (likedSongs.includes(songId)) {
        setLikedSongs(likedSongs.filter(id => id !== songId));
        axios.delete('http://localhost:3000/postFavTrack')
          .then(response => console.log(response))
          .catch(error => console.log(error));
      } else {
        setLikedSongs([...likedSongs, songId]);
        axios.post(`${API_URL}/favorites`, { songId },)
          .then(response => console.log(response))
          .catch(error => console.log(error));
      }
    };
  
    const renderItem = ({ item }) => {
      const isLiked = likedSongs.includes(item.id);
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
          <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, marginRight: 8 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 12 }}>{item.artist}</Text>
          </View>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <Image source={isLiked ? require('./heart_filled.png') : require('./heart.png')} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      );
    };
  
  return(
    <FlatList
      data={songs}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  )
}
