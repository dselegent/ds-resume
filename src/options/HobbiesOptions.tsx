import React from 'react'
import { Tabs, Form, Input } from 'antd'

const AntdTabs = styled(Tabs)`
  .ant-tabs-content {
    padding: 20px;
  }
`

type HobbiesOptionsPropsType = {
  configShowStatus: boolean
}

const HobbiesOptions: React.FC<HobbiesOptionsPropsType> = ({ configShowStatus }) => {
  const hobbiesOptionsStyleForm = useReactive({
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

  const hobbiesOptionsDataForm = useReactive({
    title: '兴趣爱好',
    content: '我喜欢打杂',
  })

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <AntdTabs
      type='card'
      centered
      items={[
        {
          key: 'BHbsV4VXpP',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={hobbiesOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'TvJLIAOPUg',
          label: '数据配置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 4 : 6,
              }}
              labelAlign='left'
            >
              <Form.Item label='标题名称'>
                <Input
                  value={hobbiesOptionsDataForm.title}
                  onChange={e => (hobbiesOptionsDataForm.title = e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='兴趣爱好'>
                <Input.TextArea
                  rows={4}
                  value={hobbiesOptionsDataForm.content}
                  onChange={e => (hobbiesOptionsDataForm.content = e.target.value)}
                />
              </Form.Item>
            </Form>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default HobbiesOptions
