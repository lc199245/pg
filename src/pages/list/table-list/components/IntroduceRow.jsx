import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip, Divider, Statistic } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import ProCard from '@ant-design/pro-card';

import Trend from './Trend';
import styles from '../style.less';
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

const IntroduceRow = ({ }) => (

  <Row gutter={24}>
    <Col span={24}>
    <ProCard.Group>

    <ProCard split="vertical">
      <ProCard>        
        <Statistic title="新增待处理" value={24} precision={0} />
      </ProCard>
      <ProCard>
        <Statistic title="待处理总量" value={199} precision={0} />
      </ProCard>
      <ProCard>
        <Statistic title="等级-高" value={33} precision={0} />
      </ProCard>
      <ProCard>
        <Statistic title="等级-中" value={40} precision={0} />
      </ProCard>
      <ProCard>
        <Statistic title="等级-低" value={80} precision={0} />
      </ProCard>
      <ProCard>
        <Statistic title="等级-未知" value={20} precision={0} />
      </ProCard>
      
    </ProCard>
    </ProCard.Group>

    </Col>
    <Divider orientation="left"></Divider>





  </Row>
);

export default IntroduceRow;


