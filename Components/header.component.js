import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const HeaderComponent = ( ) => {
  return (
    
      <View style ={styles.container} >
        <Image source = {require('../pics/newlogo.png')} style={styles.image}></Image>
        <Text> Calendar </Text>
        <Text style = {styles.text}> Fruit </Text>
        <Text> Eat Seasonally</Text>
       </View>
   
    )
}
//insert logo here as well
const styles = StyleSheet.create({
 container: {
     margin: 10, 
     backgroundColor: '#FFFCFC',
     paddingTop: 40,
     paddingBottom: 10,
     paddingLeft: 10,
     flexDirection: 'row',
     display: 'flex',
     justifyContent: 'space-around',

 },
 image: {
  flex: 1,
  width: 30,
  height: 30,
  resizeMode: 'contain',
  alignContent: 'center',
  marginLeft: 10,
 }
 
})

export default HeaderComponent;