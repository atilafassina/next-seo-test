import React, { Component } from 'react'
import { css } from 'glamor'

const footerBox = css({
  marginTop: '5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center'
})

const gif = css({
  height: '10em'
})

const gifCaption = css({
  fontFamily: 'monospace'
})

export default class Giphy extends Component {
  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=batman')
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.props.dispatch({ type: 'LOADED', hello: json.data.image_url })
    });
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
