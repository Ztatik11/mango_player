import React , {useState} from "react";
import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/reducers/user";
import LoginStyle from "../styles/LoginStyle"
export const Login= () => {
    const {navigate} = useNavigation();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const LoginUser = async () =>{
        try {
        const response = await axios.post("http://192.168.0.23:3000/login", {
            Usuario :user,
            Clave :password,
        });
        const user = await response.json();
            dispatch(loginSuccess({ type: 'LOGIN_SUCCESS', payload: {user} }));
        } catch (error) {
            dispatch(loginFailure({ type: 'LOGIN_FAILURE', payload: {error} }));
        }
    }
    
    //navigate("Player")
    return(
        <View style={LoginStyle.container}>
            <Text>LOGIN</Text>
            <TextInput style={LoginStyle.input} placeholder="Email" onChangeText={(usuario) => setUser(usuario)}/>
            <TextInput style={LoginStyle.input} placeholder="Clave" onChangeText={(clave) => setPassword(clave)}/>
            <TouchableOpacity onPress={()=>LoginUser} style={LoginStyle.botonIngreso} >
                <Text style={LoginStyle.botonIngresoText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate("Register")}>
                <Text style={{color: "blue"}}>No tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}
