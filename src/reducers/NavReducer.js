import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Login')
const INITIAL_NAV_STATE = AppNavigator.router.getStateForAction(firstAction)

const { NAVIGATE, BACK } = NavigationActions

export default (state = INITIAL_NAV_STATE, action) => {
  switch (action.type) {
    case 'Login':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
    case 'Home':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      )
    default:
      return AppNavigator.router.getStateForAction(action, state)
  }
}