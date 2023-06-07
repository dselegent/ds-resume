import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
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
  const dispatch = useAppDispatch()

  // 选中的模块id
  const cptKeyId = useAppSelector(selectorSelectMaterial).cptKeyId
  // 选中的模块数据
  const modelItem = useAppSelector(selectorResumeJsonData).COMPONENTS.find(
    (item: IMATERIALITEM) => item.keyId === cptKeyId
  )

  // 更新模块中的列表数据
  const handleChangeModelListData = (index: number, key: string, value: any) =>
    dispatch(
      changeResumeJsonModelData({
        flag: index,
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

  // 添加奖项
  const addAwards = (): void => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          date: '2021-9', // 获奖时间
          awardsName: '奖项名称',
          awardsGrade: '获奖等级',
        },
      })
    )
  }
  // 删除奖项
  const deleteAwards = (index: number): void => {
    dispatch(
      deleteResumeJsonModelListData({
        cptKeyId,
        index,
      })
    )
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
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
            </Form>
          ),
        },
        {
          key: 'ByuxX8IPqN',
          label: '数据配置',
          children: (
            <>
              {modelItem.data.LIST.map((item: any, index: number) => (
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
                      onClick={() => deleteAwards(index)}
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
                        onChange={(date, dateString) => handleChangeModelListData(index, 'date', dateString)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('date', value)}
                        checked={modelItem.data.isShow.date}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='奖项名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.awardsName}
                        onChange={e => handleChangeModelListData(index, 'awardsName', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('awardsName', value)}
                        checked={modelItem.data.isShow.awardsName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='所获奖项'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={4}
                        value={item.awardsGrade}
                        onChange={e => handleChangeModelListData(index, 'awardsGrade', e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('awardsGrade', value)}
                        checked={modelItem.data.isShow.awardsGrade}
                      />
                    </AntdSpace>
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small' onClick={addAwards}>
                添加奖项
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default AwardsOptions
