import React from 'react'
import Navigation from './Navigation'
import store from '../store'

const Counter = ({value, onIncrement, onDecrement}) => (
<div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const App = React.createClass({
  render: function () {
    return (
    <div>
        <Navigation />
        <Counter value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
      </div>
    )
  }
})

export default App
