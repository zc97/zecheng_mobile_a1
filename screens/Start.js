import { Text, StyleSheet, View, TextInput, SafeAreaView, Button} from 'react-native'
import React, { Component, useState } from 'react'
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

// function nameMessage() {}

export default function Start({registerPressed}) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState('');

  const [isNotARobot, setIsNotARobot] = useState(false);


  const handleInputName = (changedName) => {
    setName(changedName);
    const lettersReg = /^[A-Za-z]+$/;
    if (changedName.length < 2 || !lettersReg.test(changedName)) {
      setNameError('Please enter a vaild name');
    } else {
      setNameError("")
    }
  }

  const handleInputEmail = (changedEmail) => {
    setEmail(changedEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(changedEmail)) {
      setEmailError('Please enter a vaild email');
    } else {
      setEmailError("")
    }
  }

  const handleInputPhone = (changedPhone) => {
    setPhone(changedPhone);
    const phoneRegex = /^[0-9]{9}[2-9]$/;
    if (!phoneRegex.test(changedPhone)) {
      setPhoneError('Please enter a vaild phone number');
    } else {
      setPhoneError("")
    }
  }

  const handleReset = () => {
    setName("")
    setEmail("")
    setPhone("")
    setIsNotARobot(false)
  }

  return (
    <LinearGradient
    colors={['#6495ed', '#4b0082']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
        <View style={styles.formContainer}>
          <View style={styles.formCard}>
            <Text style={styles.formText}>Name</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder='type your name'
              keyboardType='defualt'
              value={name}
              onChangeText={handleInputName}
            />
            { nameError.length ? <Text> {nameError} </Text> : null}

            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder='type your email'
              keyboardType='defualt'
              value={email}
              onChangeText={handleInputEmail}
            />
            { email.length ? <Text> {emailError} </Text> : null}

            <Text style={styles.formText}>Phone Number</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder='type your phone number'
              keyboardType='defualt' 
              value={phone}
              onChangeText={handleInputPhone}
            />
            { phone.length ? <Text> {phoneError} </Text> : null}

            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isNotARobot}
                onValueChange={setIsNotARobot}
              />
              <Text style={styles.checkText}>I am not a robot</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button 
                  title='RESET'
                  color='red'
                  onPress={() =>{
                    handleReset();
                  }}
              />
              <Button 
                title='REGISTER'
                color='blue'
                onPress={() =>{
                  registerPressed(name);
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradientContainer:{
    flex: 1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
  },
  header:{
    flex: 1,
    fontSize: 20,
    color: '#5C5CFF',
    fontWeight: 'bold',
  },
  formContainer:{
    flex: 6,
    width: '80%',       
  },
  formCard:{
    backgroundColor: 'gray',
    borderRadius: 10,        
    padding: 15,            
    marginVertical: 10,      
    marginHorizontal: 20,      
    elevation: 5,  
  },
  formText:{
    fontSize: 15,
    marginVertical: 25,
    color: 'purple',
  },
  formTextInput:{
    fontSize: 15,
    padding: 5,
    color: 'purple',
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox:{
    fontSize: 15,
    padding: 10,
  },
  checkText:{
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  }

})