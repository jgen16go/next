import { combineReducers } from 'redux'
import CounterReducer, { CounterState } from './counter'

export interface RootState {
  counter: CounterState
}

export default combineReducers<RootState>({
  counter: CounterReducer,
})
