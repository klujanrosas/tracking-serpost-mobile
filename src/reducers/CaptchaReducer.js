import {
  FETCH_CAPTCHA
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CAPTCHA:
      return action.payload.data.payload.image
    default:
      return state
  }
}