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

export const CrudUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    fetchData();
  }, []);

  async function handledeleteUser(userId) {
    deleteUser(userId);
    Alert.alert('USUARIO BORRADO');
  }

  return (
    <View>
      <Header text={'Edicion de usuario'} />
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
          <Text style={crudUserStyle.buttonText} onPress={() => navigation.navigate('EditProfile', { user: item })}>Editar</Text>
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
const crudUserStyle = StyleSheet.create({
  userContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation:5
  },
  userDataContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfo: {
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default CrudUsers;
