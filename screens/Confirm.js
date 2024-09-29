import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

export default function Confirm({name, confirmVisibility}) {
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true}>
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text>{name}</Text>
                <Button title="CONTINUE"/>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    modalContainer: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 20
    }
})