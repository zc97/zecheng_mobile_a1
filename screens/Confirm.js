import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import ComfirmCard from '../components/ComfirmCard';
import GameButton from '../components/GameButton';
import GradientBackground from '../components/GradientBackground';

export default function Confirm({ userData, goBackHeadler, continueHeadler }) {
    return (
        <Modal animationType="slide" transparent={true}>
            {/* <LinearGradient
                colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
                style={styles.gradientContainer}
            > */}
            <GradientBackground
                type='modal'
            >
                <View style={styles.container}>
                    <ComfirmCard>
                        <Text>Hello {userData.name}</Text>
                        <Text>Here is the information you entered:</Text>
                        <Text>{userData.email}</Text>
                        <Text>{userData.phone}</Text>
                        <Text>If it is not correct, please go back and edit them</Text>
                        <View style={styles.buttonContainer}>
                            <GameButton title="GO BACK" type="alert" onPressHandler={goBackHeadler}/>
                            <GameButton title="CONTINUE" onPressHandler={continueHeadler}/>
                        </View>
                    </ComfirmCard>
                </View>
            {/* </LinearGradient> */}
            </GradientBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
    }
})