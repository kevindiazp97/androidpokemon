import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, ScrollView} from 'react-native';
import Axios from 'axios';

function PokemonTesting() {
    const [pokeName, setpokeName] = React.useState([""]);

    const [images , setImages] = React.useState({
        image :''
    })

    React.useEffect(() => {
      Axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
      .then (res => {
        console.log(res.data.results);
          setpokeName(res.data.results.name)
      })
      .catch(err =>{
          console.log(err);
      })
    }, [setpokeName])


    // React.useEffect(() => {
    //     Axios
    //     .get('https://pokeapi.co/api/v2/pokemon/')
    //     .then (res => {
    //         setImages({
    //             image: res.data.PokemonSprites.front_shiny,
    //         })
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
                //@ts-expect-error
                <Text>{item.name}</Text>
            )
        }} />

        {/* <ScrollView>
            <Text>{pokeName}</Text>
            {names &&
            names.map((items, i) => {
                return<>
                <Text>{items}</Text>
                </>
            })}
        </ScrollView> */}
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