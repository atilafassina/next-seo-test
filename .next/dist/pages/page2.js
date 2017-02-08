'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/atilafassina/Documents/next-test/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/atilafassina/Documents/next-test/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/atilafassina/Documents/next-test/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/atilafassina/Documents/next-test/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/atilafassina/Documents/next-test/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/atilafassina/Documents/next-test/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _BaseTemplate = require('./BaseTemplate');

var _BaseTemplate2 = _interopRequireDefault(_BaseTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page2 = function (_Component) {
  (0, _inherits3.default)(Page2, _Component);

  function Page2() {
    (0, _classCallCheck3.default)(this, Page2);

    return (0, _possibleConstructorReturn3.default)(this, (Page2.__proto__ || (0, _getPrototypeOf2.default)(Page2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page2, [{
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement(_BaseTemplate2.default, null, _react2.default.createElement('h1', null, 't\xE1'), _react2.default.createElement('div', null, 'foo'));
    }
  }]);

  return Page2;
}(_react.Component);
// import Header from '../../components/Header'
// import Footer from '../../components/Footer/container'
exports.default = Page2;