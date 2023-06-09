import { StyleSheet } from "react-native"; 


const generalStyle = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize:40,
    fontWeight:'700',
    color: '#FFD369'
},

  cuadrotexto_bien:{
    padding: 15,
    backgroundColor: '#f3f3f3',
    width: '60%',
    minWidth: '60%',
    marginVertical:15,
    borderWidth:2,
    borderColor:'grey',
    borderRadius: 50
  },

  cuadrotexto_mal:{
    padding: 15,
    backgroundColor: '#f3f3f3',
    width: '60%',
    minWidth: '60%',
    marginVertical:15,
    borderWidth:2,
    borderColor:'#E02222',
    borderRadius: 50
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