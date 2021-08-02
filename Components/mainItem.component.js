import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const MainItem = (props) => {

    return (
     <View style={styles.mainItemComponent}>
       
     </View>
    )
}
const styles = StyleSheet.create({
  mainItemComponent: {
    width:160,
    height: 160, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    backgroundColor: 'pink',
    width:160,
    height: 160, 
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    marginLeft: 270,
  }
});

export default MainItem;
