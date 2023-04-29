import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import musicPlayerStyle from '../styles/music_player'
import {OptionBar} from '../props/optionBar'


export const musicPlayer = () => {
  
  return (
    <SafeAreaView style= {musicPlayerStyle.container}>
      <View style= {musicPlayerStyle.maincontainer}>
        <Text>REACT NATIVE MUSIC MUSIC PLAYER</Text>
      </View>
      <OptionBar/>
    </SafeAreaView>
  )
}
