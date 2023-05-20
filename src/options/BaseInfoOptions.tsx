import React from 'react'
import { Tabs, Form } from 'antd'

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

const BaseInfoOptions: React.FC = () => {
  const baseInfoOptionsStyleForm = useReactive({
    titleColor: '#fff',
    titleFontSize: '14px',
    titleFontWeight: 400,
    textColor: '#000',
    textFontSize: '14px',
    textFontWeight: 500,
    countModel: false,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 45,
    paddingBottom: 55,
    paddingX: 50,
  })

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <AntdTabs
      type='card'
      items={[
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
              {/* 标题样式属性 */}
              <CommonTitleOptions
                baseInfoOptionsStyleForm={baseInfoOptionsStyleForm}
                colorLabel='姓名字体颜色'
                fontSizeLabel='姓名字体大小'
                fontWeightLabel='姓名字体粗细'
              />
              {/* 公共样式属性 */}
              <CommonOptions baseInfoOptionsStyleForm={baseInfoOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: '@iHFO%GQFg',
          label: '数据配置',
          children: 'Content of Tab Pane 2',
        },
      ]}
      onChange={onChange}
    />
  )
}

export default BaseInfoOptions
