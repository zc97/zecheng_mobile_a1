import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GameCard({children}) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'gray',
        alignItems: "center",
        borderRadius: 10,        
        padding: 15,            
        marginVertical: 20,      
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})