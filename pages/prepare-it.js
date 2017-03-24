import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'
import BaseTemplate from './BaseTemplate'
import { I18nextProvider } from 'react-i18next'
import { getTranslation } from '../tools/translationHelpers'
import startI18n from './i18n'

export default class Page2 extends Component {
  static async getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    const translations = await getTranslation('en', 'common')
    const i18n = startI18n(translations, isServer)

    return { isServer, translations }
  }

  constructor(props) {
    super(props)

    this.store = initStore(reducer, props.initialState, props.isServer)
    this.i18n = startI18n(props.translations, props.isServer)
  }

  render(props) {
    return (
     <I18nextProvider i18n={this.i18n}>
        <Provider store={this.store}>
            <BaseTemplate>
              <h1>How to prepare Chimarrão</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur porro libero, sit, corrupti autem possimus qui. Voluptates, at, ex. Ipsam aperiam facilis consectetur ullam, expedita illum. Deserunt quis voluptatum magnam quasi, accusamus ex iusto et perferendis modi nisi aspernatur aliquid, alias delectus. Autem mollitia dicta ratione non magni dolore corrupti alias hic, sit excepturi sed provident iure, corporis officiis repudiandae a nam suscipit illum eaque tenetur, odio doloribus quasi temporibus! Labore aliquam perspiciatis ex, iusto accusantium. Aspernatur soluta molestiae vitae amet, porro suscipit voluptatibus id ex fugit repellendus! Consequuntur temporibus provident odio a, reprehenderit magni aspernatur natus quibusdam. Cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet voluptatibus quos incidunt consequatur ipsam aspernatur fugiat, quis, enim, itaque dolorum, quam assumenda ad odit. Ducimus cupiditate ex, voluptatibus reiciendis porro fugit sequi in possimus cum facilis sint ratione asperiores dolores, ipsam commodi quas, officiis provident fugiat voluptates harum iure corporis culpa vitae minus. Omnis eligendi, officia cupiditate necessitatibus consectetur hic odit. Dignissimos perferendis sapiente odit suscipit reiciendis impedit accusamus officia voluptate, provident doloribus quam, animi officiis mollitia unde, dolorum, soluta ad a tenetur molestiae. Non quae temporibus dolor corporis incidunt doloribus minima, iure velit aperiam libero voluptatem tempora nisi, error veniam placeat voluptates sed culpa vel facere quisquam cum illum? Ea eaque velit dignissimos deserunt sapiente quae. Et quis beatae ab molestiae vitae? Accusantium explicabo, ab fuga, sunt ipsam vero magni unde corporis maxime, voluptate voluptates quibusdam aliquid vel. Suscipit possimus dolores tempore eligendi, saepe nemo fuga ad. Vel, id similique labore explicabo voluptate delectus veniam soluta recusandae repudiandae odio porro perferendis. Perferendis doloribus repudiandae necessitatibus molestiae, iusto soluta libero ipsam doloremque nihil. Unde eaque error ipsam nostrum mollitia numquam tempore autem quam aspernatur, tenetur possimus harum laborum optio facilis consequuntur, officiis eveniet. Dolorem, officia. Ipsum, commodi alias atque.
              </p>
            </BaseTemplate>
        </Provider>
      </I18nextProvider>
    )
  }
}