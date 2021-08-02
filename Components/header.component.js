import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



const HeaderComponent = ( ) => {
  return (
    <View>
      <View style = {styles.logoContainer}>
      <Image source = {require('../pics/newlogo.png')} style={styles.image}></Image>
      </View>
      <View style ={styles.container} >
        <Text> Calendar </Text>
        <Text style = {styles.text}> Fruit </Text>
        <Text> Eat Seasonally</Text>
       </View>
    </View>
   
    )
}
//insert logo here as well
const styles = StyleSheet.create({
 container: {
   margin: 10, 
   backgroundColor: '#FFFCFC',
   paddingTop: 20,
   paddingBottom: 10,
   paddingLeft: 10,
   flexDirection: 'row',
   display: 'flex',
   justifyContent: 'space-around',

 },
 image: {
  
  width: 80,
  height: 40,
  resizeMode: 'contain',
  justifyContent: 'center',
  alignContent: 'center',
  marginLeft: 170,
  paddingBottom: 20,
  borderRadius: 30,
 },
 logoContainer: {
   backgroundColor: '#FFFCFC',
 }
 
})

export default HeaderComponent;