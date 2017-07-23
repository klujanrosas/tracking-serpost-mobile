import _ from 'lodash'
import store from 'react-native-simple-store'
import {
  ADD_PACKAGE,
  LOAD_PACKAGES
} from '../actions/types'


export default (state = [], action) => {
  switch (action.type) {
    case LOAD_PACKAGES:
      if (!_.isEmpty(action.payload)) {
        return action.payload
      }
      return state
    case ADD_PACKAGE:
      return [ ...state, action.payload ]
    default:
      return state
  }
}