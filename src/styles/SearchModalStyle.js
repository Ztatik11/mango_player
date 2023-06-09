import { StyleSheet } from "react-native"; 




const SearchModalStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#555',
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
    },

    trackToAdd: {
        fontSize:40,
        fontWeight:'700',
        color: '#FFD369'
    },

    input: {
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize: 16,
        
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});    
export default SearchModalStyle;