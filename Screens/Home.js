
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const Home = ({ navigation }) => {
  return (
   
        
    <View style={styles.menu}>
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('CalendarScreen')
      }}>
        <Text>Calendar</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('FruitVeggieMonth')
      }}>
        <Text>Products of the Month</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.homepageMenu}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('EatSeasonally')
      }}>
        <Text>Eat Seasonally</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  homepageMenu: {
    width: 264,
    height: 50,
    backgroundColor:'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 76,
   marginVertical: 10,
  },
  menu: {
    marginTop: 236,
    
  },
});

export default Home;