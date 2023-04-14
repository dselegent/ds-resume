import React from 'react'

const Home: React.FC = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ width: 100, margin: '100px auto' }}>
      <button onClick={() => dispatch(increase())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  )
}

export default Home
