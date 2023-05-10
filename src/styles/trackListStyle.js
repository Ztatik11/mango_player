import { StyleSheet } from "react-native"; 




const trackListStyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        height:60,
        backgroundColor:'#fff',
        width:'100%',
        elevation:5,
        justifyContent: 'center',
    },
    logo:{
        fontSize:20,
        fontWeight:'700',
        color: '#FF0D0D',
        marginLeft: 20
    }
});    
export default trackListStyle;