import { Text, StyleSheet, View, TextInput, SafeAreaView, Button } from 'react-native'
import React, { Component, useState } from 'react'
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';
import GameButton from '../components/GameButton';
import GradientBackground from '../components/GradientBackground';

export default function Start({ registerPressed, userData }) {
    const [name, setName] = useState(userData.name || "");
    const [nameError, setNameError] = useState("");

    const [email, setEmail] = useState(userData.email || "");
    const [emailError, setEmailError] = useState('');

    const [phone, setPhone] = useState(userData.phone || "");
    const [phoneError, setPhoneError] = useState('');

    const [isNotARobot, setIsNotARobot] = useState(false);

    const isRegisterDisabled = !isNotARobot

    const handleInputName = (changedName) => {
        setName(changedName);
        const lettersReg = /^[A-Za-z]+$/;
        if (changedName.length < 2 || !lettersReg.test(changedName)) {
            setNameError('Please enter a vaild name');
        } else {
            setNameError("")
        }
    }

    const handleInputEmail = (changedEmail) => {
        setEmail(changedEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(changedEmail)) {
            setEmailError('Please enter a vaild email');
        } else {
            setEmailError("")
        }
    }

    const handleInputPhone = (changedPhone) => {
        setPhone(changedPhone);
        const phoneRegex = /^[0-9]{9}[2-9]$/;
        if (!phoneRegex.test(changedPhone)) {
            setPhoneError('Please enter a vaild phone number');
        } else {
            setPhoneError("")
        }
    }

    const handleReset = () => {
        setName("")
        setEmail("")
        setPhone("")
        setIsNotARobot(false)
    }

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Welcome</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formCard}>
                        <Text style={styles.formText}>Name</Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='type your name'
                            keyboardType='defualt'
                            value={name}
                            onChangeText={handleInputName}
                        />
                        {nameError.length ? <Text> {nameError} </Text> : null}

                        <Text style={styles.formText}>Email Address</Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='type your email'
                            keyboardType='defualt'
                            value={email}
                            onChangeText={handleInputEmail}
                        />
                        {email.length ? <Text> {emailError} </Text> : null}

                        <Text style={styles.formText}>Phone Number</Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='type your phone number'
                            keyboardType='defualt'
                            value={phone}
                            onChangeText={handleInputPhone}
                        />
                        {phone.length ? <Text> {phoneError} </Text> : null}

                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isNotARobot}
                                onValueChange={setIsNotARobot}
                            />
                            <Text style={styles.checkText}>I am not a robot</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <GameButton
                                title='RESET'
                                type='alert'
                                onPressHandler={handleReset}
                            />
                            <GameButton
                                title='REGISTER'
                                onPressHandler={() => {
                                    registerPressed({ name, email, phone },
                                        (nameError || emailError || phoneError || !name || !email || !phone));
                                }}
                                disabled={isRegisterDisabled}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        color: colors.headerColor,
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 3,
        width: '80%',
    },
    formCard: {
        backgroundColor: colors.cardColor,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formText: {
        fontSize: 15,
        marginVertical: 25,
        color: colors.text,
    },
    formTextInput: {
        fontSize: 15,
        padding: 5,
        color: colors.text,
        borderBottomWidth: 2,
        borderBottomColor: colors.text,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        fontSize: 15,
        padding: 10,
    },
    checkText: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }

})