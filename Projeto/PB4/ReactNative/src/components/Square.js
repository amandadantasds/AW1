import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Square = ({item}) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity  
      style={styles.container}
      onPress={() => {navigation.navigate('Details',item)}}
    >
    <ImageBackground source={{uri: item.image}} style={styles.image} blurRadius={10} borderRadius={4}>
      <View style={styles.content}>
        <Text style={styles.titleSquare}>{item.title}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 181,
    height: 134, 
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginRight: 16,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: "100%" 
  },
  content: {
    flex: 1,
    marginLeft: 9
  },
  titleSquare: {
    color: colors.white,
    fontFamily: fonts.bold,
    textShadowColor: colors.black,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    paddingTop: 10,
    paddingLeft: 8
  },
  discount:{
    color: colors.white,
    fontFamily: fonts.bold,
    textShadowColor: colors.black,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    paddingLeft: 8
  },
  description: {
    textAlign:'left',
    fontFamily: fonts.regular,
    color: colors.gray,
    fontSize: 10
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: 13
  }
})

export default Square;