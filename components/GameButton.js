import {StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import colors from '../styles/colors'

// GameButton component with adjusted style which fits the application
export default function GameButton({onPressHandler, title, type = 'regular', disabled = false}) {
  return (
    <Button
        onPress = {() => onPressHandler()}
        title={title} 
        style={styles.button} 
        disabled={disabled}
        color={type === 'alert' ? 'red' : 'blue'} // set the button color to red if it is "alter" type
    >
    </Button>
  )
}

// GameButton basic styles
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 3,
        elevation: 3,
    },
})