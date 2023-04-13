import React , {useState} from "react";
import { StyleSheet } from "react-native"; 




const frutas = StyleSheet.create({
    contenedor_fruta:{
      flex: 1,
      justifyContent: 'center' ,
      padding: 20, margin: 10,
      backgroundColor: '#50F874',
      borderWidth: 5,
    },
    texto_fruta:{
      flex: 1,
      textAlign:'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      float: "right" 
    },
    imagen_fruta:{
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      borderWidth: 3,
      borderColor: "#DB6157",
      float: "left"
    }
});    
export default frutas;
