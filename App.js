import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Start');
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: ''});
  const [targetNumber, setTargetNumber] = useState(0);

  const HandleRegister = (data, ifInvalid) => {
    if (ifInvalid) {
      Alert.alert('Invalid input', 'Some information you entered are invalid or empty');
    } else {
      setCurrentScreen('Confirm')
      setUserData(data)
    }
  }

  const HandleGoBack = () => {
    setCurrentScreen('Start')
  }

  const HandleContinue = () => {
    setCurrentScreen('Game')
    setTargetNumber(Math.floor(Math.random() * 12) * parseInt(userData.phone[9]))
    // console.log(Math.floor(Math.random() * 12) * parseInt(userData.phone[9]))
  }


  return (
    <View style={styles.container}>
      {currentScreen == 'Start' || currentScreen == 'Confirm' ?
        <Start registerPressed={HandleRegister}>
        </Start> 
        : null
      }
      {currentScreen == 'Confirm' ? 
        <Confirm 
          userData={userData} 
          goBackHeadler={HandleGoBack}
          continueHeadler={HandleContinue}
        >
        </Confirm> 
        : null
      }
      {currentScreen == 'Game' ? 
        <Game 
          lastNumber = {parseInt(userData.phone[9])}
          targetNumber={targetNumber}
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
