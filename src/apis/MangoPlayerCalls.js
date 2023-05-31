import axios from 'axios';
import {Alert} from 'react-native';

export async function fetchPlaylist({ID_Usuario}) {
  const response = await axios.get('http://192.168.0.23:3000/getPlaylist', {
    params: {
      ID_Usuario: ID_Usuario,
    },
  });
  console.log(response.data);
  const PlaylistsJson = response.data.map(item => ({
    ID: item.ID,
    Nombre: item.Nombre,
    ID_Usuario: item.ID_Usuario,
    Canciones: item.Playlist_canciones.map((playlist, index) => ({
      id: index + 1,
      ID_Playlist: playlist.ID_Playlist,
      ID_Cancion: playlist.ID_Cancion,
      trackid: playlist.Canciones.trackid,
      url: playlist.Canciones.url,
      title: playlist.Canciones.title,
      artist: playlist.Canciones.artist,
      artwork: playlist.Canciones.artwork,
    })),
  }));
  return PlaylistsJson;
}

export async function addPlaylist(playListName, idUsuario) {
  try {
    const response = await axios.post('http://192.168.0.23:3000/postPlaylist', {
      Nombre: playListName,
      ID_Usuario: idUsuario,
    });

    if (response.status === 200) {
      console.log('Nueva playlist creada:', response.data);
      return response.data;
    } else {
      console.log('Error al crear la playlist:', response.data);
      return null;
    }
  } catch (error) {
    console.log('Error en la llamada a la API:', error);
    throw new Error('Error en la llamada a la API');
  }
}
export async function addSongsToPlaylist(playlistId,track) {
  try {
    console.log('He entrado dentro');
    const response = axios.post(
      'http://192.168.0.23:3000/postPlaylistContent',
      {ID_Playlist: playlistId, Canciones: track},
    );
    console.log(response.data);
  } catch (error) {
    console.log('Error en la llamada a la API:', error);
    throw new Error('Error en la llamada a la API');
  }
}

export async function deletePlaylist(playListId) {
  try {
    const response = await axios.delete(
      'http://192.168.0.23:3000/deletePlaylist',
      {data: {id: playListId}},
    );
    Alert.alert('PlayList BORRADO');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTrack(trackId,track) {
  try {
    const response = await axios.delete(
      'http://192.168.0.23:3000/deletePlaylistSong',
      {
        playListId: trackId,
        track: track,
      }
    );
    Alert.alert('Cancion BORRADA');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}