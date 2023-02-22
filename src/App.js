import { View, Text } from 'react-native'
import React from 'react'
import Music_player from './components/music_player'
import styles from './styles/InsertarFrutas'
import generalStyle from './styles/music_player'

  const app = express();
  const port = process.env.PORT || 5000;

  app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
  });

  app.listen(port, () => {
   console.log(`El servidor está corriendo en el puerto ${port}`);
  });

const App = () => {
  
  return (
    <View style = {generalStyle.container}>
      <Music_player/>
    </View>
  )
}

export default App