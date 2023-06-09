import { StyleSheet,Dimensions } from "react-native"; 


const {height,width} = Dimensions.get('window')

const PlaylistPropStyle = StyleSheet.create({
    container:{
      width:width-20,
      height:120,
      elevation: 5,
      marginTop:20,
      alignSelf:'center',
      backgroundColor:'#7E6B40',
      borderRadius: 10,
      flexDirection:'row',
      alignItems:'center'
    },
    listIcon:{
      width:100,
      height:90,
      borderRadius:10,
      marginTop:10,
      marginLeft:15,
      color:"#FFD369"
    },
    nameView:{
      paddingLeft:2,
      width:'45%'
    },
    name:{
      fontSize:20,
      fontWeight: '600',
      color: '#000'
    },

    tracks:{
        fontSize:20,
        fontWeight: '500',
        color: '#000'
    },

    deleteIcon:{
      borderRadius:10,
      marginLeft:20
    },

});    
export default PlaylistPropStyle;