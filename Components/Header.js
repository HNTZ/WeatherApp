import React, { Component } from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.buttonText} >Retour</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.navigation.state.routeName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ffffff',
        padding: 20,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#000000'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})