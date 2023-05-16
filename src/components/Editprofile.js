import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';
import { editProfileStyle } from '../styles/EditprofileStyle';


export const EditProfile = () =>{
    return(
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <View style={editProfileStyle.imageView}>
              <ImageBackground source={{
                uri: "https://m.media-amazon.com/images/I/814Rfvj3myL._SL1200_.jpg"
              }}
              style={{height:100, width:100}}
              imageStyle={{borderRadius:15}}>

              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
    )
}