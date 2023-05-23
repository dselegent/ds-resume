import React from 'react'
import { Tabs, Form, Input, Button, Space, Switch, DatePicker } from 'antd'
import dayjs from 'dayjs/esm'

const AntdTabs = styled(Tabs)`
  .ant-tabs-content {
    padding: 20px;
    padding-top: 0;
  }
`
const AntdSpace = styled(Space)`
  width: 100%;
  .ant-space-item:first-of-type {
    flex: 1;
  }
`

const AntdDatePicker = styled(DatePicker)`
  width: 100%;
`

type AwardsOptionsPropsType = {
  configShowStatus: boolean
}

const AwardsOptions: React.FC<AwardsOptionsPropsType> = ({ configShowStatus }) => {
  const awardsOptionsStyleForm = useReactive({
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

  const awardsOptionsDataForm = useReactive({
    list: [
      {
        date: '2020-09',
        awardsName: '奖项名称',
        awardsGrade: '所获奖项',
      },
      {
        date: '2020-09',
        awardsName: '项目名称2',
        awardsGrade: '所获奖项',
      },
    ],
    isShow: {
      date: true,
      awardsName: true,
      awardsGrade: true,
    },
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
          key: 'rMLPCLYRbk',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={awardsOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'ByuxX8IPqN',
          label: '数据配置',
          children: (
            <>
              {awardsOptionsDataForm.list.map((item, index) => (
                <Form
                  labelCol={{
                    span: configShowStatus ? 4 : 6,
                  }}
                  labelAlign='left'
                  key={index}
                >
                  <p className='mb-2.5 h-12.5 f-c-c'>
                    <span className='mr-2.5 text-base font-500'>奖项{index + 1}</span>
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
                  <Form.Item label='日期选择'>
                    <AntdSpace>
                      <AntdDatePicker
                        allowClear={false}
                        picker='month'
                        size='small'
                        value={dayjs(item.date, 'YYYY-MM')}
                        onChange={(date, dateString) => (item.date = dateString)}
                      />
                      <Switch
                        size='small'
                        checked={awardsOptionsDataForm.isShow.date}
                        onChange={(value: boolean) => (awardsOptionsDataForm.isShow.date = value)}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='奖项名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.awardsName}
                        onChange={e => (item.awardsName = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (awardsOptionsDataForm.isShow.awardsName = value)}
                        checked={awardsOptionsDataForm.isShow.awardsName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='所获奖项'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={4}
                        value={item.awardsGrade}
                        onChange={e => (item.awardsGrade = e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (awardsOptionsDataForm.isShow.awardsGrade = value)}
                        checked={awardsOptionsDataForm.isShow.awardsGrade}
                      />
                    </AntdSpace>
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small'>
                添加奖项
              </Button>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default AwardsOptions
