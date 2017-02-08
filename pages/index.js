import React, { Component } from 'react'
import BaseTemplate from './BaseTemplate'
import Page from './homepage/page'
import 'glamor/reset'

export default class Homepage extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    // const store = initStore(reducer, null, isServer)
    // store.dispatch({ type: 'helloWorld', hello: 'hola', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  render (props) {
    return (
      <BaseTemplate>
        <Page />
      </BaseTemplate>
    )
  }
}