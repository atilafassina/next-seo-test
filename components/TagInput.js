import React, { Component } from 'react';
import { connect } from 'react-redux'
import { css } from 'glamor'

const style = css({
  border: 0,
  fontSize: '1.5rem',
  textAlign: 'center',
  padding: '.5em 1em'
})

class TagInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(evt)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.info('sent')
    console.log(evt)
  }

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className={style} onChange={this.handleChange} />
        <button type="submit">Send data</button>
      </form>
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
)(TagInput);

//