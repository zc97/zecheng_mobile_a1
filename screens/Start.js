import { Text, StyleSheet, View, TextInput, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'

// function 

export default function Start() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formText}>Name</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder='type your name'
          keyboardType='defualt'
          value={name}
          onChangeText={function (changedText) {
              setName(changedText);
          }}
        />
        { name.length < 2 ? 
          <Text> Please enter a vaild name </Text> : null
        }
        <Text style={styles.formText}>Email Address</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder='type your email'
          keyboardType='defualt'
        />
        <Text style={styles.formText}>Phone Number</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder='type your phone number'
          keyboardType='defualt' 
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer:{
    backgroundColor: 'gray',
    width: '80%',
    borderRadius: 10,        
    padding: 15,            
    marginVertical: 10,      
    marginHorizontal: 20,      
    elevation: 5,            
  },
  formText:{
    fontSize: 15,
    marginVertical: 15,
    color: 'purple',
  },
  formTextInput:{
    fontSize: 15,
    padding: 5,
    color: 'purple',
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
  },

})