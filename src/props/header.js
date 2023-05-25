import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import headerStyle from '../styles/HeaderStyle';



export const Header = ({text}) => {
  return (
    <View style={headerStyle.header}>
        <Text style={headerStyle.logo}>{text}</Text>
    </View>
  );
};