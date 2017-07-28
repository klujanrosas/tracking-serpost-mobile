import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import codePush from 'react-native-code-push'
import reducers from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore)

class SerpostTracking extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

SerpostTracking = codePush(SerpostTracking)

AppRegistry.registerComponent('SerpostTracking', () => SerpostTracking);
