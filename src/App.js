import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/InsertarFrutas'
import generalStyle from './styles/music_player'
import { StackMenu } from './routes'
import { NavigationContainer } from "@react-navigation/native";



const App = () => {
  return (
    <NavigationContainer>
      <StackMenu/>
    </NavigationContainer>
    
  )
}

export default App