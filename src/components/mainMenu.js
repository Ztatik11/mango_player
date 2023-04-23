import React , {useState} from "react";
import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux";
import LoginStyle from "../styles/LoginStyle"

export const mainMenu= () => {
    const {navigate} = useNavigation();
    const state = useSelector(state => state.user);
    //navigate("Player")
    console.log(state)
    return(
        
        <View style={LoginStyle.container}>
            <Text>MENU PRINCIPAL</Text>
            <Text>MI NOMBRE ES ******** Y MI CORREO ES *********</Text>
            <TouchableOpacity onPress={()=>navigate("Login")} style={LoginStyle.botonIngreso} >
                <Text style={LoginStyle.botonIngresoText}>Cerrar sesion</Text>
            </TouchableOpacity>
        </View>
    )
}
