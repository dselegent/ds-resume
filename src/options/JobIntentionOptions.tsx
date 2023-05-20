import React from 'react'
import { Tabs, Form, Input, Switch, Space, Select } from 'antd'

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
// 数据配置
const jobSearchTypeList = ['全职', '兼职', '实习']
const jobStatusList = ['随时入职', '一周内到岗', '一个月内到岗', '面议']

type JobIntentionOptionsPropsType = {
  configShowStatus: boolean
}

const JobIntentionOptions: React.FC<JobIntentionOptionsPropsType> = ({ configShowStatus }) => {
  const jobIntentionOptionsStyleForm = useReactive({
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
  const jobIntentionOptionsDataForm = useReactive({
    title: '求职意向',
    jobSearchType: '全职',
    intendedPositions: '前端开发工程师',
    intendedCity: '长沙',
    expectSalary: '4000-5000',
    jobStatus: '随时入职',
    isShow: {
      jobSearchType: true,
      intendedPositions: true,
      intendedCity: true,
      expectSalary: true,
      jobStatus: true,
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
          key: 'sHpg7Us831',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={jobIntentionOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 't0BEOYj85p',
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
                  value={jobIntentionOptionsDataForm.title}
                  onChange={e => (jobIntentionOptionsDataForm.title = e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='求职类型'>
                <AntdSpace direction='horizontal'>
                  <Select
                    size='small'
                    value={jobIntentionOptionsDataForm.jobSearchType}
                    onChange={(value: string) => (jobIntentionOptionsDataForm.jobSearchType = value)}
                  >
                    {jobSearchTypeList.map((value: string) => (
                      <Select.Option key={value} value={value} label={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (jobIntentionOptionsDataForm.isShow.jobSearchType = value)}
                    checked={jobIntentionOptionsDataForm.isShow.jobSearchType}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='意向岗位'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={jobIntentionOptionsDataForm.intendedPositions}
                    onChange={e => (jobIntentionOptionsDataForm.intendedPositions = e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (jobIntentionOptionsDataForm.isShow.intendedPositions = value)}
                    checked={jobIntentionOptionsDataForm.isShow.intendedPositions}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='意向城市'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={jobIntentionOptionsDataForm.intendedCity}
                    onChange={e => (jobIntentionOptionsDataForm.intendedCity = e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (jobIntentionOptionsDataForm.isShow.intendedCity = value)}
                    checked={jobIntentionOptionsDataForm.isShow.intendedCity}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='期望薪资'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={jobIntentionOptionsDataForm.expectSalary}
                    onChange={e => (jobIntentionOptionsDataForm.expectSalary = e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (jobIntentionOptionsDataForm.isShow.expectSalary = value)}
                    checked={jobIntentionOptionsDataForm.isShow.expectSalary}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='求职状态'>
                <AntdSpace direction='horizontal'>
                  <Select
                    size='small'
                    value={jobIntentionOptionsDataForm.jobStatus}
                    onChange={(value: string) => (jobIntentionOptionsDataForm.jobStatus = value)}
                  >
                    {jobStatusList.map((value: string) => (
                      <Select.Option key={value} value={value} label={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (jobIntentionOptionsDataForm.isShow.jobStatus = value)}
                    checked={jobIntentionOptionsDataForm.isShow.jobStatus}
                  />
                </AntdSpace>
              </Form.Item>
            </Form>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default JobIntentionOptions
