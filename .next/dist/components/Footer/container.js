'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Giphy = require('./Giphy');

var _Giphy2 = _interopRequireDefault(_Giphy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    type: state.type,
    hello: state.hello
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Giphy2.default);