import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

/* 
    GradientBackground component which creates
    different of linear gradient backgrounds
    according to its type prop
*/
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

// GradientBackground basic type
const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    }
})