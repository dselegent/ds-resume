import React from 'react'
import { Tabs, Form } from 'antd'
import type { TabsProps } from 'antd'

const AntdTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    flex: 1;
    justify-content: center;
  }
  .ant-tabs-content {
    padding: 20px;
  }
`

const items: TabsProps['items'] = [
  {
    key: 'kPhXXunIND',
    label: '样式设置',
    children: (
      <Form
        labelCol={{
          span: 8,
        }}
        labelAlign='left'
      >
        <Form.Item label='头像形状选择'>
          <AvatarPopoverShape />
        </Form.Item>
      </Form>
    ),
  },
  {
    key: '@iHFO%GQFg',
    label: '数据配置',
    children: 'Content of Tab Pane 2',
  },
]

const BaseInfoOptions: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key)
  }

  return <AntdTabs type='card' defaultActiveKey='kPhXXunIND' items={items} onChange={onChange} />
}

export default BaseInfoOptions
