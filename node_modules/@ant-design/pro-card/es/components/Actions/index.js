import React from 'react';
import './index.less';

var ProCardActions = function ProCardActions(props) {
  var actions = props.actions,
      prefixCls = props.prefixCls;
  return actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/React.createElement("span", null, action))
    );
  })) : null;
};

export default ProCardActions;