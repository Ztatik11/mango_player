import React , {useEffect, useState} from "react";
import { Text,TextInput,View,TouchableOpacity,Image,useContext, Alert,Linking } from "react-native";
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
  const {navigate} = useNavigation();
  const state = useSelector(state => state.user);
  const [source, setSource] = useState("");
  const [token, setToken] = useState(null);
  //navigate("Player")
  console.log(state)

  const authConfig = {
    clientId: '25a83015b04940caa7f80dcbd1ca424f',
    // optional clien secret
    clientSecret: '0098ff19ae7e484290624f10dc6368d9',
    redirectUrl: 'com.yourmusic://oauth/',
    scopes: ['playlist-modify-public', 'playlist-modify-private'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },

  }

  const authLogin = async () => {
    try {
      const result = await authorize(authConfig);
      setToken(result.accessToken)
    } catch (e) {
      console.log(e);
      Alert.alert("ERROR al conseguir el token")
      setToken(null)
    }
  };

  useEffect(() => {
    if(token===null) {
      authLogin()
    }
    console.log(token)
  }, []);

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
      <OptionBar/>
    </SafeAreaView>
  )
}
