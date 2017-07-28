import axios from 'axios'
import store from 'react-native-simple-store'
import {
  FETCH_CAPTCHA,
  CAPTCHA_TEXT_CHANGE,
  TRACKING_TEXT_CHANGE,
  PACKAGE_NAME_TEXT_CHANGE,
  TRACK_PACKAGE,
  ADD_PACKAGE,
  LOAD_PACKAGES
} from './types'

const ROOT_URL = 'http://api.pupperapp.net/serpost'
// const ROOT_URL = 'http://192.168.1.97:8000/serpost'

export const loadPackages = () => {
  const request = store.get('serpostTrackingSavedPackages')

  return {
    type: LOAD_PACKAGES,
    payload: request
  }
}

export const addPackage = ({ packageName, packageTrackingNumber }) => {
  store.push('serpostTrackingSavedPackages', { packageName, packageTrackingNumber })
  console.log('accion', { packageName, packageTrackingNumber })

  return {
    type: ADD_PACKAGE,
    payload: {
      packageName,
      packageTrackingNumber
    }
  }
}

export const trackPackage = ({ captchaText, trackingText }) => {
  store.save('currentTrackingNumber', trackingText)
  const request = axios.post(`${ROOT_URL}/track`, {
    captchaText,
    trackingNumber: trackingText
  })
  return dispatch => {

    return dispatch({
      type: TRACK_PACKAGE,
      payload: request
    }).then(() => dispatch(fetchCaptcha()))
  }
}

export const fetchCaptcha = () => {
  const request = axios.get(`${ROOT_URL}/captcha`)
  return {
    type: FETCH_CAPTCHA,
    payload: request
  }
}

export const captchaTextChange = (text) => {
  return {
    type: CAPTCHA_TEXT_CHANGE,
    payload: text
  }
}

export const trackingTextChange = (text) => {
  return {
    type: TRACKING_TEXT_CHANGE,
    payload: text
  }
}

export const packageNameTextChange = (text) => {
  return {
    type: PACKAGE_NAME_TEXT_CHANGE,
    payload: text
  }  
}