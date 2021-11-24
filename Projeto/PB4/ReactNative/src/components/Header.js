import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

const Header = ({home}) => {
  const navigation = useNavigation();
  return(
    <View elevation={5} style={styles.content}>
      {home ? (
        <> 
          <Text style={styles.title}>Alugue</Text>
          <Feather name="shopping-bag" size={20}/>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Feather name="arrow-left" size={20}/>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 47,
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: colors.white
    
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 23
  }
})

export default Header;

