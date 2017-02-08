import React, { Component, Children } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from '../reducer'
import thunk from 'redux-thunk'

export default class BaseTemplate extends Component {
  constructor (props) {
    super(props)
    this.store = createStore(reducer, applyMiddleware(thunk))
    // this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render (props) {
    const children = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, props)
    })

    return (
      <Provider store={this.store}>
        <div>
          {children}
        </div>
      </Provider>
      )
  }
}