import { connect } from 'react-redux'
import PageView from './view'

const mapStateToProps = (state) => {
  return {
    type: state.type,
    hello: state.hello
  }
}

export default connect(
  mapStateToProps
)(PageView);
