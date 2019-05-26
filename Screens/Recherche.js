import React from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import Towns from "../Components/Towns"

export default class PageStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      town: "",
      error: null,
    }
  }

  validate = () => {
    let { town } = this.state

    if (town !== "") {
      this.props.navigation.navigate("Resultat", { town })
    } else {
      this.setState({
        error: true
      })
    }
  }

  changeTown = e => {
    this.setState({
      town: e.nativeEvent.text,
      error: false
    })
  }

  getWeather = town => {
    this.props.navigation.navigate("Resultat", { town })
  }

  render() {

    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Meteo</Text>
          <View style={styles.form}>
            <Text style={styles.error}>
              {this.state.error && "Veuillez bien remplir le champ"}{" "}
            </Text>
            <View style={styles.search}>
              <TextInput
                style={styles.input}
                placeholder="Strasbourg"
                onChange={this.changeTown}
              />
              <TouchableOpacity style={styles.icon} onPress={this.validate}>
                <Ionicons name="md-search" size={32}/>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
        <View style={styles.selection}>
          <Text style={styles.selectionTitle}>Recherche rapide</Text>
          <Towns getWeather={this.getWeather}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
      height: '100%'
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
    marginRight: 50,
    marginBottom: 20,
    marginLeft: 50,
  },
  title: {
    fontSize: 70,
    fontFamily: 'averta-semi',
    marginTop: '50%'
  },
  search: {
    flexDirection: "row",
    width: '80%'
  },
  icon: {
    padding: 5
  },
  form: {
    marginTop: 100,
  },
  error: {
    color: "red",
    fontFamily: 'averta-semi'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flex: 1,
    fontSize: 24,
    fontFamily: 'averta',
  },
  selection: {
    backgroundColor: 'blue',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingBottom: 20,
  },
  selectionTitle: {
    fontFamily: 'averta-semi',
    fontSize: 24,
    color: 'white',
    marginLeft: 50,
    paddingTop: 30,
    paddingBottom: 50
  },
})
