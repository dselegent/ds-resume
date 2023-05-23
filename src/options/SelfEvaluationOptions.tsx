import React from 'react'
import { Tabs, Form, Input } from 'antd'

const AntdTabs = styled(Tabs)`
  .ant-tabs-content {
    padding: 20px;
  }
`

type SelfEvaluationOptionsPropsType = {
  configShowStatus: boolean
}

const SelfEvaluationOptions: React.FC<SelfEvaluationOptionsPropsType> = ({ configShowStatus }) => {
  const selfEvaluationOptionsStyleForm = useReactive({
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

  const selfEvaluationOptionsDataForm = useReactive({
    title: '自我评价',
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
          key: 'IAXHYr2hUH',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={selfEvaluationOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'VIzOqg9Ckt',
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
                  value={selfEvaluationOptionsDataForm.title}
                  onChange={e => (selfEvaluationOptionsDataForm.title = e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='兴趣爱好'>
                <Input.TextArea
                  rows={4}
                  value={selfEvaluationOptionsDataForm.content}
                  onChange={e => (selfEvaluationOptionsDataForm.content = e.target.value)}
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

export default SelfEvaluationOptions
