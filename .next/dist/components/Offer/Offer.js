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

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var box = (0, _glamor.css)({
  margin: '5em 0',
  backgroundColor: 'white',
  borderRadius: 5,
  padding: '1em 2em'
});

var Offer = function (_Component) {
  (0, _inherits3.default)(Offer, _Component);

  function Offer(props) {
    (0, _classCallCheck3.default)(this, Offer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call(this, props));

    _this.products = ['iPhone', 'iPad', 'Samsung Galaxy', 'Other'];

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Offer, [{
    key: 'handleChange',
    value: function handleChange(evt) {
      console.log(evt.target.value);
      // dispatch state change with value
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(evt) {
      // dispatch state change
      evt.preventDefault();
      window.open('/page2', '_self');
    }
  }, {
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement('article', { className: box }, _react2.default.createElement('form', { onSubmit: this.handleSubmit }, _react2.default.createElement('select', { onChange: this.handleChange }, this.products.map(function (product, index) {
        return _react2.default.createElement('option', { key: index, value: product.toLowerCase().replace(' ', '') }, product);
      })), _react2.default.createElement('button', { type: 'submit' }, 'Insure')), _react2.default.createElement('p', null, 'What do you want to protect? In 2 minutes simply insure online!'));
    }
  }]);

  return Offer;
}(_react.Component);

// <ul>
//   <li>iPhone</li>
//   <li>iPad</li>
//   <li>Samsung Galaxy</li>
//   <li>Other</li>
// </ul>


exports.default = Offer;