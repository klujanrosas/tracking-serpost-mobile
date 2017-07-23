import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class AboutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
          <Icon name="logo-github" size={40} color="#000000" />
          <Text style={{ fontSize: 18 }} >@klujanrosas</Text>
        </View>
        <Image style={{ width: 340, height: 260 }} source={{ uri: 'http://www.gifbin.com/bin/062013/1376947902_parakeet_running_in_slowmotion.gif' }} />
      </View>
    )
  }
}

export default AboutScreen