import { View, Text } from 'react-native'
import React from 'react'
import Music_player from './components/music_player'
import styles from './styles/InsertarFrutas'
import generalStyle from './styles/music_player'

const App = () => {
  
  return (
    <View style = {generalStyle.container}>
      <Music_player/>
    </View>
  )
}

export default App