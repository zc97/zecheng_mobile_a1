import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export default function GradientBackground({ children, type = 'regular' }) {
    let gradientColor = (type === 'modal' ? ['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)'] : ['#6495ed', '#4b0082'])

    return (
        <LinearGradient
            colors={gradientColor}
            style={styles.gradientContainer}>
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    }
})