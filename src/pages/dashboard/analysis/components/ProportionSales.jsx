import { Card, Radio } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import { Pie } from './Charts';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}) => (
  <Card
    loading={loading}
    className={styles.salesCard}
    bordered={false}
    title={
      <FormattedMessage
        id="dashboardandanalysis.analysis.the-proportion-of-sendouts"
        defaultMessage="The Proportion of Types"
      />
    }
    style={{
      height: '100%',
    }}
    extra={
      <div className={styles.salesCardExtra}>
        {dropdownGroup}
        <div className={styles.salesTypeRadio}>
          <Radio.Group value={salesType} onChange={handleChangeSalesType}>
            <Radio.Button value="all">
              <FormattedMessage id="dashboardandanalysis.channel.sendouts-all" defaultMessage="ALL" />
            </Radio.Button>
            <Radio.Button value="beijing">
              <FormattedMessage id="dashboardandanalysis.channel.sendouts-beijing" defaultMessage="Beijing" />
            </Radio.Button>
            <Radio.Button value="shanghai">
              <FormattedMessage id="dashboardandanalysis.channel.sendouts-shanghai" defaultMessage="Shanghai" />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
    }
  >
    <div>
      <h4
        style={{
          marginTop: 8,
          marginBottom: 32,
        }}
      >
        <FormattedMessage id="dashboardandanalysis.analysis.sendouts" defaultMessage="Send-outs" />
      </h4>
      <Pie
        hasLegend
        subTitle={
          <FormattedMessage id="dashboardandanalysis.analysis.sendouts" defaultMessage="Send-outs" />
        }
        total={() => {salesPieData.reduce((pre, now) => now.y + pre, 0)}}
        data={salesPieData}
        valueFormat={(value) => <p>{value}</p>}
        height={248}
        lineWidth={4}
      />
    </div>
  </Card>
);

export default ProportionSales;
