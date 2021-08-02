import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Item = ({image}) => {
  return (
      
    <View style={styles.item}> 
    <Image source = {image} />
    </View>
    
);

}
const styles = StyleSheet.create({
item: {
  backgroundColor:'pink',
  width:90,
  height: 90, 
  borderRadius:10,
  color: 'white',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 1,
},
});


export default Item;