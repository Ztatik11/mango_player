import { StyleSheet,Dimensions } from "react-native"; 


const {height,width} = Dimensions.get('window')

const CreateNewPlaylistStyle = StyleSheet.create({
    container:{
      width:width-20,
      height:100,
      elevation: 5,
      marginTop:20,
      alignSelf:'center',
      backgroundColor:'#FFD369',
      borderRadius: 60,
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
      width:'100%'
    },
    name:{
      fontSize:20,
      fontWeight: '600',
      color: '#000'
    },


});    
export default CreateNewPlaylistStyle;