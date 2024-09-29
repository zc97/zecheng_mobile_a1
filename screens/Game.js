import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native'
import React from 'react'
import GameCard from '../components/GameCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function Game({number}) {

    return (
        <LinearGradient
            colors={['#6495ed', '#4b0082']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.gameContainer}>
                <Button title='RESTART' color='blue'></Button>
                <GameCard>
                    <Text>Guess a number between 1 & 100 that is multiply of {number}</Text> 
                </GameCard>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientContainer:{
        flex: 1,
    },
    gameContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
})