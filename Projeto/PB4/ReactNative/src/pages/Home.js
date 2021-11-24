import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import {Feather} from '@expo/vector-icons';

import Header from "../components/Header";
import Card from '../components/Card';
import Retangle from '../components/Retangle';
import Square from '../components/Square';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Home () {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Casa na Praia",
      description: "Casa nova, uma quadra do mar, lugar seguro e monitorado 24horas.",
      totalDescription:"A casa na beira da praia, situada a 5 minutos a pé do centro histórico. Temos a melhor vista panorâmica do mar e centro histórico de Paraty.",
      localization:"Praia do Pontal, Paraty, Brasil",
      area: "150m²",
      price:"R$ 1.204,00",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Rancho em SP",
      description: "Rancho no interior de São Paulo, com espaço para animais.",
      totalDescription:"Casa aconchegante na Serra da Cantareira, próximo aos principais centros comerciais e gastronômicos locais, tais como Jacques Café, Deck Cantareira Steackhouse, etc.",
      localization:"Residencial Parque Petrópolis, Mairiporã, Brasil",
      area: "300m²",
      price:"R$ 3.400,00",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",      
      title: "Casa em Floripa",
      description: "Casa nova, perto do centro, lugar seguro e monitorado 24horas.",
      totalDescription:"Casa aconchegante e totalmente equipada, com linda vista e silenciosa. Localizada a 350 metros da Praia do Campeche, 9 km do aeroporto e 1 km de supermercado e padaria. Possui internet wi-fi 60MB, TV smart e ar condicionado.",
      localization:"Campeche, Santa Catarina, Brasil",
      area: "250m²",
      price:"R$ 2.014,00",
    },
  ]

  const DATA2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      title: "Apartamento Copacabana",
      description: "Apartamento mobilhado em São Paulo",
      totalDescription:"Ambiente aconchegante para até quatro pessoas, localização excelente, próximo do metrô Oscar Freire, com restaurantes, bares, supermercados e farmácias.",
      localization:"Oscar Freire, São Paulo, Brasil",
      area: "200m²",
      price:"R$ 4.514,00",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Casa Itapecerica",
      description: "Casa moderna em Itapecerica",
      totalDescription:"Casa completa, dentro de um condomínio que dispõe de varias atividades de lazer. Podendo usar a academia, piscina e sauna.",
      localization:"Vila Andrade, Itapecerica da Serra, Brasil",
      area: "250m²",
      price:"R$ 3.560,00",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "Casa Presidente Prudente",
      description: "Casa mobilhada Presidente Prudente",
      totalDescription:"A casa fica à 10 Minutos do Prudenshopping, próximo a um Mini Mercado (50 metros) e a um Parque Ecológico (400 metros) para passeio e caminhada, além disso você vai estar a poucos minutos de uma avenida com comércios em geral.",
      localization:"Parque Residencial São Lucas, Presidente Prudente, Brasil",
      area: "100m²",
      price:"R$ 2.450,00",
    },
  ]

  const DATA3 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Apartamento SP",
      discount: "20% OFF",
      totalDescription:"Totalmente mobiliado, decorado e equipado, com tudo que você precisa para ter uma vida tranquila. Wifi, TV a cabo, conta de luz e condomínio, já incluso no pacote.",
      localization:"Vila Olímpia, São Paulo, Brasil",
      area: "200m²",      
      price:"R$ 5.514,00",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Casa Espírito Santo",
      discount: "10% OFF",
      totalDescription:"Possui 3 quartos com suíte, sala, cozinha e varanda integrada. A poucos passos da Praia de Itaparica, próximo a bares, restaurantes, shoppings, farmácias, supermercados, etc.",
      localization:"Vila Velha, Espírito Santo, Brasil",
      area: "300m²",
      price:"R$ 4.560,00",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      title: "Apartamento Rio",
      discount: "20% OFF",
      totalDescription:"Apartamento silencioso, ventilado, confortável e localização privilegiada, 100 mts da Praia de Copacabana, inúmeros comércios e restaurantes. Metro Cantagalo a 300 metros do apartamento.",
      localization:"Copacabana, Rio de Janeiro, Brasil",
      area: "200m²",
      price:"R$ 8.450,00",
    },
  ]

  return(
    <View style={styles.container}>
      <Header home={true}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.searchContent}>
          <Feather name="search" size={20} />
          <Text style={styles.placeholder}>O que está procurando?</Text>
        </View>

        <Text style={styles.title}>Novidades</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Card item={item} />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />

        <Text style={styles.title}>Próximo de você</Text>
        <FlatList 
          data={DATA2}
          renderItem={({item}) => (
            <Retangle item={item}/>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />

        <Text style={styles.title}>Promoções</Text>
        <FlatList 
          data={DATA3}
          renderItem={({item}) => (
            <Square item={item}/>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#eeee"
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20
  },
  searchContent: {
    height: 35,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccc",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    backgroundColor: colors.white,
    marginTop: 22
  },
  placeholder: {
    color: colors.gray,
    marginLeft: 10,
    fontFamily: fonts.regular
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
    marginTop: 20,
    alignSelf:'flex-start'
  },
  list: {
    marginTop: 10,
    paddingVertical: 4,
    alignItems: 'center',
  }
  
})