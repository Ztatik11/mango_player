import { StyleSheet } from "react-native"; 

export const editProfileStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#555',
  },
    imageView:{
      height: 100,
      width: 100,
      borderRadius: 15,
      justifyContent:'center',
      alignItems:'center',
      marginTop:30
    },
    username:{
      marginTop: 10,
      fontSize:18,
      fontWeight: 'bold',
      color: 'white'
    },
    header:{
      height:60,
      backgroundColor:'#fff',
      width:'100%',
      elevation:5,
      justifyContent: 'center',
      alignItems:'center'
  },
  logo:{
      fontSize:20,
      fontWeight:'700',
      color: '#FF0D0D',
  },
  form: {
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    borderColor:'#A98A8A',
    paddingBottom: 5,
    alignItems:'center',
    borderWidth: 1
  },
  cuadrotexto_bien:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    borderColor:'#A98A8A',
    paddingBottom: 5,
    alignItems:'center',
    borderWidth: 1
  },

  cuadrotexto_mal:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    borderColor:'red',
    paddingBottom: 5,
    alignItems:'center',
    borderWidth: 1
  },
  textInput:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0:-12,
    paddingLeft: 10,
    color: '#05375a'
  },
  dateButton:{
    borderWidth:10,
    marginLeft:50,
  },
  submitButton: {
    alignItems:'center',
    backgroundColor:"#FFD369",
    width:'55%',
    height:70,
    alignSelf: 'center',
    marginTop:100,
    borderRadius:50
  },
  submitText: {
    alignItems:'center',
    fontSize:40,
    fontWeight:'500',
    color: 'black'
  }
});    