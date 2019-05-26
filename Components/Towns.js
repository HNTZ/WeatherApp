import React from 'react';
import {TouchableHighlight, Text, ScrollView, StyleSheet} from 'react-native'

export default Towns = ({getWeather}) => {
    const towns = ['Paris', 'New York', 'Londres', 'Tokyo', 'Moscou']
    return (
        <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        {towns.map(town => (
            <TouchableHighlight key={town} style={styles.town} onPress={() => getWeather(town)}>
                <Text style={styles.text}>{town}</Text>
            </TouchableHighlight>
        ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        height: 120,
    },
    town: {
        height: 110,
        width: 120,
        borderRadius: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8774A6',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'averta-semi'
    }
})