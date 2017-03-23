import React, { Component, Children } from 'react'
import { Provider } from 'react-redux'
import BaseTemplate from './BaseTemplate'
import Page from './homepage/page'
import { reducer, initStore } from '../store'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'


export default class Homepage extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    store.dispatch({ type: 'INITIAL', hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' })
    return { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render (props) {
    const children = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, props)
    })

    return (
      <I18nextProvider i18n={ i18n }>
        <Provider store={this.store}>
            <BaseTemplate>
              <Page />
            </BaseTemplate>
        </Provider>
      </ I18nextProvider>
    )
  }
}