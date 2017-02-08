import React, { Component } from 'react'
import { css } from 'glamor'

const box = css({
  margin: '5em 0',
  backgroundColor: 'white',
  borderRadius: 5,
  padding: '1em 2em'
})

export default class Offer extends Component {
  constructor(props) {
    super(props)

    this.products = ['iPhone', 'iPad', 'Samsung Galaxy', 'Other']

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
    window.open('/page2', '_self')
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
          <button type="submit">Insure</button>
          </form>
        <p>What do you want to protect?
        In 2 minutes simply insure online!</p>
      </article>
    );
  }
}

// <ul>
//   <li>iPhone</li>
//   <li>iPad</li>
//   <li>Samsung Galaxy</li>
//   <li>Other</li>
// </ul>