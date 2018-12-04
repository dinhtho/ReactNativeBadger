import React, { Component } from 'react'
import { ScrollView, Text, Image, View, NativeModules, TouchableOpacity } from 'react-native'
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
          onPress={() => RNBadgerAndroid.setBadge(4)}>
          <Text>Add Badge</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            marginTop: 30,
            height: 50, width: '100%', backgroundColor: 'red'
            , justifyContent: 'center', alignItems: 'center'
          }}
          onPress={() => RNBadgerAndroid.removeBadge()} >
          <Text>Remove Badge</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
