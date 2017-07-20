import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import reducers from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

export default class SerpostTracking extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('SerpostTracking', () => SerpostTracking);
