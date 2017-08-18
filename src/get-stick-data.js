import { SET_STICK_DATA } from './constants'
const { map, omit } = require('ramda')
let mws = require('./mws')
// mws()
//   .then(
//     res =>
//       (objA = map(
//         mapIt,
//         res.ListInventorySupplyResponse.ListInventorySupplyResult
//       ))
//   )
//   .then(objA => (objB = map(mapItAgain, objA[0][0].member)))
//   .then(objB => (stickData = map(mapToCreateObj, objB)))
//   .then(stickData => console.log(stickData))
//
// function mapIt(obj) {
//   let arr = obj.InventorySupplyList
//   return arr
// }
//
// function mapItAgain(obj) {
//   let arr2 = obj
//   return arr2
// }
//
// function mapToCreateObj(obj) {
//   return omit(
//     ['Condition', 'SupplyDetail', 'FNSKU', 'ASIN', 'EarliestAvailability'],
//     obj
//   )
// }

export const stickData = mws => (dispatch, getState) => {
  mws()
    .then(res => res.json())
    .then(data => dispatch({ type: SET_STICK_DATA, payload: data }))
}

// export const stickData = (dispatch, getState) => {
//   mws()
//     .then(
//       res =>
//         (objA = map(
//           mapIt,
//           res.ListInventorySupplyResponse.ListInventorySupplyResult
//         ))
//     )
//     .then(objA => (objB = map(mapItAgain, objA[0][0].member)))
//     .then(objB => (objC = map(mapToCreateObj, objB)))
//     .then(objC => objC.json())
//     .then(data => dispatch({ type: SET_STICK_DATA, payload: data }))
// }
