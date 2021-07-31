import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import HeaderComponent from './Components/header.component';
import { useState } from 'react';
import fetchItems  from './services/item.services';
import Calendar from './Components/calendar.component';


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
export default function App() {

  const [item, setItem] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const items = await fetchItems();
    setItem(items);
  }
  
  return (
   <SafeAreaView>
    <View>
      <HeaderComponent></HeaderComponent>
     <Text >  </Text>
      <FlatList
        data= {months}
        keyExtractor = {month => {month.key}}
        renderItem = {({key}) => 
          <Calendar name = {key} />} >
      </FlatList>
    </View>
   </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  content: {
    flex:1,
    flexDirection:'row',
    
  }
})



