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
const updateDialogOptions = {
  title: "Actualizar aplicación!",
  optionalUpdateMessage: "Hay una actualización disponible. ¿Deseas instalarla?",
  optionalIgnoreButtonLabel: "No, gracias.",
  optionalInstallButtonLabel: "Sí!",
}
const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, updateDialog: updateDialogOptions, installMode: codePush.InstallMode.IMMEDIATE }

class SerpostTracking extends Component {
  componentDidMount() {
    // codePush.sync()
  }
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

SerpostTracking = codePush(codePushOptions)(SerpostTracking)

AppRegistry.registerComponent('SerpostTracking', () => SerpostTracking);
