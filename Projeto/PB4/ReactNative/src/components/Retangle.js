import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Retangle = ({item}) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity  
      style={styles.container}
      onPress={() => {navigation.navigate('Details',item)}}
    >
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 231,
    height: 67,
    borderRadius: 8,  
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginRight: 16,
    elevation: 1,
  },
  image: {
    width: 71,
    height: 58,
    backgroundColor: "#eeee",
    borderRadius: 10
  },
  content: {
    flex: 1,
    marginLeft: 9
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

export default Retangle;