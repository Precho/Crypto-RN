import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switchs', key: '3' }
  ]);
  const [waluty,setWaluty]= useState({});
  const [arajka, setArajka] = useState([]);
  const [newArray,setNewArray]=useState([]);

  useEffect(()=> {

    fetch("https://openexchangerates.org/api/latest.json?app_id=62a0ee8d988c4da8b4a70a483f3e40d4&base=USD")
    .then(res => res.json())
    .then(res => setWaluty(res.rates));

  
    for (let [key, value] of Object.entries(waluty)) {
      newArray.push((`${key}: ${value}`));
    }
    console.log(newArray);
    console.log('koniec');
  

},[]) // uppdating every one hour
  return (
   
        <View style={styles.container}>
        
        <Header/>
        <View style={styles.content}>
        <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({item})=> (
                  <Text style={styles.item}>item.text</Text>
                )}
            />
        </View>
        </View>

        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  content: {
    padding:40,

  },
  list: {
    marginTop:20,
  },
  item: {
    textAlign: "center",
    fontSize: 25

  }

});
