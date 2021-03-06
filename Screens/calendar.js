import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';
import HeaderComponent from '../Components/header.component';
import Item from '../Components/item.component';
import { useState, useEffect, useCallback } from 'react';
import MainItem from '../Components/mainItem.component';



const CalendarScreen = ({item, navigation}) => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const baseURL = 'http://192.168.1.105:3001/items';
  
  const handleSelect = (item) => {
    setSelected(item);
  };

  const fetchItems = useCallback (async () => {
    const res = await fetch(baseURL);
    if(res.ok) { 
      const result = await res.json();
      setData(result);
    };
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);
  

  

  return (
    <SafeAreaView>
    <View style={{backgroundColor: 'white'}}> 
      <HeaderComponent></HeaderComponent>
      <View style = {styles.list}>
        <FlatList
          data= {data}
          horizontal = {true}
          keyExtractor = {item => {item._id}}
          renderItem = {({item}) => {
            return <Item item = {item} handleSelect={handleSelect} />
          }}>
        </FlatList>
     </View>
     <View>
       {selected ? <MainItem selectedItem = {selected}></MainItem> : null}
     </View>
    </View>
    </SafeAreaView>
  )};

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
    margin: 5, 
  }, 
  });

  export default CalendarScreen;