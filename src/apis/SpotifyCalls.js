import axios from 'axios';

export const buscarCanciones = async ({token,searchTerm}) => {
    const artistParameters = {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        }
    }
    try {
      if (token === null) {
        return; // Si el token es nulo, no se realiza la llamada a la API
      }
      console.log(artistParameters.headers.Authorization);
      //'https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy&type=track&market=ES&limit=10&include_external=audio'
      //'https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&market=ES&limit=10&include_external=audio'
      const response = await axios.get('https://api.spotify.com/v1/search?q='+searchTerm+'&type=track&market=ES&limit=10&include_external=audio', artistParameters);
      console.log(JSON.stringify(response.data.tracks.items, null, 2));
      const tracks = response.data.tracks.items.map((item,index) => ({
        id: index + 1,
        trackid: item.id,
        url: item.preview_url,
        title: item.name,
        artist: item.artists[0].name,
        artwork: item.album.images[0].url,
      }));
      //const data = JSON.stringify(tracks, null, 2);
      //console.log(data);
      return tracks
    } catch (error) {
      console.error(error);
      return null
    }
};
