import { connect } from 'react-redux'
import Giphy from './Giphy'

const mapStateToProps = (state) => {
  return {
    type: state.type,
    hello: state.hello
  }
}

export default connect(
  mapStateToProps
)(Giphy);