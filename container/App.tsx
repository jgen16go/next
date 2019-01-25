import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { App as AppComponent } from '../components/App'
import { RootState } from '../modules'
import { increment, decrement } from '../modules/counter'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => {
    dispatch(increment())
  },
  decrement: () => {
    dispatch(decrement())
  }
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
