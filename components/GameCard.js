import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

// GameCard component with desire styles for re-using in the game stages
export default function GameCard({ children }) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

// GameCard basic styles
const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.cardColor,
        alignItems: "center",
        borderRadius: 10,        
        padding: 20,            
        marginVertical: 20,      
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})