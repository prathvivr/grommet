function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { withForwardRef } from '../hocs';

var SelectOption =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SelectOption, _Component);

  function SelectOption() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SelectOption.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var active = this.props.active;
    var nextActive = nextProps.active;
    return active !== nextActive;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        forwardRef = _this$props.forwardRef,
        value = _this$props.value,
        rest = _objectWithoutPropertiesLoose(_this$props, ["forwardRef", "value"]);

    return React.createElement(Box, {
      flex: false
    }, React.createElement(Button, _extends({
      ref: forwardRef,
      role: "menuitem",
      hoverIndicator: "background"
    }, rest)));
  };

  return SelectOption;
}(Component);

var SelectOptionWrapper = withForwardRef(SelectOption);
export { SelectOptionWrapper as SelectOption };