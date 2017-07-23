import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const INITIAL_NAV_STATE = AppNavigator.router.getStateForAction(firstAction)

export default (state = null, action) => {
  switch (action.type) {
    case 'Main':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      )
    default:
      return AppNavigator.router.getStateForAction(action, state)
  }
}
