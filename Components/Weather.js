import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import moment from "moment" 
import {Ionicons} from '@expo/vector-icons'

export default Weather= (props) => (
    <React.Fragment>
      <TodayWeather {...props.today} />
      <NextWeather days={props.next} />
    </React.Fragment>
  )
  
const TodayWeather = ({ temp, dt, humidity, weather }) => (
    <View style={styles.containerToday}>
      <View style={{...styles.row, ...styles.today}}>
        <Text style={styles.todayTemp}>{(temp.day - 273.15).toFixed(1)}°<Text style={styles.celcius}>C</Text></Text>
        <View style={styles.date}>
          <Text style={styles.todayDay}>{moment.unix(dt).format('dddd')}</Text>
          <Text style={styles.todayDate}>{moment.unix(dt).format('DD/MM')}</Text>
        </View>
      </View>
      <Text style={styles.todayWeather}>{weather[0].main}</Text>
      <View style={styles.row}>
        <Text style={styles.todayMax}><Ionicons name="md-arrow-dropup" style={styles.todayIcon} color="green" /> {(temp.max - 273.15).toFixed(2)}°</Text>
        <Text style={styles.todayMin}><Ionicons name="md-arrow-dropdown" style={styles.todayIcon} color="red" /> {(temp.min - 273.15).toFixed(2)}°</Text>
        <Text style={styles.humidity}><Ionicons name="md-water" style={styles.todayIcon} color="#4444ff" /> {humidity}%</Text>
      </View>
      <Text></Text>
    </View>
  )
  
const NextWeather = ({days}) => (
    <React.Fragment>
      <Text style={styles.nextTitle}>Prochains jours</Text>
      <ScrollView  contentContainerStyle={{flexGrow: 3}}>
        {
          days.map(day => (
            <DayWeather {...day} key={day.dt} />
          ))
        }
      </ScrollView>
    </React.Fragment>
  )
  
const DayWeather = ({temp, dt, weather}) => (
    <View style={styles.containerNext}>
      <Text style={styles.nextDateDay}>{moment.unix(dt).format('ddd')}</Text>
      <Text style={styles.nextDate}>{moment.unix(dt).format('DD/MM')}</Text>
      <View style={{...styles.row, ...styles.nextTemp}}>
        <Text style={styles.nextWeather}>{weather[0].main}</Text>
        <Text style={styles.todayMax}><Ionicons name="md-arrow-dropup" style={styles.todayIcon} color="green" /> {(temp.max - 273.15).toFixed(2)}°</Text>
        <Text style={styles.todayMin}><Ionicons name="md-arrow-dropdown" style={styles.todayIcon} color="red" /> {(temp.min - 273.15).toFixed(2)}°</Text>
      </View>
    </View>
  )

const styles = StyleSheet.create({
  containerToday: {
    marginTop: 30,
    marginBottom: 20,
    flexGrow: 1
  },
  todayTemp: {
    fontSize: 90,
    fontFamily: 'averta-semi',
    position: 'relative'
  },
  celcius: {
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
    width: '80%',
  },
  today: {
    justifyContent: 'space-between',
    marginBottom: 10
  },
  date: {
    justifyContent: 'center',
  },
  todayDay: {
    fontFamily: 'averta-semi',
    fontSize: 20
  },
  todayDate: {
    fontFamily: 'averta',
    fontSize: 25
  },
  todayWeather: {
    fontSize: 25,
    fontFamily: 'averta',
    margin: 10
  },
  todayMax: {
    fontFamily: 'averta-semi',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todayMin: {
    fontFamily: 'averta-semi',
    margin: 10,
    color: 'grey',
  },
  humidity: {
    fontFamily: 'averta-semi',
    margin: 10,
    color: '#0000aa'
  },
  nextTitle: {
    fontFamily: 'averta-semi',
    fontSize: 25,
    marginBottom: 20
  },
  nextDateDay: {
    fontSize: 20,
    fontFamily: 'averta-semi'
  },
  nextDate: {
    fontSize: 20,
    fontFamily: 'averta'
  },
  nextWeather: {
    width: '50%',
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'averta',
  },
  containerNext: {
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  nextTemp: {
    paddingBottom: 10
  }
})