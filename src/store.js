import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'
import logo from './Go-T-Hockey-Logo.jpg'
import reducers from './reducers'

const store = createStore(
  combineReducers({
    app,
    reducers
  }),
  applyMiddleware(thunk)
)

export default store

// reducers
function app(state = { title: 'Go T Hockey Store Test', logo }, action) {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return merge(state, { title: action.payload })
    default:
      return state
  }
}
