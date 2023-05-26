import axios from 'axios';

export async function fetchPlaylist({id}) {
    const response = await axios.get('http://192.168.0.23:3000/getPlaylist', {
      ID_Usuario: id,
    });
    console.log(response.data);
    const PlaylistsJson = response.data.map(item => ({
      ID: item.ID,
      Nombre: item.Nombre,
      ID_Usuario: item.ID_Usuario,
      Canciones: item.Playlist_canciones.map((playlist,index) => ({
        id: index+1,
        ID_Playlist: playlist.ID_Playlist,
        ID_Cancion: playlist.ID_Cancion,
        trackid: playlist.Canciones.trackid,
        url: playlist.Canciones.url,
        title: playlist.Canciones.title,
        artist: playlist.Canciones.artist,
        artwork: playlist.Canciones.artwork,
      })),
    }));
    return PlaylistsJson
  }

 export async function deletePlaylist(playListId) {
    try {
      const response = await axios.delete('http://192.168.0.23:3000/deletePlaylist', { data: { id: playListId } });
      Alert.alert("PlayList BORRADO")
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }