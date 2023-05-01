import React , {useState} from "react";
import { Text,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";
import SafeAreaViewStyle from '../styles/SafeAreaViewStyle'
import LoginStyle from "../styles/LoginStyle"
import FlatlistCrud from "../crud/FlatlistCrud";


export const mainCrud= () => {
    
    const {navigate} = useNavigation();
    return(
    <SafeAreaView style= {SafeAreaViewStyle.container}>
        <View style={LoginStyle.container}>
            <Text>Selecciona la tbala que desea inspeccionar</Text>
            <TouchableOpacity onPress={() => { navigate("CrudUsers")}} style={LoginStyle.botonIngreso}>
                <Text style={LoginStyle.botonIngresoText}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={LoginStyle.botonIngreso}>
                <Text style={LoginStyle.botonIngresoText}>Canciones</Text>
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
    )
}
