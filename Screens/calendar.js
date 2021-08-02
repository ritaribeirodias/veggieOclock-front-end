import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import HeaderComponent from '../Components/header.component';
import MainItem from '../Components/mainItem.component';
import Calendar from '../Components/calendar.component';
import Item from '../Components/item.component';
import { useState, useEffect, useCallback } from 'react';

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

const CalendarScreen = (props) => {

  const [data, setData] = useState([]);
  
  const baseURL = 'http://192.168.1.105:3001/items';
  
  const fetchItems = useCallback (async () => {
    const res = await fetch(baseURL);
    if(res.ok) { 
    const result = await res.json();
    //console.log(items, 'items')
    setData(result);
    }
  }, [])

  useEffect(() => {
    fetchItems();
  }, []);

  

   

  return (
    <SafeAreaView>
    <View> 
      <HeaderComponent></HeaderComponent>
      <View style = {styles.list}>
      <FlatList
        data= {data}
        horizontal = {false}
        keyExtractor = {item => {item._id}}
        renderItem = {({item}) => {
          return <Item item = {item} />
        }}>
      </FlatList>
      <MainItem style = {styles.mainItem}></MainItem>
      </View>
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
    }, 
    list: {
      alignItems: 'center', 
    }
  });

  export default CalendarScreen;