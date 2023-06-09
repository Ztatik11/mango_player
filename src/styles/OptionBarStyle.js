import { StyleSheet,Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('window');


const OptionBarStyle = StyleSheet.create({

    container:{
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: '#392F2F',
      borderWidth: 1,

    },

    bottomIconWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      
    },

});    
export default OptionBarStyle;