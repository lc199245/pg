import React from 'react';
import type { TabPaneProps } from 'antd';
import './index.less';
import type { ProCardProps } from '../../index';
export declare type ProCardTabPaneProps = {
    /** Key */
    key?: string;
    /** ProCard 相关属性透传 */
    cardProps?: ProCardProps;
} & TabPaneProps;
declare const TabPane: React.FC<ProCardTabPaneProps>;
export default TabPane;
