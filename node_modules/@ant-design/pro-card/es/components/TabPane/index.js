import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import classNames from 'classnames';
import './index.less';
import ProCard from '../../index';

var TabPane = function TabPane(props) {
  var key = props.key,
      tab = props.tab,
      tabKey = props.tabKey,
      disabled = props.disabled,
      destroyInactiveTabPane = props.destroyInactiveTabPane,
      children = props.children,
      className = props.className,
      style = props.style,
      cardProps = props.cardProps,
      rest = _objectWithoutProperties(props, ["key", "tab", "tabKey", "disabled", "destroyInactiveTabPane", "children", "className", "style", "cardProps"]);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-card-tabpane');
  var tabPaneClassName = classNames(prefixCls, className);
  return /*#__PURE__*/React.createElement(_Tabs.TabPane, _extends({
    key: key,
    tabKey: tabKey,
    tab: tab,
    className: tabPaneClassName,
    style: style,
    disabled: disabled,
    destroyInactiveTabPane: destroyInactiveTabPane
  }, rest), /*#__PURE__*/React.createElement(ProCard, cardProps, children));
};

export default TabPane;