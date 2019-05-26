import React from "react"
import { StyleSheet, Image, View, StatusBar } from "react-native"
import {Font} from 'expo'

export default class PageConnect extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await Font.loadAsync({
      'averta': require('../assets/fonts/averta-light-webfont.ttf'),
      'averta-semi': require('../assets/fonts/averta-semibold-webfont.ttf'),
      'ionicons': require('../node_modules/@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this._loadsUserAsync()
  }

  _loadsUserAsync = async () => {

    this.props.navigation.navigate("Recherche")
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require("../assets/icon.png")} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 228,
    height: 93
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
