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
    setConfirmVisibility(true)
    setUserData(data);
  }

  const goBack = () => {
    setConfirmVisibility(false)
  }

  return (
    <View style={styles.container}>
      {currentScreen == 'Start' ? <Start registerPressed={register}></Start> : null}
      <Confirm 
        userData={userData} 
        confirmVisibility={confirmVisibility} 
        goBackHeadler={goBack}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
