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
  tagManager (w,d,s,l,i){
    w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  }

  componentDidMount() {
    this.tagManager(window,document,'script','dataLayer','GTM-P3WQ5KP')
  }

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