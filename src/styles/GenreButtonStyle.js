import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const GenreButtonStyle = StyleSheet.create({
    button: {
        backgroundColor: '#555',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius:50
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
      },
      cell: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      },
});
export default GenreButtonStyle;



