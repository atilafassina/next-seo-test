import { connect } from 'react-redux'
import Header from './view'
import { translate } from 'react-i18next'
import i18n from '../../pages/i18n';

const mapStateToProps = (state, props) => {
  return {
    type: state.type,
    hello: state.hello,
    t: props.t
  }
}

const connected = connect(
  mapStateToProps
)(Header)

export default translate(['foo'])(connected)
