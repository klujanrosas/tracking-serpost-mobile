import React, { Component }  from 'react'
import { View, Text, Button } from 'react-native'

class LoginScreen extends Component {

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>LoginScreen ewe!</Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Home' })}
          title="Log in"
        />
      </View>
    )
  }
}

export default LoginScreen