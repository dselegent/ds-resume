import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tabs, Form, Input, Button, Space, Switch, Select } from 'antd'

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
// 学历列表
const degreeList = ['初中', '高中', '大专', '本科', '全日制本科', '硕士', '非全硕士', '博士', '教授', '其它']

type EduBackgroundOptionsPropsType = {
  configShowStatus: boolean
}

const EduBackgroundOptions: React.FC<EduBackgroundOptionsPropsType> = ({ configShowStatus }) => {
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
  const addEdu = () => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          date: ['2020-9', '2024-6'],
          schoolName: 'xx大学', // 学校名称
          specialized: '计算机科学与技术', // 专业
          degree: '本科', // 学历
          majorCourse: '主修计算机技术、Java、c++等等', // 主修课程
        },
      })
    )
  }

  // 删除学历
  const deleteEdu = (index: number) => {
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
          key: '56yz1uAbPI',
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
          key: '6jnnVHZhHU',
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
                    <span className='mr-2.5 text-base font-500'>学历{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      className='f-c-c'
                      type='primary'
                      danger
                      icon={<i className='i-ant-design-delete-outlined' />}
                      shape='circle'
                      size='small'
                      onClick={() => deleteEdu(index)}
                    />
                  </p>
                  <DateFormItem
                    item={item}
                    isShow={modelItem.data.isShow.date}
                    changeDate={(value: [string, string]) => handleChangeModelListData(index, 'date', value)}
                    changeDateShow={(value: boolean) => handleChangeModelShow('date', value)}
                  />
                  <Form.Item label='学校名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.schoolName}
                        onChange={e => handleChangeModelListData(index, 'schoolName', e.target.value)}
                        size='small'
                        showCount
                        maxLength={40}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('schoolName', value)}
                        checked={modelItem.data.isShow.schoolName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='专业名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.specialized}
                        onChange={e => handleChangeModelListData(index, 'specialized', e.target.value)}
                        size='small'
                        showCount
                        maxLength={20}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('specialized', value)}
                        checked={modelItem.data.isShow.specialized}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='学历学位'>
                    <AntdSpace direction='horizontal'>
                      <Select
                        size='small'
                        value={item.degree}
                        onChange={(value: string) => handleChangeModelListData(index, 'degree', value)}
                      >
                        {degreeList.map((value: string) => (
                          <Select.Option key={value} value={value} label={value}>
                            {value}
                          </Select.Option>
                        ))}
                      </Select>
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('degree', value)}
                        checked={modelItem.data.isShow.degree}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='教学经历'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={6}
                        size='small'
                        value={item.majorCourse}
                        onChange={e => handleChangeModelListData(index, 'majorCourse', e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('majorCourse', value)}
                        checked={modelItem.data.isShow.majorCourse}
                      />
                    </AntdSpace>
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small' onClick={addEdu}>
                添加学历
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default EduBackgroundOptions
