import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import Trend from './Trend';
import Yuan from '../utils/Yuan';
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

const IntroduceRow = ({ loading, visitData }) => (

  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={
          <FormattedMessage
            id="dashboardandanalysis.analysis.total-events"
            defaultMessage="Total Security Events"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardandanalysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => numeral(180).format('0,0')} // data should come from the back end
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardandanalysis.analysis.daily-average-events"
                defaultMessage="Daily Average Events"
              />
            }
            value={`${numeral(24).format('0,0')}`} // data should come from the back end
          />
        }
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          <FormattedMessage
            id="dashboardandanalysis.analysis.week"
            defaultMessage="Weekly Changes"
          />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboardandanalysis.analysis.stats-1" defaultMessage="Stats_1" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardandanalysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardandanalysis.analysis.daily-average-stats-1"
                defaultMessage="Daily Average Stats 1"
              />
            }
            value={numeral(1234).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboardandanalysis.analysis.stats-2" defaultMessage="Stats_2" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardandanalysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardandanalysis.analysis.conversion-rate"
                defaultMessage="Conversion Rate"
              />
            }
            value="60%"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title={
          <FormattedMessage
            id="dashboardandanalysis.analysis.stats-3"
            defaultMessage="Stats_3"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardandanalysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total="78%"
        footer={
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <Trend
              flag="up"
              style={{
                marginRight: 16,
              }}
            >
              <FormattedMessage
                id="dashboardandanalysis.analysis.week"
                defaultMessage="Weekly Changes"
              />
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              <FormattedMessage
                id="dashboardandanalysis.analysis.day"
                defaultMessage="Weekly Changes"
              />
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
