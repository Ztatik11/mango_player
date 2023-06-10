import { StyleSheet,Dimensions } from "react-native"; 

const {width, height} = Dimensions.get('window');


const SafeAreaViewStyle = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#555',
    },
});    
export default SafeAreaViewStyle;