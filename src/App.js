import React from 'react'
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