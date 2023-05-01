import React , {useState,useEffect} from "react";
import { FlatList, Text, View, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";

export const CrudUsers= () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://192.168.0.23:3000/getUsers');
      setRecords(response.data);
    }
    fetchData();
  }, []);

  async function deleteUser(userId) {
    try {
      const response = await axios.delete('http://192.168.0.23:3000/DeleteUser', { data: { id: userId } });
      Alert.alert("USUARIO BORRADO")
      setRecords(records.filter(record => record.ID !== userId));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View>
            <Text>ID: {item.ID}</Text>
            <Text>USER: {item.Usuario}</Text>
            <Text>EMAIL: {item.Email}</Text>
            <TouchableOpacity onPress={()=>{deleteUser(item.ID)}}>
                <Text>Borrar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.ID}
      />
    </View>
  );
}

export default CrudUsers;