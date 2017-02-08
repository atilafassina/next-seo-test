'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Offer = require('./Offer');

var _Offer2 = _interopRequireDefault(_Offer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    type: state.type,
    hello: state.hello
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Offer2.default);