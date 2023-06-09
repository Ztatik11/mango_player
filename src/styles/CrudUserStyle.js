import { StyleSheet } from "react-native"; 


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
  
export default crudUserStyle;