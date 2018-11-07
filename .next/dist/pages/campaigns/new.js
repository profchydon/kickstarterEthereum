'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\profchydon\\Documents\\Solidity Workspace\\kickstart\\pages\\campaigns\\new.js?entry';


var CreateCampaign = function (_Component) {
  (0, _inherits3.default)(CreateCampaign, _Component);

  function CreateCampaign() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CreateCampaign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateCampaign.__proto__ || (0, _getPrototypeOf2.default)(CreateCampaign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      message: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _context.prev = 1;
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;

                _this.setState({ message: _this.message('Just one second', 'Transaction in progress...') });
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _this.setState({ message: _this.message('Voila', 'Transaction completed.'), minimumContribution: '' });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                _this.setState({ message: _this.message('Oops!', _context.t0.message) });

              case 14:
                _context.prev = 14;
                return _context.finish(14);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 11, 14, 16]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CreateCampaign, [{
    key: 'message',
    value: function message(title, _message) {
      return _react2.default.createElement(_semanticUiReact.Message, { icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'circle notched', loading: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(_semanticUiReact.Message.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, title), _message));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Create a campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Enter minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: { basic: true, content: 'Wei' },
        labelPosition: 'right',
        placeholder: 'Enter amount...',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), 'Create')), this.state.message));
    }
  }]);

  return CreateCampaign;
}(_react.Component);

exports.default = CreateCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJY29uIiwiTG9hZGVyIiwicmVhY3RET00iLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNyZWF0ZUNhbXBhaWduIiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwidGl0bGUiLCJiYXNpYyIsImNvbnRlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTyxBQUFPLEFBQVMsQUFBTzs7QUFDL0MsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVJOzs7Ozs7Ozs7Ozs7Ozs7NE5BRW5CLEE7MkJBQVEsQUFDa0IsQUFDdEI7ZSxBQUZJLEFBRU07QUFGTixBQUNKLGFBZ0JKLEE7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1A7c0JBRE8sQUFDUCxBQUFNOztnQ0FEQztnQ0FBQTt1QkFJa0IsY0FBQSxBQUFLLElBSnZCLEFBSWtCLEFBQVM7O21CQUExQjtBQUpELG9DQUtMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFVLE1BQUEsQUFBSyxRQUFMLEFBQWEsbUJBTGxDLEFBS0wsQUFBYyxBQUFZLEFBQWlDO2dDQUx0RDt5Q0FNQyxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQStEO3dCQUM1RCxTQVBKLEFBTUMsQUFBb0UsQUFDakUsQUFBUztBQUR3RCxBQUN4RSxpQkFESTs7bUJBR047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBVSxNQUFBLEFBQUssUUFBTCxBQUFhLFNBQXpCLEFBQVksQUFBdUIsMkJBQTRCLHFCQVR4RSxBQVNMLEFBQWMsQUFBcUY7Z0NBVDlGO0FBQUE7O21CQUFBO2dDQUFBO2dEQVdIOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFVLE1BQUEsQUFBSyxRQUFMLEFBQWEsU0FBVSxZQVg5QyxBQVdILEFBQWMsQUFBWSxBQUF5Qjs7bUJBWGhEO2dDQUFBO3VDQUFBOzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7OzRCQVpILEEsT0FBTyxBLFVBQVMsQUFDdEI7NkJBQ0UsQUFBQywwQ0FBUSxNQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLGtCQUFpQixTQUE1QjtvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQyxjQUFELHlCQUFBLEFBQVM7O29CQUFUO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUEsQUFBa0I7QUFBbEI7QUFBQSxTQURGLEFBQ0UsQUFDRSxRQUxSLEFBQ0UsQUFFRSxBQU1MOzs7OzZCQW9CUTttQkFDTDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBRUEsc0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsK0NBQUEsQUFBQztlQUNRLEVBQUUsT0FBRixBQUFTLE1BQU0sU0FEeEIsQUFDUyxBQUF3QixBQUMvQjt1QkFGRixBQUVnQixBQUNkO3FCQUhGLEFBR2MsQUFDWjtlQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFzQixNQUFBLEFBQU0sT0FBckQsQUFBUyxBQUFjLEFBQXFDO0FBTHhFOztvQkFBQTtzQkFKSixBQUNFLEFBR0UsQUFTRjtBQVRFO0FBQ0UsMkJBUUosQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxTQUF0QjtvQkFBQTtzQkFBQSxBQUE4QjtBQUE5Qjt5QkFBOEIsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQTlCLEFBQThCO0FBQUE7VUFoQnBDLEFBR0ksQUFhRSxBQUVELGlCQUFBLEFBQUssTUFwQmQsQUFDRSxBQUNFLEFBa0JnQixBQUl2Qjs7Ozs7QUE5RHlDLEE7O2tCQUF2QixBIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9wcm9mY2h5ZG9uL0RvY3VtZW50cy9Tb2xpZGl0eSBXb3Jrc3BhY2Uva2lja3N0YXJ0In0=