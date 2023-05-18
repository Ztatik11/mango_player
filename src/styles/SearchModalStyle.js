import { StyleSheet } from "react-native"; 




const SearchModalStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    exitButton: {
        width:50,
        height:50,
        marginBottom:20
    }
});    
export default SearchModalStyle;