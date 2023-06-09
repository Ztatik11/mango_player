import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileStyle from '../styles/ProfileStyle';


  export const Profile = () => {
    const isAdmin = true; // Cambia a false si el usuario no es administrador
    const {navigate} = useNavigation();
  
    const handleLogout = () => {
      // Lógica para cerrar sesión
      navigate('Login')
    };
  
    const handleEditProfile = () => {
      // Lógica para editar el perfil
      navigate('EditProfile')
    };
  
    const handleCRUD = () => {
      // Lógica para navegar a la pantalla CRUD (solo para administradores)
      navigate('CrudUsers')
    };
  
    return (
      <View style={ProfileStyle.container}>
        <TouchableOpacity onPress={handleEditProfile}>
          <Image
            source={{
                uri: 'https://m.media-amazon.com/images/I/814Rfvj3myL._SL1200_.jpg',
              }}
            style={ProfileStyle.profileImage}
          />
        </TouchableOpacity>
        <Text style={ProfileStyle.username}>Nombre de usuario</Text>
        <Text style={ProfileStyle.email}>correo@example.com</Text>
  
        <TouchableOpacity onPress={handleEditProfile} style={ProfileStyle.button}>
          <Text style={ProfileStyle.buttonText}>Modificar perfil</Text>
        </TouchableOpacity>
  
        {isAdmin && (
          <TouchableOpacity onPress={handleCRUD} style={ProfileStyle.button}>
            <Text style={ProfileStyle.buttonText}>CRUD</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleLogout} style={[ProfileStyle.button, { backgroundColor: 'red' }]}>
          <Text style={ProfileStyle.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  