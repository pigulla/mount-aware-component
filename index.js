'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MountAwareComponent = function (_Component) {
    _inherits(MountAwareComponent, _Component);

    function MountAwareComponent() {
        _classCallCheck(this, MountAwareComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MountAwareComponent).apply(this, arguments));
    }

    _createClass(MountAwareComponent, [{
        key: 'forceUpdateIfMounted',
        value: function forceUpdateIfMounted() {
            if (this.__mounted) {
                this.forceUpdate();
            }
        }
    }, {
        key: 'setStateIfMounted',
        value: function setStateIfMounted() {
            if (this.__mounted) {
                this.setState.apply(this, arguments);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.__mounted = true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.__mounted = false;
        }
    }]);

    return MountAwareComponent;
}(_react.Component);

exports.default = MountAwareComponent;
