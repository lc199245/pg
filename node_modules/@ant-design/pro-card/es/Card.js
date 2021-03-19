import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/grid/style";
import _Grid from "antd/es/grid";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import { RightOutlined } from '@ant-design/icons';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { LabelIconTip } from '@ant-design/pro-utils';
import classNames from 'classnames';
import omit from 'omit.js';
import CardLoading from './components/CardLoading';
import Divider from './components/Divider';
import TabPane from './components/TabPane';
import Actions from './components/Actions';
import './style/index.less';
var useBreakpoint = _Grid.useBreakpoint; // @ts-ignore

var ProCard = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2, _classNames4;

  var className = props.className,
      style = props.style,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      _props$headStyle = props.headStyle,
      headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
      title = props.title,
      subTitle = props.subTitle,
      extra = props.extra,
      tip = props.tip,
      layout = props.layout,
      loading = props.loading,
      colSpan = props.colSpan,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      tooltip = props.tooltip,
      split = props.split,
      _props$headerBordered = props.headerBordered,
      headerBordered = _props$headerBordered === void 0 ? false : _props$headerBordered,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? false : _props$bordered,
      children = props.children,
      size = props.size,
      actions = props.actions,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$hoverable = props.hoverable,
      hoverable = _props$hoverable === void 0 ? false : _props$hoverable,
      direction = props.direction,
      controlCollapsed = props.collapsed,
      _props$collapsible = props.collapsible,
      collapsible = _props$collapsible === void 0 ? false : _props$collapsible,
      _props$defaultCollaps = props.defaultCollapsed,
      defaultCollapsed = _props$defaultCollaps === void 0 ? false : _props$defaultCollaps,
      onCollapse = props.onCollapse,
      tabs = props.tabs,
      type = props.type,
      rest = _objectWithoutProperties(props, ["className", "style", "bodyStyle", "headStyle", "title", "subTitle", "extra", "tip", "layout", "loading", "colSpan", "gutter", "tooltip", "split", "headerBordered", "bordered", "children", "size", "actions", "ghost", "hoverable", "direction", "collapsed", "collapsible", "defaultCollapsed", "onCollapse", "tabs", "type"]);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var screens = useBreakpoint();

  var _useMergedState = useMergedState(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      collapsed = _useMergedState2[0],
      setCollapsed = _useMergedState2[1]; // 顺序决定如何进行响应式取值，按最大响应值依次取值，请勿修改。


  var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  /**
   * 根据响应式获取 gutter, 参考 antd 实现
   *
   * @param gutter Gutter
   */

  var getNormalizedGutter = function getNormalizedGutter(gut) {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach(function (g, index) {
      if (_typeof(g) === 'object') {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };
  /**
   * 根据条件返回 style，负责返回空对象
   *
   * @param withStyle 是否符合条件
   * @param appendStyle 如果符合条件要返回的 style 属性
   */


  var getStyle = function getStyle(withStyle, appendStyle) {
    return withStyle ? appendStyle : {};
  };

  var prefixCls = getPrefixCls('pro-card');
  var normalizedGutter = getNormalizedGutter(gutter); // 判断是否套了卡片，如果套了的话将自身卡片内部内容的 padding 设置为0

  var containProCard;
  var childrenArray = React.Children.toArray(children);
  var childrenModified = childrenArray.map(function (element, index) {
    var _element$type;

    if (element === null || element === void 0 ? void 0 : (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.isProCard) {
      var _classNames;

      containProCard = true; // 右侧空隙

      var gutterRightStyle = getStyle(normalizedGutter[0] > 0 && index !== childrenArray.length - 1, {
        marginRight: normalizedGutter[0]
      }); // 下方空隙

      var gutterBottomStyle = getStyle(normalizedGutter[1] > 0, {
        marginBottom: normalizedGutter[1]
      }); // 当 split 有值时，内部卡片 radius 设置为 0

      var splitStyle = getStyle(split === 'vertical' || split === 'horizontal', {
        borderRadius: 0
      });
      return /*#__PURE__*/React.cloneElement(element, {
        className: classNames(element.props.className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-split-vertical"), split === 'vertical' && index !== childrenArray.length - 1), _defineProperty(_classNames, "".concat(prefixCls, "-split-horizontal"), split === 'horizontal' && index !== childrenArray.length - 1), _classNames)),
        style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, gutterRightStyle), gutterBottomStyle), splitStyle), element.props.style)
      });
    }

    return element;
  });
  var span = colSpan; // colSpan 响应式

  if (_typeof(colSpan) === 'object') {
    for (var i = 0; i < responsiveArray.length; i += 1) {
      var breakpoint = responsiveArray[i];

      if (screens[breakpoint] && colSpan[breakpoint] !== undefined) {
        span = colSpan[breakpoint];
        break;
      }
    }
  } // 当 colSpan 为 30% 或 300px 时


  var colSpanStyle = getStyle(typeof span === 'string' && /\d%|\dpx/i.test(span), {
    width: span,
    flexShrink: 0
  });

  var cardStyle = _objectSpread(_objectSpread({}, colSpanStyle), style);

  var cardCls = classNames("".concat(prefixCls), className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-span-").concat(span), typeof span === 'number' && span >= 0 && span <= 24), _defineProperty(_classNames2, "".concat(prefixCls, "-border"), bordered), _defineProperty(_classNames2, "".concat(prefixCls, "-contain-card"), containProCard), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames2, "".concat(prefixCls, "-split"), split === 'vertical' || split === 'horizontal'), _defineProperty(_classNames2, "".concat(prefixCls, "-ghost"), ghost), _defineProperty(_classNames2, "".concat(prefixCls, "-hoverable"), hoverable), _defineProperty(_classNames2, "".concat(prefixCls, "-size-").concat(size), size), _defineProperty(_classNames2, "".concat(prefixCls, "-type-").concat(type), type), _defineProperty(_classNames2, "".concat(prefixCls, "-collapse"), collapsed), _classNames2));
  var headerCls = classNames("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-border"), headerBordered || type === 'inner'));
  var bodyCls = classNames("".concat(prefixCls, "-body"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-body-center"), layout === 'center'), _defineProperty(_classNames4, "".concat(prefixCls, "-body-column"), split === 'horizontal' || direction === 'column'), _classNames4));
  var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
    padding: 24
  } : undefined;
  var loadingDOM = /*#__PURE__*/React.isValidElement(loading) ? loading : /*#__PURE__*/React.createElement(CardLoading, {
    prefix: prefixCls,
    style: loadingBlockStyle
  }); // 非受控情况下展示

  var collapsibleButton = collapsible && controlCollapsed === undefined && /*#__PURE__*/React.createElement(RightOutlined, {
    rotate: !collapsed ? 90 : undefined,
    className: "".concat(prefixCls, "-collapsible-icon")
  });
  var titleCls = classNames("".concat(prefixCls, "-title"), _defineProperty({}, "".concat(prefixCls, "-title-collapsible"), collapsibleButton));
  /** 操作按钮 */

  var actionDom = /*#__PURE__*/React.createElement(Actions, {
    actions: actions,
    prefixCls: prefixCls
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cardCls,
    style: cardStyle,
    ref: ref
  }, omit(rest, ['id', 'prefixCls'])), (title || extra || collapsibleButton) && /*#__PURE__*/React.createElement("div", {
    className: headerCls,
    style: headStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: titleCls,
    onClick: function onClick() {
      if (collapsibleButton) setCollapsed(!collapsed);
    }
  }, collapsibleButton, /*#__PURE__*/React.createElement(LabelIconTip, {
    label: title,
    tooltip: tooltip || tip,
    subTitle: subTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-extra")
  }, extra)), tabs ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-tabs")
  }, /*#__PURE__*/React.createElement(_Tabs, _extends({
    onChange: tabs.onChange
  }, tabs), loading ? loadingDOM : children)) : /*#__PURE__*/React.createElement("div", {
    className: bodyCls,
    style: bodyStyle
  }, loading ? loadingDOM : childrenModified), actionDom);
});

var Group = function Group(props) {
  return /*#__PURE__*/React.createElement(ProCard, _extends({
    bodyStyle: {
      padding: 0
    }
  }, props));
};

ProCard.isProCard = true;
ProCard.TabPane = TabPane;
ProCard.Divider = Divider;
ProCard.Group = Group;
export default ProCard;