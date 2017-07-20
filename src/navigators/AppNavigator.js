import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator} from 'react-navigation'

import LoginScreen from '../components/LoginScreen'
import HomeScreen from '../components/HomeScreen'

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Holiwi',
      header: null
    })
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Bienvenido',
      headerLeft: null
    })
  }
})

const AppWithNavigationState = ({ dispatch, nav }) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  )
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState)
