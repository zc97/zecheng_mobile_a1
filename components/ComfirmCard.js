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
        padding: 20
    },
})