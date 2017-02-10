import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = null

const defaultState = {
  hello: null
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIAL':
      return {
        hello: action.hello
      }

    case 'LOADED':
      return {
        hello: action.hello
      }

    default: return state
  }
}

export const startGif = () => dispatch => {
  // const newState = {
  //   type: 'INITIAL',
  //   hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif'
  // }

  // return setInterval(() => dispatch(newState), 800)
}

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {

    return createStore(reducer, initialState, applyMiddleware(thunk))

  } else {
    if (!store) {
      store = createStore(reducer, initialState, applyMiddleware(thunk))
    }

    return store
  }
}