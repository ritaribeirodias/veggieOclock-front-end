
FlatList for picture caroussel
<FlatList
        
        horizontal = {true}
        data= {item}
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

      //const baseURL = 'http://127.0.0.1:3001/items'
  //const baseURL = 'exp://192.168.1.105:3001/items'

   // const getItems = async () => {
  //   const items = await fetchItems();
  //   console.log(items)
  //   setItem(items);
  // }

    <NavigationContainer>
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
        keyExtractor = {months => {months.key}}
        renderItem = {({key}) => 
          <Calendar name = {key} />} >
      </FlatList>
     
      
      
      <MainItem style = {styles.mainItem}></MainItem>
    </View>
    </SafeAreaView>
    </NavigationContainer>