import React from 'react'
import { View } from 'react-native'

const Card = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    borderRadius: 5,
    elevation: 5,
    padding: 15,
    backgroundColor: '#ffffff',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}

export default Card