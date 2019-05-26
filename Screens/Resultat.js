import React, { Component } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

import Header from "../Components/Header"
import Towns from "../Components/Towns"
import Weather from '../Components/Weather'

export default class PageAccueil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      town: this.props.navigation.getParam("town", "Aucune ville")
    }
  }

  componentDidMount() {
    this.getWeatherData()
  }

  getWeatherData = town => {
    if (town) {
      this.setState({
        town
      })
    }
    this.setState({
      loading: true
    })
    let url =
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      (town || this.state.town) +
      "&unites=metric&appid=6cd6492e43cd883fa81c9fc1696d358e"
    fetch(url)
      .then(response => response.json())
      .then(json => {
          console.log(json)
        this.handleResponse(json)
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false,
          error: JSON.stringify(error)
        })
      })
  }

  handleResponse(data) {
    if (data.list) {
      this.setState({
        loading: false,
        today: data.list[0],
        next: data.list.slice(1)
      })
    } else {
      this.setState({
        loading: false,
        error: data
      })
    }
  }

  render() {
    let { loading, town, error } = this.state
    return (
      <View style={styles.bg}>
        <Header navigation={this.props.navigation} town={this.state.town} />
        <View style={styles.container}>
          {loading ? (
            <Text>Chargement</Text>
          ) : error ? (
            <Error {...this.state} refresh={this.getWeatherData} />
          ) : (
            <Weather {...this.state} />
          )}
        </View>
      </View>
    )
  }
}

const Error = ({ error, refresh }) => (
  <View>
    <Text>
      Nous avons recontré un problème, veuillez réitérer votre recherche.
    </Text>
    <Text>{error.message || JSON.stringify(error)}</Text>
    <Button onPress={refresh} title="Rafraichir" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: '#fff'
  },
  bg: {
    height: '100%',
    backgroundColor: '#eee',
    flex: 1,
  }
})
