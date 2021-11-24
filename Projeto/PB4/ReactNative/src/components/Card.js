import React from 'react';
import {
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Card = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.content} 
      onPress={() => {navigation.navigate('Details',item)}}
    >
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.titleContent}>
        <Text style={styles.titleCard}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content:{
    height: 225,
    width: 179,
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    elevation: 2
  },
  image: {
    width: 165,
    height: 91,
    borderRadius: 10,
  },
  titleContent: {
    justifyContent:'space-around',
    flex:1
  },
  titleCard:{
    fontFamily: fonts.bold,
    paddingLeft: 5.5,
    fontSize: 15
  }, 
  description: {
    textAlign:'left',
    paddingLeft: 5.5,
    paddingRight: 5.5,
    fontFamily: fonts.regular,
    color: colors.gray,
    fontSize: 10
  },
  price: {
    fontFamily: fonts.bold,
    paddingLeft: 5.5,
    fontSize: 13
  }
 
})

export default Card;