import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Item = ({images}) => {
 
  return ( 
    <View style={styles.item}> 
     <Image source={{uri: images}} style={{width: 160, height: 160, borderRadius: 10}} />
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