import React, { Component } from 'react'
import { ScrollView, Text, Image, View, NativeModules, TouchableOpacity, ToastAndroid } from 'react-native'
import { Images } from '../Themes'
const RNBadgerAndroid = NativeModules.RNBadgerAndroid
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render() {
    RNBadgerAndroid.setBadge(4)
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={{
            height: 50, width: '100%', backgroundColor: 'red'
            , justifyContent: 'center', alignItems: 'center'
          }}
          onPress={this.setBadge}>
          <Text>Add Badge</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 30,
            height: 50, width: '100%', backgroundColor: 'red'
            , justifyContent: 'center', alignItems: 'center'
          }}
          onPress={this.removeBadge} >
          <Text>Remove Badge</Text>
        </TouchableOpacity>
      </View>
    )
  }
  setBadge = () => {
    RNBadgerAndroid.setBadge(4).then((result) => {
      if (result) {
        ToastAndroid.show('successful', ToastAndroid.SHORT)
      } else {
        ToastAndroid.show('failed', ToastAndroid.SHORT)
      }
    })
  }

  removeBadge = () => {
    RNBadgerAndroid.removeBadge().then((result) => {
      if (result) {
        ToastAndroid.show('successful', ToastAndroid.SHORT)
      } else {
        ToastAndroid.show('failed', ToastAndroid.SHORT)
      }
    })
  }
}
