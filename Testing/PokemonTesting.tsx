import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, ScrollView} from 'react-native';
import Axios from 'axios';

function PokemonTesting() {
    const [pokeName, setpokeName] = React.useState();

    const [images , setImages] = React.useState()
    
    const [id, setId] = React.useState(1)

    React.useEffect(() => {
      Axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then (res => {
        console.log(res.data.results);
          setpokeName(res.data.results)
      })
      .catch(err =>{
          console.log(err);
      })
    }, [setpokeName])

    const namepokemonid = () => {
      var i = 0;
      while (i<5){
        return (
          {i}
        )
      }
    } 

    React.useEffect(() => {
        Axios
        .get(`https://pokeapi.co/api/v2/pokemon/${namepokemonid}/`)
        .then (res => {
            console.log(res.data.sprites.front_shiny);
            setImages(res.data.sprites.front_shiny)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [setImages])



  return (

    <SafeAreaView>
      <FlatList 
      data = {pokeName}
      keyExtractor = {(item, index) => {
        return index.toString()
      }} 
      renderItem = {({ item }) => {
      //  console.log("item", item)
       return(
        <Text>{item.name}</Text>
        )
        }} />
         <Image
         style = {styles.pic} 
         source={{uri: `${images}`}} />
         <Text>{namepokemonid}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    item: {
        padding : 10,
        fontSize : 20,
        height: 44
    },
    pic: {
        width : 50,
        height : 50
    }
})

export default PokemonTesting
