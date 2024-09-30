import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export default function GradientBackground({ children }) {
  return (
    <LinearGradient
            colors={['#6495ed', '#4b0082']}
            style={styles.gradientContainer}>
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({})