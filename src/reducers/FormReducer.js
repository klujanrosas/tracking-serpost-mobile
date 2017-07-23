import {
  CAPTCHA_TEXT_CHANGE,
  TRACKING_TEXT_CHANGE,
  TRACK_PACKAGE,
  SAVE_PACKAGE,
  RESET_FORM,
  PACKAGE_NAME_TEXT_CHANGE
} from '../actions/types'

const INITIAL_STATE = {
  captchaText: '',
  trackingText: '',
  packageNameText: '',
  trackingInfo: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PACKAGE_NAME_TEXT_CHANGE:
      return { ...state, trackingInfo: null, packageNameText: action.payload }
    case CAPTCHA_TEXT_CHANGE:
      return { ...state, trackingInfo: null, captchaText: action.payload }
    case TRACKING_TEXT_CHANGE:
      return { ...state, trackingInfo: null, trackingText: action.payload }
    case TRACK_PACKAGE:
      return { ...INITIAL_STATE, trackingInfo: action.payload.data }
    case SAVE_PACKAGE:
      return INITIAL_STATE
    default:
      return state
  }
}
