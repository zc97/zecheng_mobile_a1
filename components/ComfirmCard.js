import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function ComfirmCard({children}) {
  return (
    <View style={styles.confirmCard}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    confirmCard: {
        width: '85%',
        backgroundColor: 'gray',
        borderRadius: 5,
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