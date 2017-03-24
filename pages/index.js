import React, { Component, Children } from 'react'
import { Provider } from 'react-redux'
import BaseTemplate from './BaseTemplate'
import Page from './homepage/page'
import { reducer, initStore } from '../store'
import { I18nextProvider } from 'react-i18next'
import startI18n from './i18n'
import { getTranslation } from '../tools/translationHelpers'

export default class Homepage extends Component {

  static async getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    const translations = await getTranslation('en', 'common')
    const i18n = startI18n(translations, isServer)

    store.dispatch({ type: 'INITIAL', hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' })

    return { initialState: store.getState(), isServer, translations }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render (props) {
    const children = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, props)
    })

    return (
      <I18nextProvider i18n={ this.i18n }>
        <Provider store={this.store}>
            <BaseTemplate>
              <Page />
            </BaseTemplate>
        </Provider>
      </ I18nextProvider>
    )
  }
}