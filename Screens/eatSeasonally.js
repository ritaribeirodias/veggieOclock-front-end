import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../Components/header.component';

const EatSeasonally = () => {
  return (

      < View style={styles.page}> 
        <HeaderComponent></HeaderComponent>
        <View style={styles.title}>
            <Text style={styles.text}> Why Eat Seasonally? </Text>
        </View>
      <View style={styles.container}> 
        <Text style={styles.textInfo}>To reduce the energy (and associated CO2 emissions) needed to grow and transport the food we eat.</Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.textInfo}>To avoid paying a premium for food that is scarcer or has travelled a long way.</Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.textInfo}>To support the local economy.</Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.textInfo}>Seasonal food is fresher and so tends to be tastier and more nutritious.</Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.textInfo}>And much more...!</Text>
      </View>
      </View>
  )};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 33,
    height: 80,
    backgroundColor:'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    marginVertical: 10,
    backgroundColor: '#E3F8CF',
    borderRadius: 7,
    padding: 5, 

  },
  title: {
    width: 300,
    height: 40,
    backgroundColor:'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    marginVertical: 10,
    fontSize: 30,
    backgroundColor: '#73BE28', 
    borderRadius: 7,
  }, 
  page: {
    flex: 1, 
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textInfo: {
    color: '#8F8B8B',
  }
});

export default EatSeasonally;