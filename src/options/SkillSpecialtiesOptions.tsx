import React from 'react'
import { Tabs, Form, Input, Space, Button } from 'antd'

const AntdTabs = styled(Tabs)`
  .ant-tabs-content {
    padding: 20px;
  }
`
const AntdSpace = styled(Space)`
  width: 100%;
  .ant-space-item:first-of-type {
    flex: 1;
  }
`

type SkillSpecialtiesOptionsPropsType = {
  configShowStatus: boolean
}

const SkillSpecialtiesOptions: React.FC<SkillSpecialtiesOptionsPropsType> = ({ configShowStatus }) => {
  const skillSpecialtiesOptionsStyleForm = useReactive({
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

  const skillSpecialtiesOptionsDataForm = useReactive({
    title: '技能特长',
    list: [
      {
        introduce: '熟练掌握该项技术1',
      },
      {
        introduce: '熟练掌握该项技术2',
      },
      {
        introduce: '熟练掌握该项技术3',
      },
      {
        introduce: '熟练掌握该项技术4',
      },
    ],
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
          key: 'KPzq6FjVaR',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={skillSpecialtiesOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'q1B68YOEwi',
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
                  value={skillSpecialtiesOptionsDataForm.title}
                  onChange={e => (skillSpecialtiesOptionsDataForm.title = e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>

              {skillSpecialtiesOptionsDataForm.list.map((item, index) => (
                <Form.Item label={`技能${index + 1}`} key={index}>
                  <AntdSpace direction='horizontal'>
                    <Input.TextArea rows={4} value={item.introduce} onChange={e => (item.introduce = e.target.value)} />
                    <Button
                      disabled={index === 0}
                      className='f-c-c'
                      type='primary'
                      danger
                      shape='circle'
                      size='small'
                      icon={<i className='i-ant-design-minus-outlined' />}
                    />
                    <Button
                      disabled={index !== skillSpecialtiesOptionsDataForm.list.length - 1}
                      className='f-c-c'
                      type='primary'
                      shape='circle'
                      size='small'
                      icon={<i className='i-ant-design-plus-outlined' />}
                    />
                  </AntdSpace>
                </Form.Item>
              ))}
            </Form>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default SkillSpecialtiesOptions
