import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProDescriptions from '@ant-design/pro-descriptions';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import IntroduceRow from './components/IntroduceRow';
import { queryRule, updateRule, addRule, removeRule } from './service';
/**
 * 添加节点
 *
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    await addRule({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 * 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const [row, setRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const columns = [
    {
      title: '事件名称',
      dataIndex: 'name',
      tip: '事件名称是唯一的 key',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '规则名称为必填项',
          },
        ],
      },
      render: (dom, entity) => {
        return <a onClick={() => setRow(entity)}>{dom}</a>;
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        0: {
          text: '网页浏览',
        },
        1: {
          text: '邮件发送',
        },
        2: {
          text: '网页上传',
        },
        3: {
          text: '移动存储',
        },
        4: {
          text: '其他形式',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '部门',
      dataIndex: 'department',
      valueEnum: {
        0: {
          text: '销售门店',
        },
        1: {
          text: '市场部',
        },
        2: {
          text: '研发部',
        },
        3: {
          text: '人力资源部',
        },
        4: {
          text: '数据分析部',
        },
        5: {
          text: '后勤部',
        },
        6: {
          text: '信息安全部',
        },
        
        
      },
    },
    {
      title: '涉事人',
      dataIndex: 'employee',
      valueType: 'textarea',
    },
    {
      title: '负责人',
      dataIndex: 'supervisor',
      valueType: 'textarea',
    },
    {
      title: '等级',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '未知',
          status: 'Default',
        },
        1: {
          text: '中',
          status: 'Processing',
        },
        2: {
          text: '低',
          status: 'Success',
        },
        3: {
          text: '高',
          status: 'Error',
        },
      },
    },
    {
      title: '发生时间',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
      hideInForm: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form.getFieldValue('status');

        if (`${status}` === '0') {
          return false;
        }

        if (`${status}` === '3') {
          return <Input {...rest} placeholder="请输入异常原因！" />;
        }

        return defaultRender(item);
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a href="">详情</a>,
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setStepFormValues(record);
          }}
        >
          上报
        </a>,
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setStepFormValues(record);
          }}
        >
          忽略
        </a>,
        <Divider type="vertical" />,
        
        <a href="">更多</a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <IntroduceRow/>

      <ProTable
        headerTitle="待处理安全事件"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
          defaultCollapsed: false,
          filterType: 'light',

        }}
        // toolBarRender={() => [
        //   <Button type="primary" onClick={() => handleModalVisible(true)}>
        //     <PlusOutlined /> 新建
        //   </Button>,
        // ]}
        request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项&nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          onSubmit={async (value) => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);

            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}

      <Drawer
        width={600}
        visible={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.name && (
          <ProDescriptions
            column={2}
            title={row?.name}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
