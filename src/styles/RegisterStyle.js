import { StyleSheet } from "react-native"; 


const generalStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cuadrotexto_bien:{
    padding: 15,
    backgroundColor: '#f3f3f3',
    width: '60%',
    minWidth: '60%',
    marginVertical:15,
    borderWidth:1,
    borderColor:'grey'
  },

  cuadrotexto_mal:{
    padding: 15,
    backgroundColor: '#f3f3f3',
    width: '60%',
    minWidth: '60%',
    marginVertical:15,
    borderWidth:1,
    borderColor:'#E02222'
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