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

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = (0, _glamor.css)({
  border: 0,
  fontSize: '1.5rem',
  textAlign: 'center',
  padding: '.5em 1em'
});

var TagInput = function (_Component) {
  (0, _inherits3.default)(TagInput, _Component);

  function TagInput(props) {
    (0, _classCallCheck3.default)(this, TagInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TagInput.__proto__ || (0, _getPrototypeOf2.default)(TagInput)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TagInput, [{
    key: 'handleChange',
    value: function handleChange(evt) {
      console.log(evt);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(evt) {
      evt.preventDefault();
      console.info('sent');
      console.log(evt);
    }
  }, {
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement('form', { onSubmit: this.handleSubmit }, _react2.default.createElement('input', { className: style, onChange: this.handleChange }), _react2.default.createElement('button', { type: 'submit' }, 'Send data'));
    }
  }]);

  return TagInput;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    type: state.type,
    hello: state.hello
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(TagInput);

//