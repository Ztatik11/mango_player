import React from 'react'
import { StackMenu } from './routes'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import {store} from "./store/index"

console.log(store)
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StackMenu/>
      </NavigationContainer>
    </Provider>
  )
}

export default App