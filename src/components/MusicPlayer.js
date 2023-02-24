import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import musicPlayerStyle from '../styles/music_player'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const musicPlayer = () => {
  return (
    <SafeAreaView style= {musicPlayerStyle.container}>
      <View style= {musicPlayerStyle.maincontainer}>
        <Text>REACT NATIVE MUSIC MUSIC PLAYER</Text>
      </View>
      <View style= {musicPlayerStyle.bottomcontainer}>
        <View style= {musicPlayerStyle.bottomIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='heart-outline' size={30} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='repeat' size={30} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='share-outline' size={30} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='ellipsis-horizontal' size={30} color="white"/>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}
