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

var _redux = require('redux');

var _reducer = require('../reducer');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseTemplate = function (_Component) {
  (0, _inherits3.default)(BaseTemplate, _Component);

  function BaseTemplate(props) {
    (0, _classCallCheck3.default)(this, BaseTemplate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseTemplate.__proto__ || (0, _getPrototypeOf2.default)(BaseTemplate)).call(this, props));

    _this.store = (0, _redux.createStore)(_reducer.reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    // this.store = initStore(reducer, props.initialState, props.isServer)
    return _this;
  }

  (0, _createClass3.default)(BaseTemplate, [{
    key: 'render',
    value: function render(props) {
      var children = _react.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, props);
      });

      return _react2.default.createElement(_reactRedux.Provider, { store: this.store }, _react2.default.createElement('div', null, children));
    }
  }]);

  return BaseTemplate;
}(_react.Component);

exports.default = BaseTemplate;