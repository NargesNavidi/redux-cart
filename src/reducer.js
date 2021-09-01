import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: action.payload.amount + 1 }
        return item
      }
      return item
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === DECREASE) {
    let tempCart = []
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id)
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: action.payload.amount - 1 }
        }
        return item
      })
    }
    return { ...state, cart: tempCart }
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    }
  }

  return state
}

export default reducer

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] }
//   case REMOVE:
//     return {
//       ...state,
//       cart: state.cart.filter((item) => item.id !== action.payload.id),
//     }
//   default:
//     return state
// }
