import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
  const [ count, setCount ] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
  {/* El código anterior usa el gancho useState para establecer el conteo en 0 y luego incrementa el
  conteo en 1. */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
