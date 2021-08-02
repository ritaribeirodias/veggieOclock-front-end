import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
    width:40,
    height: 30, 
    borderRadius:5,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
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