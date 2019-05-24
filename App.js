import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Start from "./Screens/Start"
import Recherche from "./Screens/Recherche"
import Resultat from "./Screens/Resultat"

const MainNavigator = createStackNavigator({
  Start: {
    screen: Start,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  Recherche: {
    screen: Recherche,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  Resultat: {
    screen: Resultat,
    navigationOptions: { header: null, gesturesEnabled: false }
  }
})

const App = createAppContainer(MainNavigator)

export default App