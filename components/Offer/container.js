import { connect } from 'react-redux'
import Offer from './Offer'

const mapStateToProps = (state) => {
  return {
    type: state.type,
    hello: state.hello
  }
}

export default connect(
  mapStateToProps
)(Offer);