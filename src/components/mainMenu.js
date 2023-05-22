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
import { buscarCanciones } from "../apis/SpotifyCalls";


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
    const fetchCanciones = async () => {
      if (token === null) {
        authLogin();
      } else {
        /*
        const cancionesResult = await buscarCanciones({ token });
        if (cancionesResult !== null) {
          setCanciones(cancionesResult);
        } else {
          // Manejar el error si ocurriera algún problema en la búsqueda de canciones
          console.error("Error al buscar canciones");
        }
        */
      }
    };
  
    fetchCanciones();
  }, [token]);

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
      {token !== null && <OptionBar data={canciones} token={token} />}
    </SafeAreaView>
  )
}
