import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react'
import Start from './screens/Start';
import Confirm from './screens/Confirm';



export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Start');
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const register = (data) => {
    // setConfirmVisibility(true)
    setCurrentScreen('Confirm')
    setUserData(data)
  }

  const goBack = () => {
    setCurrentScreen('Start')
  }

  return (
    <View style={styles.container}>
      {currentScreen == 'Start' || currentScreen == 'Confirm' ? <Start registerPressed={register}></Start> : null}
      {currentScreen == 'Confirm' ? 
        <Confirm 
          userData={userData} 
          goBackHeadler={goBack}>
        </Confirm> : null
      }
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
