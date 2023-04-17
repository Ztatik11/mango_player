import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useDispatch } from 'react-redux';
import LoginStyle from "../styles/LoginStyle"
export const Login= () => {
    const {navigate} = useNavigation();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const LOGIN_REQUEST = 'LOGIN_REQUEST';
    const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    const LOGIN_FAILURE = 'LOGIN_FAILURE';
    
    const loginRequest = () => ({
      type: LOGIN_REQUEST,
    });
    
    const loginSuccess = (user) => ({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    
    const loginFailure = (error) => ({
      type: LOGIN_FAILURE,
      payload: error,
    });



    const LoginUser = async () => {
        try {
        const respuesta = await axios.post("http://192.168.0.23:3000/login", {
            Usuario :user,
            Clave :password,
        });
        const user = await response.json();
        if (results.length === 0) {
            Alert.alert("NO EXISTE NINGUN USUARIO CON ESA CREDENCIALES")
            dispatch(loginFailure('Invalid username or password'));
        }else{
            const user = results[0];
            dispatch(loginSuccess(user));
        }
        console.log(respuesta.data);
        } catch (error) {
            dispatch(loginFailure(error.message));
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
