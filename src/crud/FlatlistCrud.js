import React , {useState,useEffect} from "react";
import { FlatList, Text, View } from 'react-native';
import axios from "axios";

export const CrudUsers= ({records}) => {
    /*
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('http://192.168.0.23:3000/getUsers');
        setRecords(response.data);
      }
      fetchData();
    }, []);
  */
    return (
      <View>
        <FlatList
          data={records}
          renderItem={({ item }) => (
            <View>
              <Text>{item.ID}</Text>
              <Text>{item.Usuario}</Text>
              <Text>{item.Email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.ID}
        />
      </View>
    );
}

export const CrudTracks= () => {
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('http://192.168.0.23:3000/getTracks');
        setRecords(response.data);
      }
      fetchData();
    }, []);
  
    return (
      <View>
        <FlatList
          data={records}
          renderItem={({ item }) => (
            <View>
              <Text>{item.ID}</Text>
              <Text>{item.Usuario}</Text>
              <Text>{item.Email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.ID}
        />
      </View>
    );
}
