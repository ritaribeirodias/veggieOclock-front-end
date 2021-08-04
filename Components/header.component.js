import React from 'react';
import { View, StyleSheet, Image } from 'react-native';



const HeaderComponent = ( ) => {
  return (
    <View>
      <View style = {styles.logoContainer}>
        <Image source = {require('../pics/LOGO.png')} style={styles.image}></Image>
      </View>
    </View>
  )};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 170,
    paddingBottom: 20,
    
 },
 logoContainer: {
   backgroundColor: '#FFFCFC',
   paddingVertical: 10,
 },
 
});

export default HeaderComponent;