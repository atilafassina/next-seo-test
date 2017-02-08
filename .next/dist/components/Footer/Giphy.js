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

var footerBox = (0, _glamor.css)({
  marginTop: '5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

var gif = (0, _glamor.css)({
  height: '10em'
});

var gifCaption = (0, _glamor.css)({
  fontFamily: 'monospace'
});

var Giphy = function (_Component) {
  (0, _inherits3.default)(Giphy, _Component);

  function Giphy() {
    (0, _classCallCheck3.default)(this, Giphy);

    return (0, _possibleConstructorReturn3.default)(this, (Giphy.__proto__ || (0, _getPrototypeOf2.default)(Giphy)).apply(this, arguments));
  }

  (0, _createClass3.default)(Giphy, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=batman').then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.props.dispatch({ type: 'LOADED', hello: json.data.image_url });
      });
    }
  }, {
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement('footer', { className: footerBox }, _react2.default.createElement('span', { className: gifCaption }, 'Random Batman gif => '), _react2.default.createElement('img', { className: gif, src: this.props.hello }));
    }
  }]);

  return Giphy;
}(_react.Component);

exports.default = Giphy;