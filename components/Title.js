import React, { Component } from 'react'
import { connect } from 'react-redux'

class Title extends Component {
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
      <div>
        <img src={this.props.hello} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
    hello: state.hello
  }
}
export default connect(
  mapStateToProps
)(Title);