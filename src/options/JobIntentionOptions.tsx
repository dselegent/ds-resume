import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
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
  const dispatch = useAppDispatch()

  // 选中的模块id
  const cptKeyId = useAppSelector(selectorSelectMaterial).cptKeyId
  // 选中的模块数据
  const modelItem = useAppSelector(selectorResumeJsonData).COMPONENTS.find(
    (item: IMATERIALITEM) => item.keyId === cptKeyId
  )

  // 更新模块数据
  const handleChangeModelData = (key: string, value: any) =>
    dispatch(
      changeResumeJsonModelData({
        flag: 'data',
        cptKeyId,
        key,
        value,
      })
    )

  // 更新模块内数据显示
  const handleChangeModelShow = (key: string, value: any) =>
    dispatch(
      changeResumeJsonModelData({
        flag: 'isShow',
        cptKeyId,
        key,
        value,
      })
    )

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
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
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
                  value={modelItem.data.title}
                  onChange={e => handleChangeModelData('title', e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='求职类型'>
                <AntdSpace direction='horizontal'>
                  <Select
                    size='small'
                    value={modelItem.data.jobSearchType}
                    onChange={(value: string) => handleChangeModelData('jobSearchType', value)}
                  >
                    {jobSearchTypeList.map((value: string) => (
                      <Select.Option key={value} value={value} label={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('jobSearchType', value)}
                    checked={modelItem.data.isShow.jobSearchType}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='意向岗位'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.intendedPositions}
                    onChange={e => handleChangeModelData('intendedPositions', e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('intendedPositions', value)}
                    checked={modelItem.data.isShow.intendedPositions}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='意向城市'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.intendedCity}
                    onChange={e => handleChangeModelData('intendedCity', e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('intendedCity', value)}
                    checked={modelItem.data.isShow.intendedCity}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='期望薪资'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.expectSalary}
                    onChange={e => handleChangeModelData('expectSalary', e.target.value)}
                    size='small'
                    showCount
                    maxLength={15}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('expectSalary', value)}
                    checked={modelItem.data.isShow.expectSalary}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='求职状态'>
                <AntdSpace direction='horizontal'>
                  <Select
                    size='small'
                    value={modelItem.data.jobStatus}
                    onChange={(value: string) => handleChangeModelData('jobStatus', value)}
                  >
                    {jobStatusList.map((value: string) => (
                      <Select.Option key={value} value={value} label={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('jobStatus', value)}
                    checked={modelItem.data.isShow.jobStatus}
                  />
                </AntdSpace>
              </Form.Item>
            </Form>
          ),
        },
      ]}
    />
  )
}

export default JobIntentionOptions
