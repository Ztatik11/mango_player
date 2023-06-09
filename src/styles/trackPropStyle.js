
import { StyleSheet,Dimensions } from "react-native"; 


const {height,width} = Dimensions.get('window')

const trackPropStyle = StyleSheet.create({
    container:{
      width:width-20,
      height:120,
      elevation: 5,
      marginTop:20,
      alignSelf:'center',
      backgroundColor:'#392F2F',
      borderRadius: 10,
      flexDirection:'row',
      alignItems:'center'
    },
    songImage:{
      width:100,
      height:90,
      borderRadius:10,
      marginTop:2,
      marginLeft:14
    },
    nameView:{
      paddingLeft:10,
      width:'45%'
    },
    name:{
      fontSize:20,
      fontWeight: '600',
      color: 'white'
    },
    singer:{

    }


});    
export default trackPropStyle;