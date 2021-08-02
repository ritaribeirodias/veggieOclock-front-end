import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import HeaderComponent from '../Components/header.component';
import MainItem from '../Components/mainItem.component';
import Calendar from '../Components/calendar.component';

const months = [
    {key: 'JAN'},
    {key: 'FEB'},
    {key: 'MAR'},
    {key: 'APR'},
    {key: 'MAY'},
    {key: 'JUN'},
    {key: 'JUL'},
    {key: 'AUG'},
    {key: 'SEP'},
    {key: 'OCT'},
    {key: 'NOV'},
    {key: 'DEC'}
  ];

const CalendarScreen = ({item}) => {
  return (
    <SafeAreaView>
    <View>
      <HeaderComponent></HeaderComponent>
      <FlatList
        data= {item}
        horizontal = {true}
        keyExtractor = {item => {item.image}}
        renderItem = {({image}) => 
          <Item images = {image} />} >
      </FlatList>

      <FlatList
        style = {styles.margin}
        horizontal = {false}
        numColumns = {6}
        data= {months}
        keyExtractor = {month => {month.key}}
        renderItem = {({key}) => 
          <Calendar name = {key} />} >
      </FlatList>
     
      
      
      <MainItem style = {styles.mainItem}></MainItem>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content: {
      flex:1,
      flexDirection:'row',
    },
    margin: {
      marginLeft: 90,
      marginVertical: 10,
    },
    mainItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    
   
  })

  export default CalendarScreen;