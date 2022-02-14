import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import Axios from 'axios';

function PokemonTesting() {
    const [post, setPost] = React.useState({
        name : '',
        images: ''
    });

    React.useEffect(() => {
      Axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then (res => {
        console.log(res);
          setPost({
              name: res.data.species.name,
              images: res.data.sprites.front_shiny,
          })
      })
      .catch(err =>{
          console.log(err);
      })
    }, [])

  return (
    <SafeAreaView>
        {post.images.length > 0 && (
        <Image
        style = {styles.pic} 
        source={{uri: `$post.images`}} />
        )}
        <Text>{`${post.name}`}</Text>
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