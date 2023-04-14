import { createSlice } from '@reduxjs/toolkit'

type CounterStateType = { value: number }

const counterState: CounterStateType = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    increase(state: CounterStateType) {
      state.value += 1
    },
    decrease(state: CounterStateType) {
      state.value -= 1
    },
    resetCount() {
      return counterState
    },
  },
})

export const increase = counterSlice.actions.increase
export const decrease = counterSlice.actions.decrease
export const resetCount = counterSlice.actions.resetCount
export default counterSlice.reducer
