import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tabs, Form, Input, Button, Space, Switch } from 'antd'

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

type CampusExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const CampusExperienceOptions: React.FC<CampusExperienceOptionsPropsType> = ({ configShowStatus }) => {
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

  // 添加学历
  const addCampus = () => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          date: ['2021-9', '2022-10'], // 经历时间
          campusBriefly: '经历简要，如社团名称',
          campusDuty: '主要职责',
          campusContent:
            '经历经历描述经历描述经历描经历描述经历描述经历描述经历描述经历描述述经历描述经历描述经历描述经历描述经历描述描述',
        },
      })
    )
  }

  // 删除学历
  const deleteCampus = (index: number) => {
    dispatch(
      deleteResumeJsonModelListData({
        cptKeyId,
        index,
      })
    )
  }

  return (
    <AntdTabs
      defaultActiveKey='xIDyjc7HvO'
      type='card'
      centered
      items={[
        {
          key: 'WDOywCKzCT',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共标题样式属性 */}
              <CommonTitleOptions cptKeyId={cptKeyId} modelItem={modelItem} />
              {/* 公共样式属性 */}
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
            </Form>
          ),
        },
        {
          key: 'xIDyjc7HvO',
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
                    <span className='mr-2.5 text-base font-500'>经历{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      onClick={() => deleteCampus(index)}
                      className='f-c-c'
                      type='primary'
                      danger
                      icon={<i className='i-ant-design-delete-outlined' />}
                      shape='circle'
                      size='small'
                    />
                  </p>
                  <DateFormItem
                    item={item}
                    isShow={modelItem.data.isShow.date}
                    changeDate={(value: [string, string]) => handleChangeModelListData(index, 'date', value)}
                    changeDateShow={(value: boolean) => handleChangeModelShow('date', value)}
                  />
                  <Form.Item label='经历简要'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.campusBriefly}
                        onChange={e => handleChangeModelListData(index, 'campusBriefly', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('campusBriefly', value)}
                        checked={modelItem.data.isShow.campusBriefly}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='主要职责'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.campusDuty}
                        onChange={e => handleChangeModelListData(index, 'campusDuty', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('campusDuty', value)}
                        checked={modelItem.data.isShow.campusDuty}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='经历简述'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={6}
                        size='small'
                        value={item.campusContent}
                        onChange={e => handleChangeModelListData(index, 'campusContent', e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('campusContent', value)}
                        checked={modelItem.data.isShow.campusContent}
                      />
                    </AntdSpace>
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small' onClick={addCampus}>
                添加经历
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default CampusExperienceOptions
