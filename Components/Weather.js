import React from 'react'
import {View, Text} from 'react-native'
import moment from "moment" 

export default Weather= (props) => (
    <View>
      <TodayWeather {...props.today} />
      <NextWeather days={props.next} />
    </View>
  )
  
const TodayWeather = ({ temp, humidity }) => (
    <View>
      <Text>Temperature: {(temp.day - 273.15).toFixed(2)}°C</Text>
      <Text>Max: {(temp.max - 273.15).toFixed(2)}°C</Text>
      <Text>Min: {(temp.min - 273.15).toFixed(2)}°C</Text>
      <Text>Humidité: {humidity}%</Text>
    </View>
  )
  
const NextWeather = ({days}) => (
    <View>
      <Text>Prochains jours</Text>
      {
        days.map(day => (
          <DayWeather {...day} key={day.dt} />
        ))
      }
    </View>
  )
  
const DayWeather = ({temp, dt}) => (
    <View>
      <Text>{moment.unix(dt).format('DD/MM')}</Text>
      <Text>Temperature max: {(temp.max - 273.15).toFixed(2)}</Text>
      <Text>Temperature min: {(temp.min - 273.15).toFixed(2)}</Text>
    </View>
  )