import { StyleSheet } from "react-native"; 


const ProfileStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#555',
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
    },
    username: {
      fontSize: 24,
      marginBottom: 10,
      color: 'white',
    },
    email: {
      fontSize: 18,
      marginBottom: 20,
      color: 'white',
    },
    button: {
      backgroundColor: 'green',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
  export default ProfileStyle;