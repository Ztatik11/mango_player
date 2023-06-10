import { View,FlatList } from "react-native";
import React, {useState} from 'react';
import trackListStyle from "../styles/trackListStyle";
import { PlaylistTrackProp } from "../props/playlisttrackProp";
import { useRoute } from '@react-navigation/native';
import { Header } from '../props/header';
import { deleteTrack } from '../apis/MangoPlayerCalls';



export const TrackList = () =>{
  const route = useRoute();
  const data = route.params?.data || [];
  const [Tracks, setTracks] = useState(data);

  const handleDeleteTrack = (index,trackid) => {
    const updatedTracks = [...Tracks];
    deleteTrack(trackid,data.ID_Playlist)
    updatedTracks.splice(index, 1);
    setTracks(updatedTracks);
  };

  return(
    <View style={trackListStyle.container}>
      <Header text={'Playlist'}/>
      <FlatList 
        data={Tracks}
        renderItem={({item,index}) => {
          return <PlaylistTrackProp item={item} index={index} data={data} onDelete={handleDeleteTrack}/>
        }} />
    </View>
  )
}
