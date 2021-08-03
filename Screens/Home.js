
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


const Home = ({ navigation }) => {
  return (

    <View style={styles.container}>  
    <Image source = {require('../pics/LOGO.png')} style={styles.image}></Image> 
    <View style={styles.menu}>
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('CalendarScreen')
      }}>
        <Text style={styles.text}>Calendar</Text>
      </TouchableOpacity>
      </View>
    
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('FruitVeggieMonth')
      }}>
        <Text style={styles.text}>Products of the Month</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('EatSeasonally')
      }}>
        <Text style={styles.text}>Eat Seasonally</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  homepageMenu: {
    width: 264,
    height: 50,
    backgroundColor:'#73BE28',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 76,
    marginVertical: 10,
    borderRadius: 7,
  },
  menu: {
    marginTop: 156,
    
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 150,
    marginTop: 100,
    paddingBottom: 20,
 },
 container: {
    flex:1, 
    backgroundColor: 'white',
 }, 
 text: {
   color: 'white',
 }
});

export default Home;