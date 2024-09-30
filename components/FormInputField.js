import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

// FormInputField with "title", "input", "hint" structure for information input
export default function FormInputField({title, value, InputHandler, errorMesaage}) {
    return (
        <View style={styles.inputFieldContainer}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.textInput}
                // placeholder='type your {title}'
                keyboardType='defualt'
                value={value}
                onChangeText={InputHandler}
            />
            {/* show hint with errorMesaage prop*/}
            {value.length ? <Text style={styles.hint}> {errorMesaage} </Text> : null} 
        </View>
    )
}

// FormInputField basic styles
const styles = StyleSheet.create({
    inputFieldContainer:{
        marginTop: 30,
    },
    text: {
        fontSize: 15,
        color: colors.text,
        marginButtom: 20,
    },
    textInput: {
        fontSize: 15,
        padding: 5,
        color: colors.text,
        borderBottomWidth: 2,
        borderBottomColor: colors.text,
    },
    hint: {
        color: 'dimgray'
    }

})