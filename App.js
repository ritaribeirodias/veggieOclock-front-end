import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
// import HeaderComponent from './Components/header.component';
import { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import fetchItems  from './services/item.services';
// import Calendar from './Components/calendar.component';
// import Item from './Components/item.component';
// import MainItem from './Components/mainItem.component';
import CalendarScreen from './Screens/calendar';
import EatSeasonally from './Screens/eatSeasonally';
import FruitVeggieMonth from './Screens/fruitVeggieMonth';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'

const Stack = createStackNavigator();

export default function App() {

  const [item, setItem] = useState([]);
  
  const baseURL = 'http://192.168.1.105:3001/items';
  
  const fetchItems = useCallback (async () => {
    const res = await fetch(baseURL);
    if(res.ok) { 
    const items = await res.json();
    console.log(items)
    setItem(items)
    }
  }, [])

  useEffect(() => {
    fetchItems();
  }, []);

  
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name ="Home" component={Home}></Stack.Screen>
       <Stack.Screen name ="CalendarScreen" component={CalendarScreen}></Stack.Screen>
       <Stack.Screen name ="FruitVeggieMonth" component={FruitVeggieMonth}></Stack.Screen>
       <Stack.Screen name ="EatSeasonally" component={EatSeasonally}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  );
}




