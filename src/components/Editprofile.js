import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import{updateUser} from '../apis/MangoPlayerCalls'
import {editProfileStyle} from '../styles/EditprofileStyle';
import axios from "axios";
import { Header } from '../props/header';

export const EditProfile = () => {
  const [ID, setID] = useState();
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [dateText, setdateText] = useState('');

  const [validacion_nombre, setvalidacion_nombre] = useState(true);
  const [validacion_apellido, setvalidacion_apellido] = useState(true);
  const [validacion_correo, setvalidacion_correo] = useState(true);

  const solo_texto = /[a-zA-ZÁ-ÿ\s]+$/;
  const solo_numero = /[0-9\s]+$/;
  const formato_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z\s]+$/;

  useEffect(() => {
    if (route.params && route.params.user) {
      const { ID, Nombre, Apellidos, Email, Fecha_nacimiento } = route.params.user;
      setID(ID);
      setName(Nombre);
      setlastName(Apellidos);
      setEmail(Email);
      setDate(new Date(Fecha_nacimiento));
      setdateText(new Date(Fecha_nacimiento).toLocaleDateString());
    }
  }, [route.params]);

  const stateDatePicker = () => {
    if (datePickerVisible == false) {
      setDatePickerVisible(true);
    } else {
      setDatePickerVisible(false);
    }
  };

  const handleConfirm = (event, date) => {
    setDate(date);
    setdateText(date.toLocaleDateString());
    stateDatePicker();
  };

  function validacion_post() {
    if (
      validacion_nombre == true &&
      validacion_apellido == true &&
      validacion_correo == true
    ) {
      updateUser(ID,name,lastName,email,date);
    } else {
      Alert.alert('HAS INTRODUCIDO DATOS INCORRECTOS');
    }
  }

  function validacion_campo_nombre(nombre) {
    if (solo_texto.test(nombre)) {
      console.log('Validacion 1');
      setvalidacion_nombre(true);
      setName(nombre);
    } else {
      setvalidacion_nombre(false);
      setName(nombre);
    }
  }

  function validacion_campo_apellido(apellido) {
    if (solo_texto.test(apellido)) {
      console.log('Validacion 2');
      setvalidacion_apellido(true);
      setlastName(apellido);
    } else {
      setvalidacion_apellido(false);
      setlastName(apellido);
    }
  }

  function validacion_campo_correo(correo) {
    if (formato_correo.test(correo)) {
      console.log('Validacion 4');
      setvalidacion_correo(true);
      setEmail(correo);
    } else {
      setvalidacion_correo(false);
      setEmail(correo);
    }
  }

  return (
    <View style={editProfileStyle.container}>
      <View style={{alignItems: 'center'}}>
        <Header text={'Editar usuario'}/>
        <View></View>
        <TouchableOpacity onPress={() => {}}>
          <View style={editProfileStyle.imageView}>
            <ImageBackground
              source={{
                uri: 'https://m.media-amazon.com/images/I/814Rfvj3myL._SL1200_.jpg',
              }}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 15}}></ImageBackground>
          </View>
        </TouchableOpacity>
        <Text style={editProfileStyle.username}>Ztatik11</Text>
      </View>
      <View style={{padding:20}}>
      <View style={validacion_nombre ? [editProfileStyle.cuadrotexto_bien]:[editProfileStyle.cuadrotexto_mal]}>
        <TextInput
          placeholder="First name"
          placeholderTextColor="#C0B9B9"
          onChangeText={texto => validacion_campo_nombre(texto)}
        />
      </View>
      <View style={validacion_apellido ? [editProfileStyle.cuadrotexto_bien]:[editProfileStyle.cuadrotexto_mal]}>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#C0B9B9"
          onChangeText={texto => validacion_campo_apellido(texto)}
        />
      </View>
      <View style={validacion_correo ? [editProfileStyle.cuadrotexto_bien]:[editProfileStyle.cuadrotexto_mal]}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#C0B9B9"
          onChangeText={texto => validacion_campo_correo(texto)}
        />
      </View>
      <View style={editProfileStyle.form}>
        <Text>Fecha de nacimiento: {dateText}</Text>
        <TouchableOpacity
          style={editProfileStyle.dateButton}
          onPress={stateDatePicker}>
          <Text>Selecciona</Text>
          {datePickerVisible && (
            <DateTimePicker value={date} mode="date" onChange={handleConfirm} />
          )}
        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity
        style={editProfileStyle.submitButton}
        onPress={validacion_post}>
        <Text style={editProfileStyle.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};
