import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';


export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Start');
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
    const [targetNumber, setTargetNumber] = useState(null);
    const [lastNumber, setLastNumber] = useState(null);


    const handleRegister = (data, ifInvalid) => {
        if (ifInvalid) {
            Alert.alert('Invalid input', 'Some information you entered are invalid or empty');
        } else {
            setCurrentScreen('Confirm')
            setUserData(data)
            setLastNumber(parseInt(data.phone[9]))
        }
    }

    const handleGoBack = () => {
        setCurrentScreen('Start')
    }

    const handleContinue = () => {
        setCurrentScreen('Game')
        setTargetNumber(Math.floor(Math.random() * Math.floor(100 / lastNumber)) * lastNumber)
    }

    const handleRestart = () => {
        setUserData({ name: '', email: '', phone: '' })
        setTargetNumber(null)
        setCurrentScreen('Start')
    }


    return (
        <View style={styles.container}>
            {currentScreen == 'Start' || currentScreen == 'Confirm' ?
                <Start
                    registerPressed={handleRegister}
                    userData={userData}
                >
                </Start>
                : null
            }
            {currentScreen == 'Confirm' ?
                <Confirm
                    userData={userData}
                    goBackHeadler={handleGoBack}
                    continueHeadler={handleContinue}
                >
                </Confirm>
                : null
            }
            {currentScreen == 'Game' ?
                <Game
                    lastNumber={lastNumber}
                    targetNumber={targetNumber}
                    restartHandler={handleRestart}
                >
                </Game>
                : null
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
