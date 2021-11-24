import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Header from '../components/Header';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Details(prop) {
  const Separator = () => (
    <View style={styles.separator}/>
  );

  const hotel = prop.route.params;
  return(
    <View style={styles.container}>
      <Header home={false}/>
      <Image source={{uri: hotel.image}} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{hotel.title}</Text>
          <View style={styles.titleBox}>
            <Text style={styles.rateText}>Avaliação</Text>
            <View style={styles.rate}>
              <Ionicons name={"star"} style={styles.icon}/>
              <Ionicons name={"star"} style={styles.icon}/>
              <Ionicons name={"star"} style={styles.icon}/>
              <Ionicons name={"star"} style={styles.icon}/>
              <Ionicons name={"star-outline"} style={styles.icon}/>
            </View>
          </View>
        </View>
        <Text style={styles.price}>{hotel.price}</Text>
        <View style={styles.detailsContent}>
          <Text style={styles.details}>
            {hotel.totalDescription}
          </Text>

          <Separator/>
          <Text style={styles.titleTopic}>Localização</Text>
          <Text style={styles.detailsTopic}>
            {hotel.localization}
          </Text>

          <Separator/>
          <Text style={styles.titleTopic}>Área</Text>
          <Text style={styles.detailsTopic}>
            {hotel.area}
          </Text>

          <Separator/>
          <Button 
            color="#4f4b4a"
            title="ALUGUE"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: "#eeee"
  },
  descriptionContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    flex: 1,
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 15
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18
  },
  titleBox: {
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  rate: {
    flexDirection: 'row',
  },
  rateText: {
    fontFamily: fonts.regular,
    fontSize: 11
  },
  icon: {
    marginRight: 3
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: 17
  },
  detailsContent: {
    marginTop: 15
  },
  details: {
    fontFamily: fonts.regular,
    fontSize: 14,
    textAlign: 'justify',
  },
  titleTopic: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.black,
    paddingBottom: 5
  },
  detailsTopic: {
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  separator: {
    marginVertical: 10,
  },
})