import React, { Component } from 'react'
import {footerBox, gif, gifCaption} from './css'

export default class Giphy extends Component {
  async componentDidMount() {
    const resp = await fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=batman')
    const json = await resp.json();

    this.props.dispatch({ type: 'LOADED', hello: json.data.image_url })
  }

  render(props) {
    return (
      <footer className={footerBox}>
        <span className={gifCaption}>Random Batman gif => </span>
        <img className={gif} src={this.props.hello} />
      </footer>
    );
  }
}
