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

  // 添加奖项
  const addWorks = (): void => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          worksName: '作品名称',
          worksLink: 'https://www.baidu.com',
          worksIntroduce: '这是一个千万级作品',
        },
      })
    )
  }
  // 删除奖项
  const deleteWorks = (index: number): void => {
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
              <CommonOptions cptKeyId={cptKeyId} modelItem={modelItem} />
            </Form>
          ),
        },
        {
          key: '6pnKCao6vB',
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
                    <span className='mr-2.5 text-base font-500'>作品{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      onClick={() => deleteWorks(index)}
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
                      onChange={e => handleChangeModelListData(index, 'wordsName', e.target.value)}
                      size='small'
                      showCount
                      maxLength={35}
                    />
                  </Form.Item>
                  <Form.Item label='作品链接'>
                    <Input
                      value={item.worksLink}
                      onChange={e => handleChangeModelListData(index, 'worksLink', e.target.value)}
                      size='small'
                      showCount
                      maxLength={235}
                    />
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small' onClick={addWorks}>
                添加作品
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default WorksDisplayOptions
