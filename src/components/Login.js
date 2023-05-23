import React , {useState} from "react";
import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, loginFailure} from "../store/reducers/user";
import axios from 'axios';
import LoginStyle from "../styles/LoginStyle"
import SafeAreaViewStyle from '../styles/SafeAreaViewStyle'
import { SafeAreaView } from "react-native-safe-area-context";
export const Login= () => {
    const {navigate} = useNavigation();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const user = useSelector(state => state.login.user);
    const dispatch = useDispatch();

    const LoginUser = async () =>{
        console.log(correo+" "+password)
        try {
            const user = await axios.post("http://192.168.0.23:3000/login", {
                Email: correo,
                Clave: password
            });
            console.log(user.data);
            dispatch(loginSuccess({payload:user.data}));
        } catch (error) {
            dispatch(loginFailure({payload:error.message}));
        }
    }

    const login = () =>{
        console.log("Entra en login")
        LoginUser()
        navigate("MainMenu")
    }
    
    //navigate("Player")
    return(
    <SafeAreaView style= {SafeAreaViewStyle.container}>
        <View style={LoginStyle.container}>
            <Text>LOGIN</Text>
            <TextInput style={LoginStyle.input} placeholder="Email" onChangeText={correo => setCorreo(correo+"")}/>
            <TextInput style={LoginStyle.input} placeholder="Clave" onChangeText={clave => setPassword(clave+"")}/>
            <TouchableOpacity onPress={()=>{login()}} style={LoginStyle.botonIngreso} >
                <Text style={LoginStyle.botonIngresoText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate("Register")}>
                <Text style={{color: "blue"}}>No tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}
