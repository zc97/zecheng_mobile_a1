import { StyleSheet, Text, View, SafeAreaView, Button, TextInput} from 'react-native'
import React, { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function Game({lastNumber, targetNumber}) {
    // start, guess, fail, correct, over
    const [gameState, setGameState] = useState("start")

    const [guessedNumber, setGuessedNumber] = useState(0)

    const [secondsLeft, setSecondsLeft] = useState(60)
    const [timer, setTimer] = useState(null)
    const [attemptsLeft, setAttemptsLeft] = useState(4)


    const handleStart = () => {
        setGameState("guess")
        setSecondsLeft(60)

        const interval = setInterval(() => {
            setSecondsLeft((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(interval);
                setGameState("over")
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
      
        setTimer(interval);
    }

    const handleInputNumber = (number) => {
        setGuessedNumber(number)
    }
    
    const handleSubmit = () => {
        if (guessedNumber === targetNumber) {
            setGameState('correct')
        }
    }

    return (
        <LinearGradient
            colors={['#6495ed', '#4b0082']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.gameContainer}>
                <View style={styles.buttonContainer}>
                    <Button title='RESTART' color='blue'/>
                </View>

                {gameState === "start" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>Guess a number between 1 & 100 that is multiply of {lastNumber}</Text>
                            <Text style={styles.cardText}>You have 4 chances in 60s</Text>
                            <Button title='START' onPress={handleStart}></Button>  
                        </GameCard>
                    </View> : null}

                {gameState === "guess" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>Guess a number between 1 & 100 that is multiply of {lastNumber}</Text>
                            <TextInput
                                style={styles.guessInput}
                                keyboardType='defualt' 
                                value={guessedNumber}
                                onChangeText={handleInputNumber}
                            />
                            <Text style={styles.cardText}>{secondsLeft}</Text>
                            <Button title='USE A HINT'></Button>
                            <Button title='SUBMIT GUESS' onPress={handleSubmit}></Button>  
                        </GameCard>
                    </View> : null}
            
                {gameState === "over" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>The game is over!</Text>
                            <TextInput
                                style={styles.guessInput}
                                keyboardType='defualt' 
                                value={guessedNumber}
                                onChangeText={handleInputNumber}
                            />
                            <Text style={styles.cardText}>You are out of {!secondsLeft ? 'time' : 'attempts'}</Text>
                            <Button title='NEW GAME'></Button>  
                        </GameCard>
                    </View> : null}

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
    },
    buttonContainer:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    cardContainer:{
        flex: 2,
        alignItems: "center",
    },
    cardText: {
        marginVertical: 10,
    }
})