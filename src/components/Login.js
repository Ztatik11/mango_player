import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import LoginStyle from "../styles/LoginStyle"
export const Login= () => {
    const {navigate} = useNavigation();
    return(
        <View style={LoginStyle.container}>
            <Text>LOGIN</Text>
            <TextInput style={LoginStyle.input} placeholder="Email"/>
            <TextInput style={LoginStyle.input} placeholder="Clave"/>
            <TouchableOpacity onPress={()=>navigate("Player")} style={LoginStyle.botonIngreso}>
                <Text style={LoginStyle.botonIngresoText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate("Register")}>
                <Text style={{color: "blue"}}>No tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}