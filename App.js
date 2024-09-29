import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react'
import Start from './screens/Start';
import Confirm from './screens/Confirm';



export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [comfirmedName, setComfirmedName] = useState("");

  const register = (name) => {
    setConfirmVisibility(true)
    setComfirmedName(name)
  }

  return (
    <View style={styles.container}>
      <Start registerPressed={register}></Start>
      <Confirm name={comfirmedName} confirmVisibility={confirmVisibility}></Confirm>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
