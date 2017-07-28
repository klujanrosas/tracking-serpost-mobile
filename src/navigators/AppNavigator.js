import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import HomeScreen from '../components/HomeScreen'
import HistoryScreen from '../components/HistoryScreen'
import AboutScreen from '../components/AboutScreen'

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Rastrear',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={ focused ? "ios-locate" : "ios-locate-outline" }
          size={30}
          color={focused ? tintColor : "#ffffff" }
        />
      )
    })
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Guardados',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={ focused ? "ios-albums" : "ios-albums-outline" }
          size={28}
          color={focused ? tintColor : "#BCDFFB" }
        />
      )
    })
  },
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Acerca De',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={ focused ? "ios-information-circle" : "ios-information-circle-outline" }
          size={30}
          color={focused ? tintColor : "#BCDFFB" }
        />
      )
    })
  }
},
{
  tabBarOptions: {
    showIcon: true
  }
})

export const AppNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreenNavigator
    }
  }
)

MainScreenNavigator.navigationOptions = {
  header: null
}

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
