webpackHotUpdate(5,{

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(447);

var _reactDom = __webpack_require__(350);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Layout = __webpack_require__(886);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(997);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(998);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\profchydon\\Documents\\Solidity Workspace\\kickstart\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\profchydon\\Documents\\Solidity Workspace\\kickstart\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lYWJiNjQ4YjFiOWU1NzZhNGE0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz8zOWQxZDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtICwgSW5wdXQsIE1lc3NhZ2UsIEljb24gLCBMb2FkZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCByZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW1wYWlnbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uIDogJycsXG4gICAgICBtZXNzYWdlIDogJydcbiAgfTtcblxuICBtZXNzYWdlKHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZXNzYWdlIGljb24+XG4gICAgICAgIDxJY29uIG5hbWU9J2NpcmNsZSBub3RjaGVkJyBsb2FkaW5nIC8+XG4gICAgICAgIDxNZXNzYWdlLkNvbnRlbnQ+XG4gICAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPnsgdGl0bGUgfTwvTWVzc2FnZS5IZWFkZXI+XG4gICAgICAgICAgeyBtZXNzYWdlIH1cbiAgICAgICAgPC9NZXNzYWdlLkNvbnRlbnQ+XG4gICAgICA8L01lc3NhZ2U+XG4gICAgKVxuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2UgOiB0aGlzLm1lc3NhZ2UoJ0p1c3Qgb25lIHNlY29uZCcgLCAnVHJhbnNhY3Rpb24gaW4gcHJvZ3Jlc3MuLi4nKSB9KTtcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbikuc2VuZCh7XG4gICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZSA6IHRoaXMubWVzc2FnZSgnVm9pbGEnICwgJ1RyYW5zYWN0aW9uIGNvbXBsZXRlZC4nKSAsIG1pbmltdW1Db250cmlidXRpb24gOiAnJyB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZSA6IHRoaXMubWVzc2FnZSgnT29wcyEnICwgZS5tZXNzYWdlKSB9KTtcbiAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+Q3JlYXRlIGEgY2FtcGFpZ248L2gyPlxuXG4gICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBtaW5pbXVtIGNvbnRyaWJ1dGlvbjwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyBiYXNpYzogdHJ1ZSwgY29udGVudDogJ1dlaScgfX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbW91bnQuLi4nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgcHJpbWFyeT48SWNvbiBuYW1lPSdhZGQgY2lyY2xlJyAvPkNyZWF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQUlBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVhBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBeUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFMQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=