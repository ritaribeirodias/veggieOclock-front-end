import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Calendar = ({ name, element }) => {
  return element.item.inSeason ? (<View style={[{ backgroundColor: 'black' } , styles.calendarContainer]}><Text style={styles.text}>{name}</Text></View>) : (<View style={[{ backgroundColor: 'pink' }, styles.calendarContainer]}><Text style={styles.text}>{name}</Text></View>)
};
const styles = StyleSheet.create({
  calendarContainer: {
    width: 40,
    height: 30,
    borderRadius: 5,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Calendar;



















