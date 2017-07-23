import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

const HistoryItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text>
          {item.packageName} - {item.packageTrackingNumber}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = {
  container: {
    borderRadius: 5,
    elevation: 5,
    padding: 15,
    backgroundColor: '#ffffff',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}

export default HistoryItem