import { StyleSheet,Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('window');


const SafeAreaViewStyle = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#555',
    },
/*
    maincontainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    bottomcontainer:{
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
      borderTopColor:'#393E46',
      borderWidth: 1,

    },

    bottomIconWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      
    },
*/
});    
export default SafeAreaViewStyle;