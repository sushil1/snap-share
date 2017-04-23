import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {postReducer} from '../reducers'

var store;

export default {

  configureStore: ()=>{
    const reducers = combineReducers({
      post: postReducer
    })
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )
    return store
  },

  currentStore: () =>{
    return store
  }
}
