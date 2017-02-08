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

var _page = require('./homepage/page');

var _page2 = _interopRequireDefault(_page);

require('glamor/reset');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Homepage = function (_Component) {
  (0, _inherits3.default)(Homepage, _Component);

  function Homepage() {
    (0, _classCallCheck3.default)(this, Homepage);

    return (0, _possibleConstructorReturn3.default)(this, (Homepage.__proto__ || (0, _getPrototypeOf2.default)(Homepage)).apply(this, arguments));
  }

  (0, _createClass3.default)(Homepage, [{
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement(_BaseTemplate2.default, null, _react2.default.createElement(_page2.default, null));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      // const store = initStore(reducer, null, isServer)
      // store.dispatch({ type: 'helloWorld', hello: 'hola', light: !isServer, ts: Date.now() })
      return { isServer: isServer };
    }
  }]);

  return Homepage;
}(_react.Component);

exports.default = Homepage;