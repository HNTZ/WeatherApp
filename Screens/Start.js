import React from "react"
import { StyleSheet, Image, View } from "react-native"

export default class PageConnect extends React.Component {
  constructor(props) {
    super(props)
    this._loadsUserAsync()
  }

  _loadsUserAsync = async () => {

    this.props.navigation.navigate("Recherche")
  }

  render() {
    return (
      <View style={styles.container}>
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
