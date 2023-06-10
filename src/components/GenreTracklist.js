import { View,FlatList } from "react-native";
import React, {useState} from 'react';
import trackListStyle from "../styles/trackListStyle";
import { TrackProp } from "../props/trackProp";
import { useRoute } from '@react-navigation/native';
import { Header } from '../props/header';




export const GenreTrackList = () =>{
  const route = useRoute();
  const data = route.params?.data || [];
  const [Tracks, setTracks] = useState(route.params.data);

  const handleAddPlaylist = () => {
    openSelectedSongModal(item)
  };

  return(
    <View style={trackListStyle.container}>
      <Header text={route.params.header}/>
      <FlatList 
        data={Tracks}
        renderItem={({item,index}) => {
          return <TrackProp item={item} index={index} data={data} openSelectedSongModal={handleAddPlaylist}/>
        }} />
    </View>
  )
}