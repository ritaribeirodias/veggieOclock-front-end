import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import HeaderComponent from './Components/header.component';
import Calendar from './Components/calendar.component';
// import { useState } from 'react';
// import { fetchItems } from './services/item.services';

const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export default function App() {

  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   getItems();
  // }, []);

  // const getItems = async () => {
  //   const items = await fetchItems();
  //   setItem(items);
  // }

  return (
   <SafeAreaView>
    <View>
      <HeaderComponent></HeaderComponent>
      <FlatList
        style={styles.content}
        data = {months}
        keyExtractor={item => item}
        render={({ item }) => <Calendar name={item}/>}>
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



