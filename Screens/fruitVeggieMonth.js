import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import HeaderComponent from '../Components/header.component';

const FruitVeggieMonth = (props) => {
  return (
    <View style = {styles.background}>
     <HeaderComponent></HeaderComponent>
      
       <View style={styles.title}>
        <Text style={styles.text}> Fruit and Veggie Of The Month </Text>
       </View>
       <ScrollView>
       <View> 
          <Image source={require('../pics/cherry.jpeg')} style={styles.image}></Image>
       </View> 
       <View style={styles.mainItemComponent}> 
        <Text style={styles.subTitle}> Cherry </Text>
        <Text> To keep cherries fresh, you should refrigerate them. Put the cherries in a resealable plastic bag, and place the bag in the refrigerator. They will stay fresh for 3–5 days, or even up to two weeks. </Text>
       </View>
       <View> 
          <Image source={require('../pics/peas.jpeg')} style={styles.image}></Image>
       </View> 
       <View style={styles.mainItemComponent}> 
        <Text style={styles.subTitle}> Peas </Text>
        <Text> Place peas in a perforated plastic bag in the vegetable crisper section of the refrigerator to keep them moist. Peas will keep in the refrigerator for 5 to 7 days. Peas that can't be used in a week should be frozen </Text>
       </View>
       </ScrollView>
      </View>
  )};

  const styles = StyleSheet.create({
    title: {
      width: 300,
      height: 40,
      backgroundColor:'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 60,
      marginVertical: 10,
      fontSize: 30,
      backgroundColor: '#73BE28', 
      borderRadius: 7,
    }, 
    text: {
      color: 'white',
      fontSize: 20,
    },
    mainItemComponent: {
      backgroundColor: '#F1EFEF',
      borderRadius: 10,
      width:300,
      height: 140, 
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 60, 
      marginTop: 20,
      paddingHorizontal:10,
    },
    image: {
      width:160,
      height: 160, 
      borderRadius:10,
      flexDirection: 'row',
      alignItems: 'center',
      margin: 1,
      marginLeft: 130,
      marginTop: 30,
    },
    background: {
      backgroundColor: 'white',
      flex: 1,
    },
    subTitle: {
      paddingBottom: 5, 
      fontSize: 16,
      fontWeight: 'bold',
    }
  });
  
export default FruitVeggieMonth;