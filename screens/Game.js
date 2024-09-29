import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Alert, Image} from 'react-native'
import React, { useState } from 'react'
import GameCard from '../components/GameCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function Game({lastNumber, targetNumber}) {
    // start, guess, wrong, correct, over
    const [gameState, setGameState] = useState("start")

    const [guessedNumber, setGuessedNumber] = useState(60)

    const [secondsLeft, setSecondsLeft] = useState(null)
    const [timer, setTimer] = useState(null)
    const [attemptsLeft, setAttemptsLeft] = useState(4)

    const handleStart = () => {
        setGameState("guess")
        setSecondsLeft(60)
        console.log({targetNumber});
        const interval = setInterval(() => {
            setSecondsLeft((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(interval)
                if (gameState === "guess"){
                    setGameState("over")
                }
                return null
              }
              return prevTime - 1
            });
          }, 1000);
      
        setTimer(interval);
    }

    const handleInputNumber = (number) => {
        setGuessedNumber(number)
    }
    
    const handleSubmit = () => {
        const submittedNumber = parseInt(guessedNumber);
        const parsedLastNumber = parseInt(lastNumber);

        setAttemptsLeft(attempts => attempts-1)
        if (isNaN(submittedNumber) 
            || submittedNumber < 1 
            || submittedNumber > 100 
            || (submittedNumber%parsedLastNumber) !== 0) {
            Alert.alert('Invalid input', 'Please enter a number between 1 and 100 that is mutiply of ' + lastNumber)
        } else if (submittedNumber === targetNumber) {
            setGameState('correct')
        } else if (attemptsLeft === 1) {
            setGameState('over')
        } else {
            setGameState('wrong')
        }
    }

    const handleTryAgain = () => {
        setGameState('guess')
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
                    </View> 
                : null}

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
                            <Text style={styles.cardText}>Attempts Left: {attemptsLeft}</Text>
                            <Text style={styles.cardText}>Timer: {secondsLeft}</Text>
                            <Button title='USE A HINT'></Button>
                            <Button title='SUBMIT GUESS' onPress={handleSubmit}></Button>  
                        </GameCard>
                    </View> 
                : null}
                
                {gameState === "wrong" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>You did not guess correct!</Text>
                            <Text style={styles.cardText}>You should guess {(guessedNumber < targetNumber) ? "higher" : "lower"}</Text>
                            <Button title='TRY AGAIN' onPress={handleTryAgain}></Button>
                            <Button title='END THE GAME'></Button>
                        </GameCard>
                    </View> 
                : null}

                {gameState === "correct" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>Your guessed correct!</Text>
                            <Text style={styles.cardText}>Attempts used: {4 - attemptsLeft}</Text>
                            <Image style={styles.image} source={{ uri: "https://picsum.photos/id/"+targetNumber+"/100/100"}}></Image>
                            <Button title='NEW GAME'></Button>
                        </GameCard>
                    </View> 
                : null}
            
                {gameState === "over" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>The game is over!</Text>
                            <Text style={styles.cardText}>You are out of {!attemptsLeft ? 'attempts' : 'time'}</Text>
                            <Button title='NEW GAME'></Button>
                        </GameCard>
                    </View> 
                : null}


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
    },
    guessInput: {
        fontSize: 15,
        padding: 5,
        color: 'purple',
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
    },
    image: {
        width: 100,
        height: 100,
    }
})