import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src="https://d31lytwxr6aitu.cloudfront.net/bundles/sisusite/themes/de/img/logo.svg?63c991" alt="titleLogo" />
      </header>
    )
  }
}