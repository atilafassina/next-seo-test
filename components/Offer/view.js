import React, { Component } from 'react'
import { box } from './css'

export default class Offer extends Component {
  constructor(props) {
    super(props)

    this.products = ['Argentinian', 'Brazilian', 'Gaucho', 'Uruguaian']

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    console.log(evt.target.value)
    // dispatch state change with value
  }

  handleSubmit(evt) {
    // dispatch state change
    evt.preventDefault()

  }

  render(props) {
    return (
      <article className={box}>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {this.products.map((product, index) => {
              return <option key={index} value={product.toLowerCase().replace(' ', '')}>{product}</option>
            })}
          </select>
          <button type="submit">Do nothing!</button>
          </form>
        <p>blablabla</p>
      </article>
    );
  }
}
