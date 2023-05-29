import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tabs, Form, Input, Switch, Space } from 'antd'

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
type BaseInfoOptionsPropsType = {
  configShowStatus: boolean
}

const BaseInfoOptions: React.FC<BaseInfoOptionsPropsType> = ({ configShowStatus }) => {
  const dispatch = useAppDispatch()

  // 选中的模块id
  const cptKeyId = useAppSelector(selectorSelectMaterial).cptKeyId
  // 选中的模块数据
  const modelItem = useAppSelector(selectorResumeJsonData).COMPONENTS.find(
    (item: IMATERIALITEM) => item.keyId === cptKeyId
  )

  // 改变头像形状
  const handleChangeShape = (value: string) =>
    dispatch(
      changeResumeJsonModelData({
        flag: 'data',
        cptKeyId,
        key: 'avatarShape',
        value,
      })
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
          key: 'kPhXXunIND',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              <Form.Item label='头像形状选择'>
                <AvatarPopoverShape modelItem={modelItem} changeShape={handleChangeShape} />
              </Form.Item>
              {/* 标题样式属性 */}
              <CommonTitleOptions
                cptKeyId={cptKeyId}
                modelItem={modelItem}
                colorLabel='姓名字体颜色'
                fontSizeLabel='姓名字体大小'
                fontWeightLabel='姓名字体粗细'
              />
              {/* 公共样式属性 */}
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
            </Form>
          ),
        },
        {
          key: '@iHFO%GQFg',
          label: '数据配置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 4 : 6,
              }}
              labelAlign='left'
            >
              <Form.Item label='姓名'>
                <Input
                  value={modelItem.data.name}
                  onChange={e => handleChangeModelData('name', e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='简介'>
                <AntdSpace direction='horizontal'>
                  <Input.TextArea
                    rows={4}
                    value={modelItem.data.abstract}
                    onChange={e => handleChangeModelData('abstract', e.target.value)}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('abstract', value)}
                    checked={modelItem.data.isShow.abstract}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='年龄'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.age}
                    onChange={e => handleChangeModelData('age', e.target.value)}
                    size='small'
                    showCount
                    maxLength={2}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('age', value)}
                    checked={modelItem.data.isShow.age}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='地址'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.address}
                    onChange={e => handleChangeModelData('address', e.target.value)}
                    size='small'
                    showCount
                    maxLength={30}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('address', value)}
                    checked={modelItem.data.isShow.address}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='工作经验'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.workService}
                    onChange={e => handleChangeModelData('workService', e.target.value)}
                    size='small'
                    showCount
                    maxLength={2}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('workService', value)}
                    checked={modelItem.data.isShow.workService}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='联系方式'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.phoneNumber}
                    onChange={e => handleChangeModelData('phoneNumber', e.target.value)}
                    size='small'
                    showCount
                    maxLength={11}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('phoneNumber', value)}
                    checked={modelItem.data.isShow.phoneNumber}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='邮箱地址'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={modelItem.data.email}
                    onChange={e => handleChangeModelData('email', e.target.value)}
                    size='small'
                    showCount
                    maxLength={30}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => handleChangeModelShow('email', value)}
                    checked={modelItem.data.isShow.email}
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

export default BaseInfoOptions
