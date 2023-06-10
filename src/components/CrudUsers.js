import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header} from '../props/header';
import {deleteUser, fetchUsers} from '../apis/MangoPlayerCalls';
import crudUserStyle from '../styles/CrudUserStyle';
import { useNavigation} from '@react-navigation/native';

export const CrudUsers = () => {
  const [users, setUsers] = useState([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    fetchData();
  }, []);

  async function handledeleteUser(userId) {
    try {
      await deleteUser(userId);
      Alert.alert('USUARIO BORRADO');
      setUsers(prevUsers => prevUsers.filter(user => user.ID !== userId));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Header text={'CRUD Usuario'} />
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={crudUserStyle.userContainer}>
      <View style={crudUserStyle.userDataContainer}>
        <Text style={crudUserStyle.userId}>ID: {item.ID}</Text>
        <Text style={crudUserStyle.userInfo}>USER: {item.Usuario}</Text>
        <Text style={crudUserStyle.userInfo}>EMAIL: {item.Email}</Text>
      </View>
      <View style={crudUserStyle.buttonContainer}>
        <TouchableOpacity style={crudUserStyle.editButton}>
          <Text style={crudUserStyle.buttonText} onPress={() => navigate('EditProfile', { user: item })}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={crudUserStyle.deleteButton} onPress={() => { handledeleteUser(item.ID) }}>
          <Text style={crudUserStyle.buttonText}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
        )}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};

export default CrudUsers;
