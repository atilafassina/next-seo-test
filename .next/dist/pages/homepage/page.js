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

var _reactRedux = require('react-redux');

var _head = require('/Users/atilafassina/Documents/next-test/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('/Users/atilafassina/Documents/next-test/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _glamor = require('glamor');

var _container = require('../../components/Footer/container');

var _container2 = _interopRequireDefault(_container);

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _container3 = require('../../components/Offer/container');

var _container4 = _interopRequireDefault(_container3);

var _TagInput = require('../../components/TagInput');

var _TagInput2 = _interopRequireDefault(_TagInput);

var _BaseTemplate = require('../BaseTemplate');

var _BaseTemplate2 = _interopRequireDefault(_BaseTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_glamor.css.global('html, body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'whitesmoke'
});

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',

    // getInitialProps() {
    //   return {}
    // }

    value: function render(props) {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('meta', { property: 'any other meta we may want' }), _react2.default.createElement('title', null, 'Simplesurance Test-Case')), _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_BaseTemplate2.default, null, _react2.default.createElement('span', null, 'dois'), _react2.default.createElement('h1', null, 'bang')), _react2.default.createElement(_container4.default, null), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/page2' }, _react2.default.createElement('a', null, 'page2'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/test?id=last', as: '/test/last' }, _react2.default.createElement('a', null, 'My last test')))), _react2.default.createElement(_container2.default, null));
    }
  }]);

  return Page;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    type: state.type,
    hello: state.hello
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Page);