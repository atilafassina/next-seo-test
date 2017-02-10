import React, { Component } from 'react'
import { header, logo } from './css'

export default class Header extends Component {
  render() {
    return (
      <header className={header}>
        <h1>Chimarroneando</h1>
        <img className={logo} src="/static/chimas.png" alt="Chimarroneando" />
      </header>
    )
  }
}