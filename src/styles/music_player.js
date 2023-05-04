import { StyleSheet,Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('window');


const generalStyle = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#555',
    },

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

    mainImageWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems : 'center',
      marginTop:25
    },

    imageWrapper: {
      width: 300,
      height: 340,
      marginBottom:25
    },
    musicImage:{
      width:'100%',
      height:'100%',
      borderRadius: 15
    },
    songTitle:{
      fontSize:18,
      fontWeight:"600",
      textAlign: 'center',
      color: '#EEEEEE',
    },
    songAuthor:{
      fontSize:16,
      fontWeight:"300",
      textAlign: 'center',
      color: '#EEEEEE',
    },

    progressBar:{
      width :350,
      height: 40,
      marginTop: 25,
      flexDirection: 'row'
    },

    progressLevelDuration:{
      width :340,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    progressLabelText:{
      color: '#fff',
      fontWeight: '500',
    },

    musicControlsContainer:{
      flexDirection: 'row',
      
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 10,
    },
    elevation:{
      elevation:5,
    }
});    
export default generalStyle;