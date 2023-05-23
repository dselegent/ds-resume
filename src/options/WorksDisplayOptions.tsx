import React from 'react'
import { Tabs, Form, Input, Button } from 'antd'

const AntdTabs = styled(Tabs)`
  .ant-tabs-content {
    padding: 20px;
    padding-top: 0;
  }
`

type WorksDisplayOptionsPropsType = {
  configShowStatus: boolean
}

const WorksDisplayOptions: React.FC<WorksDisplayOptionsPropsType> = ({ configShowStatus }) => {
  const worksDisplayOptionsStyleForm = useReactive({
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

  const worksDisplayOptionsDataForm = useReactive({
    list: [
      {
        worksName: '作品名称',
        worksLink: 'https://www.baidu.com',
      },
      {
        worksName: '作品名称',
        worksLink: 'https://www.baidu.com',
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
          key: 't8dQvqZvWP',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={worksDisplayOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: '6pnKCao6vB',
          label: '数据配置',
          children: (
            <>
              {worksDisplayOptionsDataForm.list.map((item, index) => (
                <Form
                  labelCol={{
                    span: configShowStatus ? 4 : 6,
                  }}
                  labelAlign='left'
                  key={index}
                >
                  <p className='mb-2.5 h-12.5 f-c-c'>
                    <span className='mr-2.5 text-base font-500'>作品{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      className='f-c-c'
                      type='primary'
                      danger
                      icon={<i className='i-ant-design-delete-outlined' />}
                      shape='circle'
                      size='small'
                    />
                  </p>
                  <Form.Item label='作品名称'>
                    <Input
                      value={item.worksName}
                      onChange={e => (item.worksName = e.target.value)}
                      size='small'
                      showCount
                      maxLength={35}
                    />
                  </Form.Item>
                  <Form.Item label='作品链接'>
                    <Input
                      value={item.worksLink}
                      onChange={e => (item.worksLink = e.target.value)}
                      size='small'
                      showCount
                      maxLength={235}
                    />
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small'>
                添加作品
              </Button>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default WorksDisplayOptions
