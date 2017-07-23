import {
  FETCH_CAPTCHA
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CAPTCHA:
      return action.payload.data.image
    default:
      return state
  }
}