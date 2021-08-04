import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CalendarScreen from './Screens/calendar';
import EatSeasonally from './Screens/eatSeasonally';
import FruitVeggieMonth from './Screens/fruitVeggieMonth';
import Home from './Screens/Home'


const Stack = createStackNavigator();

export default function App() {


  
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name ="Home" component={Home} ></Stack.Screen>
       <Stack.Screen name ="CalendarScreen" component={CalendarScreen} ></Stack.Screen>
       <Stack.Screen name ="FruitVeggieMonth" component={FruitVeggieMonth}></Stack.Screen>
       <Stack.Screen name ="EatSeasonally" component={EatSeasonally}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  );
}




