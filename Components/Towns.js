import React from 'react';
import {TouchableOpacity, Text, ScrollView, StyleSheet} from 'react-native'

export default Towns = ({getWeather}) => {
    const towns = ['Paris', 'New York', 'Londres', 'Tokyo', 'Moscou']
    return (
        <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        {towns.map(town => (
            <TouchableOpacity key={town} style={styles.town} onPress={() => getWeather(town)}>
                <Text>{town}</Text>
            </TouchableOpacity>
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
        backgroundColor: '#eee'
    }
})