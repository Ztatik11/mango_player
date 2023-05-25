import { StyleSheet } from "react-native"; 




export const headerStyle = StyleSheet.create({
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
        alignSelf: 'center',
    }
});    
export default headerStyle;