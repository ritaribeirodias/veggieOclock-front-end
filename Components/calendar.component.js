import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';


const Calendar = ({name}) => {
  
  return (
      
      <View style={styles.calendarContainer}>
          <Text style={styles.text}>{name}</Text>
      </View>
      
  );

}
const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor:'#BEF388',
    width:30,
    height: 30, 
    borderRadius:10,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Calendar;