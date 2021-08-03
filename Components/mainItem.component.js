import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import Calendar from '../Components/calendar.component'

const MainItem = ({selectedItem, selected}) => {
  //const styleMonths = (months) => {
  //   months.forEach(month => {
  //     if(month.inSeason) {
  //       return //green <Calendar month.name>
  //     } else {
  //       return //gray <Calendar>
  //     }
  //   })

  // }

  return (
    <View >
      <View style={styles.title}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{selectedItem.name}</Text>
      </View>
      <View style={styles.photoBox}>
        <Image source={{uri: selectedItem.image}} style={{width: 200, height: 200, borderRadius: 10}}></Image>
      </View>
      <View style={styles.textInfo}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{selectedItem.info}</Text>
      </View>
      <View>
       {selectedItem.months.inSeason ? <Calendar selectedItem = {selected} style={{backgroundColor: '#2B8E35'}}>{selectedItem.months.month}</Calendar> : <Calendar selectedItem = {selected} style={{backgroundColor: '#F3EEEE'}}>{selected.months.month}</Calendar>}
     </View>
    </View>
  )};
  
const styles = StyleSheet.create({
  mainItemComponent: {
    width:200,
    height: 200, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120,
    
  },
  photoBox: {
    marginTop: 10, 
    marginHorizontal: 113,
  },
  textInfo: {
    backgroundColor: '#2B8E35',
    width: 300,
    height: 150,
    borderRadius: 10,
    marginLeft: 60,
    marginTop: 10, 
    padding: 10,
    color: 'white',
  }, 
  title: {
    backgroundColor: '#2B8E35',
    fontSize: 20,
    padding: 5, 
    width: 100, 
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 165,
    borderRadius: 10,
  }
});

export default MainItem;
