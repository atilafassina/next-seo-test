'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' };
  var action = arguments[1];

  switch (action.type) {
    case 'LOADED':
      return {
        hello: action.hello
      };

    default:
      return state;
  }
};