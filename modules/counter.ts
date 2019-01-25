const INCREMENT = 'increment'
const DECREMENT = 'decrement'

export const increment = () => ({
  type: INCREMENT as typeof INCREMENT
})

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT
})

type Action = ReturnType<typeof increment | typeof decrement>

export const initialState = {
  counter: 0
}

export type CounterState = typeof initialState

export default (state = initialState, action: Action) => {
  switch(action.type) {
    case INCREMENT:
      return {...state}
    case DECREMENT:
      return {...state}
    default:
      const _: never = action
      return state;
  }
}
