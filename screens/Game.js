import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Alert, Image} from 'react-native'
import React, { useState } from 'react'
import GameCard from '../components/GameCard'
import { LinearGradient } from 'expo-linear-gradient'
import GameButton from '../components/GameButton'
import GradientBackground from '../components/GradientBackground'

export default function Game({lastNumber, targetNumber, restartHandler}) {
    // start, guess, wrong, correct, over
    const [gameState, setGameState] = useState("start")
    const [guessedNumber, setGuessedNumber] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(null)
    const [timer, setTimer] = useState(null)
    const [attemptsLeft, setAttemptsLeft] = useState(4)
    const [hint, setHint] = useState("")

    const handleStart = () => {
        setGameState((state) => "guess")
        setSecondsLeft(60)
        console.log({targetNumber});
        const interval = setInterval(() => {
            setSecondsLeft((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(interval)
                setGameState("over")
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

    const handleHint = () => {
        const parsedTargetNumber = parseInt(targetNumber)
        if (parsedTargetNumber >= 50) {
            setHint("The number is between 50 and 100")
        } else {
            setHint("The number is between 1 and 49")
        }
    }
    
    const handleSubmit = () => {
        const submittedNumber = parseInt(guessedNumber);
        const parsedLastNumber = parseInt(lastNumber);
        setAttemptsLeft(attempts => attempts-1)
        if (submittedNumber === targetNumber) {
            clearInterval(timer)           
            setGameState('correct')
        } else if (attemptsLeft === 1) {
            clearInterval(timer)
            setGameState('over')
        } else if (isNaN(submittedNumber) 
            || submittedNumber < 1 
            || submittedNumber > 100 
            || (submittedNumber%parsedLastNumber) !== 0) {
            Alert.alert('Invalid input', 'Please enter a number between 1 and 100 that is mutiply of ' + lastNumber)
        } else {
            setGameState('wrong')
        }
    }

    const handleTryAgain = () => {
        setGameState('guess')
    }

    return (
        <GradientBackground>
            <SafeAreaView style={styles.gameContainer}>
                <View style={styles.buttonContainer}>
                    <GameButton title='RESTART' onPressHandler={restartHandler}/>
                </View>

                {gameState === "start" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>Guess a number between 1 & 100 that is multiply of {lastNumber}</Text>
                            <Text style={styles.cardText}>You have 4 chances in 60s</Text>
                            <GameButton title='START' onPressHandler={handleStart}/>
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
                            {hint ? <Text>{hint}</Text> : null}
                            <Text style={styles.cardText}>Attempts Left: {attemptsLeft}</Text>
                            <Text style={styles.cardText}>Timer: {secondsLeft}</Text>
                            <GameButton 
                                title='USE A HINT' 
                                onPressHandler={handleHint} 
                                disabled={hint ? true : false}/>
                            <GameButton title='SUBMIT GUESS' onPressHandler={handleSubmit}/>
                        </GameCard>
                    </View> 
                : null}
                
                {gameState === "wrong" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>You did not guess correct!</Text>
                            <Text style={styles.cardText}>You should guess {(guessedNumber < targetNumber) ? "higher" : "lower"}</Text>
                            <GameButton title='TRY AGAIN' onPressHandler={handleTryAgain}/>
                            <GameButton title='END THE GAME' onPressHandler={restartHandler}/>
                        </GameCard>
                    </View> 
                : null}

                {gameState === "correct" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>Your guessed correct!</Text>
                            <Text style={styles.cardText}>Attempts used: {4 - attemptsLeft}</Text>
                            <Image style={styles.image} source={{ uri: "https://picsum.photos/id/"+targetNumber+"/100/100"}}></Image>
                            <GameButton title='NEW GAME' onPressHandler={restartHandler}/>
                        </GameCard>
                    </View> 
                : null}
            
                {gameState === "over" ? 
                    <View style={styles.cardContainer}>
                        <GameCard>
                            <Text style={styles.cardText}>The game is over!</Text>
                            <Text style={styles.cardText}>You are out of {!attemptsLeft ? 'attempts' : 'time'}</Text>
                            <Image style={styles.image} source={require('../assets/unamused-face.png')}></Image>
                            <GameButton title='NEW GAME' onPressHandler={restartHandler}/>
                        </GameCard>
                    </View> 
                : null}


            </SafeAreaView>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
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
        margin: 10,
    }
})