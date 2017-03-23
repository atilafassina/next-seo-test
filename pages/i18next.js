import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'
import BaseTemplate from './BaseTemplate'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n';
import { translate } from 'react-i18next'

export default class Templatei18next extends Component {
  constructor(props) {
    super(props)

    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render(props) {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={this.store}>
            <BaseTemplate>
              <h1>Translation - i18next</h1>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non neque repellat placeat facilis amet labore doloremque nostrum repellendus laudantium.
              </p>
            </BaseTemplate>
        </Provider>
      </ I18nextProvider>
    )
  }
}

