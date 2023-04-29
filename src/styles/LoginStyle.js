import { StyleSheet,Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('window');


const generalStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center'
  },
  /*
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  */
    input:{
      padding: 15,
      backgroundColor: '#f3f3f3',
      width: '60%',
      minWidth: '60%',
      marginVertical:15
    },

    botonIngreso:{
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#6D99E1',
        borderRadius: 15,
        minWidth: 150,
    },

    botonIngresoText:{
        textAlign: 'center',
        color: 'white'
    }
});    
export default generalStyle;