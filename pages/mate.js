import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'
import BaseTemplate from './BaseTemplate'

import HotMate from './mate/HotMate'
import Terere from './mate/Terere'

export default class Mate extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render(props) {
    const page = this.props.id
    let text

    if (page === 'hot') text = (<HotMate />)
    if (page === 'terere') text = (<Terere />)

    return (
      <Provider store={this.store}>
        <BaseTemplate>
          <h1>My {page} test</h1>
          {text}
        </BaseTemplate>
      </Provider>
    )}
}
