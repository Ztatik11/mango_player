import React , {useEffect, useState} from "react";
import { Text,TextInput,View,TouchableOpacity,Image,useContext, Alert,Linking,FlatList } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux";
import {launchImageLibrary} from 'react-native-image-picker';
import {authorize} from 'react-native-app-auth';
import {OptionBar} from '../props/optionBar'
import LoginStyle from "../styles/LoginStyle"
import SafeAreaViewStyle from '../styles/SafeAreaViewStyle'
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";


export const mainMenu= () => {
  const {navigate} = useNavigation();
  const state = useSelector(state => state.user);
  const [source, setSource] = useState("");
  const [token, setToken] = useState(null);
  const [canciones, setCanciones] = useState([]);
  //console.log(state)

  const authConfig = {
    clientId: '25a83015b04940caa7f80dcbd1ca424f',
    // optional clien secret
    clientSecret: '0098ff19ae7e484290624f10dc6368d9',
    redirectUrl:"com.mangoplayer://callback",
    scopes: ['playlist-modify-public', 'playlist-modify-private','user-read-email', 'user-read-private'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    }
  }

  const handleSpotifyAuth = async () => {
    
      const result = await authorize(authConfig);
      console.log('Token de acceso:', result.accessToken);
      console.log('Token de actualización:', result.refreshToken);
      if (result.accessToken) {
        setToken(result.accessToken);
      } else {
        Alert.alert("ERROR al conseguir el token");
      }
      // Realiza acciones adicionales con los tokens de acceso y actualización obtenidos
  
  };

  const authLogin = async () => {
    handleSpotifyAuth()
  };

  useEffect(() => {
    const buscarArtista = async () => {
      try {
        if (token === null) {
          return; // Si el token es nulo, no se realiza la llamada a la API
        }
  
        console.log(artistParameters.headers.Authorization);
        const response = await axios.get('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&market=ES&limit=10&include_external=audio', artistParameters);
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
        setCanciones(tracks);
        //console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (token === null) {
      authLogin();
    } else {
      buscarArtista(); // Realiza la llamada a la API cuando el token se actualiza correctamente
    }
  }, [token]);

  const artistParameters = {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    }
  }

  const select_image = async () =>{
    const resource = await launchImageLibrary('photo')
    console.log(resource.assets[0].uri)
    console.log(resource)
    setSource(resource.assets[0].uri);
  }

  const imageSelected = () => {
    if (source) {
      return <Image source={{ uri: source }} style={{ width: 200, height: 200 }} />;
    } else {
      return null;
    }
  }
  return(
    <SafeAreaView style= {SafeAreaViewStyle.container}>
      <View style={LoginStyle.container}>
          <Text>MENU PRINCIPAL</Text>
          <Text>MI NOMBRE ES ******** Y MI CORREO ES *********</Text>
          <TouchableOpacity onPress={()=>navigate("Player")} style={LoginStyle.botonIngreso} >
              <Text style={LoginStyle.botonIngresoText}>Player</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigate("Login")} style={LoginStyle.botonIngreso} >
              <Text style={LoginStyle.botonIngresoText}>Cerrar sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>select_image()} style={LoginStyle.botonIngreso} >
              <Text style={LoginStyle.botonIngresoText}>AÑADIR IMAGEN</Text>
          </TouchableOpacity>
          {imageSelected()}
      </View>
      <OptionBar data={canciones}/>
    </SafeAreaView>
  )
}
