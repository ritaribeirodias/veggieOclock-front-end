import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Item = ({item, handleSelect}) => {
  
  return ( 
    <View style={styles.item}> 
      <TouchableOpacity onPress={() => { handleSelect(item)}}>
        <Image source={{uri: item.image}}style={{width: 110, height: 110, borderRadius: 10}} />
      </TouchableOpacity>
    </View>
   
)};

const styles = StyleSheet.create({
  item: {
    backgroundColor:'pink',
    width:110,
    height: 110, 
    borderRadius:10,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
},
});


export default Item;