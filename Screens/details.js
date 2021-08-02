import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Item from '../Components/item.component';
import HeaderComponent from '../Components/header.component';
import Calendar from '../Components/calendar.component'


const months = [
    {month: 'JAN', id: 1},
    {month: 'FEB', id: 2},
    {month: 'MAR', id: 3},
    {month: 'APR', id: 4},
    {month: 'MAY', id: 5},
    {month: 'JUN', id: 6},
    {month: 'JUL', id: 7},
    {month: 'AUG', id: 8},
    {month: 'SEP', id: 9},
    {month: 'OCT', id: 10},
    {month: 'NOV', id: 11},
    {month: 'DEC', id: 12},
  ];


const Details = ({item}) => {

  return (
  <View>
      <HeaderComponent></HeaderComponent>
      <FlatList
        style = {styles.margin}
        horizontal = {false}
        numColumns = {6}
        data= {months}
        //keyExtractor = {el => {el.month}}
        renderItem = {(item) => {
          return <Calendar name = {item.item.month} />
        }}>
      </FlatList>
    <Text> Import item here with description and months</Text>
    
  </View>
  )
};

const styles = StyleSheet.create({
  margin: {
    marginLeft: 90,
    marginVertical: 10,
  },
})


export default Details;