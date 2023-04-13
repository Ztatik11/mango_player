import React , {useState} from "react";
import { Text,TextInput,View,TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import DateTimePicker from '@react-native-community/datetimepicker';
import LoginStyle from "../styles/LoginStyle"
import axios from "axios";

export const Register= () => {
    const {navigate} = useNavigation();
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [dateText, setdateText] = useState("");

      const stateDatePicker = () => {
        if (datePickerVisible==false){
            setDatePickerVisible(true);
        }else{
            setDatePickerVisible(false);
        }
      };
    
      const handleConfirm = (event,date) => {
        setDate(date);
        setdateText(date.toLocaleDateString())
        stateDatePicker();
      };

    const postUser = async () => {
        try {
        const respuesta = await axios.post("http://192.168.0.23:3000/postUser", {
            Usuario :user,
            Nombre :name,
            Apellidos :lastName,
            Email :email,
            Clave : password,
            Fecha_nacimiento: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
        });
        console.log(respuesta.data);
        } catch (error) {
        console.error(error);
        }
    };

    return(
        <View style={LoginStyle.container}>
            
            <Text>Register</Text>
            <TextInput 
                style={LoginStyle.input}
                value={user}
                onChangeText={(texto) => setUser(texto)}
                placeholder="Usuario"/>
            <TextInput 
                style={LoginStyle.input}
                value={name}
                onChangeText={(texto) => setName(texto)}
                placeholder="Nombre"/>
            
            <TextInput 
                style={LoginStyle.input}
                value={lastName}
                onChangeText={(texto) => setlastName(texto)}
                placeholder="Apellidos"/>
            <TextInput 
                style={LoginStyle.input}
                value={email}
                onChangeText={(texto) => setEmail(texto)}
                placeholder="Email"/>
            <TouchableOpacity onPress={stateDatePicker}>
                <Text>Fecha de nacimiento: {dateText}</Text>
                {datePickerVisible && (
                    <DateTimePicker
                    value={date}
                    mode="date"
                    onChange={handleConfirm}
                />
                )}
                
            </TouchableOpacity>
            <TextInput 
                style={LoginStyle.input}
                value={password}
                onChangeText={(texto) => setPassword(texto)}
                secureTextEntry={true}
                placeholder="Clave"/>
            <TouchableOpacity onPress={postUser} style={LoginStyle.botonIngreso}>
                <Text style={LoginStyle.botonIngresoText}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate("Login")}>
                <Text style={{color: "blue"}}>Ya tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}

