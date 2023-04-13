import { StyleSheet } from "react-native"; 


  const styles = StyleSheet.create({
    
    titulo:{
      fontSize:50,
      color:'black',
    },
    aplicacion:{
      alignItems:"center",
      flex:1,
      backgroundColor:"#50F874",
    },
    contenedor_datos:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding:20,
    },
    contenedor_genero:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding:20,
      borderWidth:10,
      borderColor:"#FA0505",
      borderRadius:50,
    },
  
    cuadrotexto_bien:{
      backgroundColor:"#E7D78E",
      color:'black',
      borderColor:'grey',
      borderWidth:1,
      width:200,
    },
  
    cuadrotexto_mal:{
      backgroundColor:"#E7D78E",
      color:'black',
      borderColor:'red',
      borderWidth:1,
      width:200,
    },
  
    imagen: {
      width: 100,
      height: 100,
      opacity: 1,
    },
  });
  export default styles;