import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'
import BaseTemplate from './BaseTemplate'
import { I18nextProvider } from 'react-i18next'
import startI18n from './i18n'
import { getTranslation } from '../tools/translationHelpers'

import HotMate from './mate/HotMate'
import Terere from './mate/Terere'

export default class Mate extends Component {
  static async getInitialProps ({ req: req , query: { id } }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    const translations = await getTranslation('en', 'common')
    const i18n = startI18n(translations, isServer)

    return { id, isServer, translations }
  }

  constructor(props) {
    super(props)

    this.store = initStore(reducer, props.initialState, props.isServer)
    this.i18n = startI18n(props.translations, props.isServer)
  }

  render(props) {
    const page = this.props.id
    let text

    if (page === 'hot') text = (<HotMate />)
    if (page === 'terere') text = (<Terere />)

    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider store={this.store}>
          <BaseTemplate>
            <h1>My {page} test</h1>
            {text}
          </BaseTemplate>
        </Provider>
      </I18nextProvider>
    )}
}
