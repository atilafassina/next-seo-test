import React, { Component } from 'react'
import Navigation from '../../components/Navigation/container'
import Giphy from '../../components/Footer/container'
// import Offer from '../../components/Offer/container'

export default class PageView extends Component {
  render(props) {
    return (
      <div>
        <Navigation />
        <Giphy />
    </div>)
  }
}