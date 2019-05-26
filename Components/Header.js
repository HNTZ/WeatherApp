import React, { Component } from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons size={32} name="md-arrow-back" />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.town}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
    },
    buttonText: {
        color: '#000000'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})