import {StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import colors from '../styles/colors'

export default function GameButton({onPressHandler, title, type = 'regular', disabled = false}) {
  return (
    <Button
        onPress = {() => onPressHandler()}
        title={title} 
        style={styles.button} 
        disabled={disabled}
        color={type === 'alert' ? 'red' : 'blue'}
    >
    </Button>
  )
}

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