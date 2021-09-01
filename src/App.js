import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff
import { createStore } from 'redux'
import { DECREASE, INCREASE } from './actions'
import reducer from './reducer'
import { Provider } from 'react-redux'

const initialStore = {
  cart: cartItems,
  total: 3,
  amount: 5,
}

const store = createStore(reducer, initialStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
