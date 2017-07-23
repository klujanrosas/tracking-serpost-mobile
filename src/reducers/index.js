import { combineReducers } from 'redux'

import NavReducer from './NavReducer'
import CaptchaReducer from './CaptchaReducer'
import FormReducer from './FormReducer'
import PackageReducer from './PackageReducer'

export default combineReducers({
  nav: NavReducer,
  captcha: CaptchaReducer,
  form: FormReducer,
  packages: PackageReducer
})