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
import reducers from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore)

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
