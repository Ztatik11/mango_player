import { View, Text} from 'react-native';
import React from 'react';
import headerStyle from '../styles/HeaderStyle';



export const Header = ({text}) => {
  return (
    <View style={headerStyle.header}>
        <Text style={headerStyle.logo}>{text}</Text>
    </View>
  );
};