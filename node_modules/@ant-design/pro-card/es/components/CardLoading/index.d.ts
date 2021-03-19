import React from 'react';
import './index.less';
declare type CardLoadingProps = {
    /** 类名 */
    className?: string;
    /** 样式属性 */
    style?: React.CSSProperties;
    /** Prefix */
    prefix?: string;
};
declare const CardLoading: React.FC<CardLoadingProps>;
export default CardLoading;
