import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Item = ({item}) => {
 
  return ( 
    
    <View style={styles.item}> 
     
      <Image source={{uri: item.image}} style={{width: 160, height: 160, borderRadius: 10}} />
      
      
    </View>
   
);

}
const styles = StyleSheet.create({
  item: {
    backgroundColor:'pink',
    width:160,
    height: 160, 
    borderRadius:10,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
},
});


export default Item;