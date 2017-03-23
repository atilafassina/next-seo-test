import React, { Component } from 'react'
import { header, logo } from './css'

export default class Header extends Component {
  render(props) {
    const { t } = this.props

    const title = t('test', { count: 2000 })

    return (
      <header className={header}>
        <h1>
          {title}
        </h1>
        <img className={logo} src="/static/chimas.png" alt="Chimarroneando" />
      </header>
    )
  }
}