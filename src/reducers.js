import { combineReducers } from 'redux'
import { SET_STICK_DATA } from './constants'
const { merge, cond, always, equals, T } = require('ramda')

export default combineReducers({
  sticks
})

function sticks(state = [], action) {
  switch (action.type) {
    case SET_STICK_DATA:
      //console.log('payload for stickdata', action.payload)
      return action.payload
    default:
      return state
  }

  return state
}
