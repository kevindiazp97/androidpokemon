import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, TouchableHighlight, StyleSheet, SafeAreaView, FlatList, TextInput, View, Text, Button, Image} from 'react-native';
import axios from 'axios';

function DataFethcing() {
    const [post, setPost] = React.useState({
        name: "",
        images: ""
    });
    const [Idtext, setId] = React.useState({
        id: ''
    });
    // const [idFromButtonClick, setIdFromButtonClick] = useState({
    //     title: ''
    // })
    
    // const handleCLick = () => {
    //     setIdFromButtonClick(Idtext)
    // }
    React.useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/2`)
      .then (res => {
          console.log(res);
          setPost({
              name: res.data.species.name,
              images: res.data.sprites.front_shiny
          })
      })
      .catch(err =>{
          console.log(err);
      })
    }, [])

  return (
      <View>
          {/* <FlatList 
          //@ts-ignore : Unreachable code error
          data = {post}
          renderItem = {({item}) => 
          <Text style = {styles.item}>{item.title}</Text>} /> */}
          <TextInput
        //   style = {styles.input}
        //   keyboardType = 'numeric'
        //   onSubmitEditing={() => Idtext()}
        //   onChangeText = {newText => setId(newText)}
          />
          {/* <Button title = "Get Data" onPress={handleCLick} /> */}
          {/* <TouchableHighlight onPress={handleCLick}>
              <View style = {styles.button}>
                  <Text>Fetch Data</Text>
              </View>
          </TouchableHighlight> */}
          {/* <TouchableWithoutFeedback onPress={handleCLick}>
              <View style = {styles.button}>
                  <Text numberOfLines={5}>Fetch Data</Text>
              </View>
          </TouchableWithoutFeedback> */}
          <Text>
              {post.name}
          </Text>
          {/* <Image source={{uri: `$post.images`} /> */}
      </View>
  )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    item: {
        padding:10,
        fontSize: 18,
        height : 44
    }
})

export default DataFethcing