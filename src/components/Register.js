import React , {useState} from "react";
import { Text,TextInput,View,TouchableOpacity, Alert } from "react-native";
import {useNavigation} from "@react-navigation/native"
import DateTimePicker from '@react-native-community/datetimepicker';
import RegisterStyle from "../styles/RegisterStyle";
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

    const [validacion_nombre,setvalidacion_nombre] =useState(false)
    const [validacion_apellido,setvalidacion_apellido] =useState(false)
    const [validacion_correo,setvalidacion_correo] =useState(false)

    const solo_texto = /^$|^[a-zA-ZÁ-ÿ\s]+$/;
    const solo_numero = /^$|^[0-9\s]+$/;
    const formato_correo = /^$|^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z\s]+$/;

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
        Alert.alert("USUARIO CREADO");
        console.log(respuesta.data);
        } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
          // Si hay un mensaje de error específico enviado desde el servidor, mostrarlo al usuario
          Alert.alert("Este usuario ya existe");
        } else {
          // Si el error es de otro tipo, mostrar un mensaje de error genérico
          Alert.alert('Se produjo un error al registrar el usuario');
        }
        }
    };

    function validacion_campo_nombre(nombre){
        if (solo_texto.test(nombre)) {
          console.log("Validacion 1")
          setvalidacion_nombre(true)
          setName(nombre)
        } else {
          setvalidacion_nombre(false)
          setName(nombre)
        }
      }
      
      function validacion_campo_apellido(apellido){
        if (solo_texto.test(apellido)) {
          console.log("Validacion 2")
          setvalidacion_apellido(true)
          setlastName(apellido)
        } else {
          setvalidacion_apellido(false)
          setlastName(apellido)
        }
      }
      
      function validacion_campo_correo(correo){
        if (formato_correo.test(correo)) {
          console.log("Validacion 4")
          setvalidacion_correo(true)
          setEmail(correo)
        } else {
          setvalidacion_correo(false)
          setEmail(correo)
        }
      }
      function validacion_post(){
        if (validacion_nombre==true && validacion_apellido==true && validacion_correo==true) {
            postUser();
        }else{
            Alert.alert("HAS INTRODUCIDO DATOS INCORRECTOS")
        }
      }
    return(
        <View style={RegisterStyle.container}>
            
            <Text style={RegisterStyle.title}>REGISTRATE</Text>
            <TextInput 
                style={RegisterStyle.cuadrotexto_bien}
                value={user}
                onChangeText={(texto) => setUser(texto)}
                placeholder="Usuario"/>
            <TextInput 
                style ={validacion_nombre ? [RegisterStyle.cuadrotexto_bien]:[RegisterStyle.cuadrotexto_mal]}
                value={name}
                onChangeText={nombre=>validacion_campo_nombre(nombre)}
                placeholder="Nombre"/>
            
            <TextInput 
                style={validacion_apellido ? [RegisterStyle.cuadrotexto_bien]:[RegisterStyle.cuadrotexto_mal]}
                value={lastName}
                onChangeText={Apellido=>validacion_campo_apellido(Apellido)}
                placeholder="Apellidos"/>
            <TextInput 
                style={validacion_correo ? [RegisterStyle.cuadrotexto_bien]:[RegisterStyle.cuadrotexto_mal]}
                value={email}
                onChangeText={Correo=>validacion_campo_correo(Correo)}
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
                style={RegisterStyle.cuadrotexto_bien}
                value={password}
                onChangeText={(texto) => setPassword(texto)}
                secureTextEntry={true}
                placeholder="Clave"/>
            <TouchableOpacity onPress={()=>validacion_post()} style={RegisterStyle.botonIngreso}>
                <Text style={RegisterStyle.botonIngresoText}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate("Login")}>
                <Text style={{color: "#FFD369"}}>Ya tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}

