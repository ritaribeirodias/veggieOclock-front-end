import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Description = ({info, store}) => {
  return (
    
    <View style = {styles.container}>
       <Text> Hello! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 290,
    height: 75,
    backgroundColor: '#E5E5E5',
  }
})

export default Description;