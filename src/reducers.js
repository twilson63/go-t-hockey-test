import { combineReducers } from 'redux'
import { SET_STICK_DATA } from './constants'
const { merge, cond, always, equals, T } = require('ramda')

function sticks(state = [], action) {
  switch (action.type) {
    case SET_STICK_DATA:
      return action.payload
    default:
      return state
  }

  //return state
}

export default combineReducers({
  sticks
})
