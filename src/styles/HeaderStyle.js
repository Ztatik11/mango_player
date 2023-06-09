import { StyleSheet } from "react-native"; 




export const headerStyle = StyleSheet.create({
    header:{
        height:60,
        width:'100%',
        elevation:5,
        justifyContent: 'center',
        backgroundColor: '#392F2F'
    },
    logo:{
        fontSize:20,
        fontWeight:'700',
        color: '#FFD369',
        alignSelf: 'center',
    }
});    
export default headerStyle;