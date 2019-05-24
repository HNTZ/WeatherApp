import React from "react"
import { View, StyleSheet, Text, TextInput, Button } from "react-native"
import Towns from "../Components/Towns"

export default class PageStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      town: "",
      error: null
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
      town: e.nativeEvent.text
    })
  }

  getWeather = town => {
    this.props.navigation.navigate("Resultat", { town })
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Rechercher la meteo</Text>
          <View style={styles.form}>
            <Text style={styles.error}>
              {this.state.error && "Veuillez bien remplir le champ"}{" "}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Votre town"
              onChange={this.changeTown}
            />
            <Button onPress={this.validate} title="Rechercher" />
          </View>
        </View>
        <Towns getWeather={this.getWeather}/>
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
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  form: {
    marginTop: 150,
    width: "50%"
  },
  error: {
    color: "red"
  },
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  }
})
