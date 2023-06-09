import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
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
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
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
                  value={modelItem.data.title}
                  onChange={e => handleChangeModelData('title', e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='自我评价'>
                <Input.TextArea
                  rows={4}
                  value={modelItem.data.content}
                  onChange={e => handleChangeModelData('content', e.target.value)}
                />
              </Form.Item>
            </Form>
          ),
        },
      ]}
    />
  )
}

export default SelfEvaluationOptions
