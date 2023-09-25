import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from './features/counter/counterSlice';
import Post from './components/post/post.component';
import Form from './components/form/Form.component';
const App = () => {
  const [value, setValue] = useState(0)
  const count = useSelector((state) => {
    return state.counter.value
  })
  const dispatch = useDispatch()
  return (
    <div>
      <Form/>
      <Post/>
      
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
             setValue(value+1);
            dispatch(increment())
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByValue(10))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App