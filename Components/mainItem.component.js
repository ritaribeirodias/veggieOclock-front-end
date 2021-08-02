import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const MainItem = (props) => {
    return (
     <View style={styles.mainItemComponent}>
       <Image source = {require('../pics/cherry.jpeg')} style={styles.image} />
     </View>
    )
}
const styles = StyleSheet.create({
  mainItemComponent: {
    width:150,
    height: 190, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    flex: 1,
    width: 150,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 270,
  }
});

export default MainItem;
