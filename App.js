import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';

/*
    Main App component, 3 primary screens are rendered for the game:
    1. Start screen,
    2. Comfirm screen,
    3. Game screen.
*/ 
export default function App() {
    // Conditional rendering according the current currentScreen name
    const [currentScreen, setCurrentScreen] = useState('Start');
    // User's info
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
    // Last phone digit and target number
    const [lastNumber, setLastNumber] = useState(null);
    const [targetNumber, setTargetNumber] = useState(null);
    

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
        setTargetNumber(Math.floor(Math.max(1, Math.random()) * Math.floor(100 / lastNumber)) * lastNumber)
    }

    const handleRestart = () => {
        setUserData({ name: '', email: '', phone: '' })
        setTargetNumber(null)
        setCurrentScreen('Start')
    }


    return (
        <View style={styles.container}>
            {/* render Start screen if currentScreen is 'start' */}
            {currentScreen == 'Start' || currentScreen == 'Confirm' ?
                <Start
                    registerPressed={handleRegister}
                    userData={userData}
                >
                </Start>
                : null
            }

            {/* render Confirm screen if currentScreen is 'confirm' */}
            {currentScreen == 'Confirm' ?
                <Confirm
                    userData={userData}
                    goBackHeadler={handleGoBack}
                    continueHeadler={handleContinue}
                >
                </Confirm>
                : null
            }

            {/* render Game screen if currentScreen is 'game' */}
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

// based container styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
