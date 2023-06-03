import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
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

  // 添加技能
  const addSkill = () => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          skillName: 'JavaScript', // 技能名称
          proficiency: '熟悉', // 熟练度
          introduce: '熟练掌握该项技术', // 介绍
        },
      })
    )
  }

  // 删除技能
  const deleteSkill = (index: number) => {
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
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
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
                  value={modelItem.data.title}
                  onChange={e => handleChangeModelData('title', e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>

              {modelItem.data.LIST.map((item: any, index: number) => (
                <Form.Item label={`技能${index + 1}`} key={index}>
                  <AntdSpace direction='horizontal'>
                    <Input.TextArea
                      rows={4}
                      value={item.introduce}
                      onChange={e => handleChangeModelListData(index, 'introduce', e.target.value)}
                    />
                    <Button
                      disabled={index === 0}
                      onClick={() => deleteSkill(index)}
                      className='f-c-c'
                      type='primary'
                      danger
                      shape='circle'
                      size='small'
                      icon={<i className='i-ant-design-minus-outlined' />}
                    />
                    <Button
                      disabled={index !== modelItem.data.LIST.length - 1}
                      onClick={addSkill}
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
    />
  )
}

export default SkillSpecialtiesOptions
