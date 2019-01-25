import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import RootReducer, {RootState} from '../modules'

export const initializeStore = (initialState: RootState) => {
  return createStore(RootReducer, initialState, devToolsEnhancer({}))
}
