import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, ScrollView} from 'react-native';
import Axios from 'axios';

function PokemonTesting() {
    const [pokeName, setpokeName] = React.useState();

    const [images , setImages] = React.useState()

    React.useEffect(() => {
      Axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then (res => {
        console.log(res.data.results);
          setpokeName(res.data.results)
      })
      .catch(err =>{
          console.log(err);
      })
    }, [setpokeName])


    // React.useEffect(() => {
    //     Axios
    //     .get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`)
    //     .then (res => {
    //         console.log(res);
    //         setImages(res)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }, [])



  return (
    // <SafeAreaView>
    //     {/* <Image
    //     style = {styles.pic} 
    //     source={{uri: `$images.image`}} /> */}
    //     <Text key={names.id}>{names.name}</Text>
    // </SafeAreaView>

    <SafeAreaView>

         <FlatList 
         data = {pokeName}
         keyExtractor = {(item, index) => {
             return index.toString()
             }} 
         renderItem = {({ item }) => {
             console.log("item", item)
             return(
                <Text>{item.name}</Text>
         )
        }} />
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