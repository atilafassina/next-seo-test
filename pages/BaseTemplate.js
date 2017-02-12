import React, { Component, Children } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer, initStore } from '../store'
import Head from 'next/head'
import Header from '../components/Header/container'
import { css } from 'glamor'
import 'glamor/reset'

css.global('html, body', {
  padding: 0,
  textAlign: 'center',
  background: 'whitesmoke'
})

css.global('h1, h2, h3, h4', {
  marginTop: '0 !important'
})

export default class BaseTemplate extends Component {

  constructor (props) {
    super(props)

    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render (props) {
    const children = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, props)
    })

    return (
      <main>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="any other meta we may want" />
          <title>Next-SEO Test-Case</title>
        </Head>
        <Header />
        {children}
      </main>
      )
  }
}