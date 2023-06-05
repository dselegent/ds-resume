import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tabs, Form, Input, Button, Space, Switch } from 'antd'
import { cloneDeep } from 'lodash-es'

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

type WorkExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const WorkExperienceOptions: React.FC<WorkExperienceOptionsPropsType> = ({ configShowStatus }) => {
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

  // 更新工作内容列表
  const handleChangeJobContentListData = (content: any, cIndex: number, index: number, key: string, value: any) => {
    let jobContent = cloneDeep(content)
    jobContent[cIndex].content = value
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: jobContent,
      })
    )
  }

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

  // 添加经历
  const addWorkExp = () => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          date: ['2021-9', '2022-10'], // 实习时间
          companyName: '业绩公司', // 公司名称
          posts: '前端开发工程师', // 职位
          jobContent: [
            {
              content: '主要工作内容是打杂',
            },
            {
              content: '主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂',
            },
            {
              content: '主要工作内容是打杂',
            },
          ],
        },
      })
    )
  }

  // 删除经历
  const deleteWorkExp = (index: number) => {
    dispatch(
      deleteResumeJsonModelListData({
        cptKeyId,
        index,
      })
    )
  }

  // 添加工作内容
  const addJobcontent = (content: any, index: number, key: string) => {
    let jobContent = cloneDeep(content)
    jobContent.push({
      content: '主要工作内容是打杂',
    })
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: jobContent,
      })
    )
  }

  // 删除工作内容
  const deleteJobcontent = (content: any, cIndex: number, index: number, key: string) => {
    let jobContent = cloneDeep(content)
    jobContent.splice(cIndex, 1)
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: jobContent,
      })
    )
  }

  return (
    <AntdTabs
      type='card'
      centered
      items={[
        {
          key: 'gc2QWScxYl',
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
          key: 'DCc3x3NVqb',
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
                    <span className='mr-2.5 text-base font-500'>工作经验{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      onClick={() => deleteWorkExp(index)}
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
                  <Form.Item label='公司名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.companyName}
                        onChange={e => handleChangeModelListData(index, 'companyName', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('companyName', value)}
                        checked={modelItem.data.isShow.schoolName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='主要职责'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.posts}
                        onChange={e => handleChangeModelListData(index, 'posts', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('posts', value)}
                        checked={modelItem.data.isShow.posts}
                      />
                    </AntdSpace>
                  </Form.Item>
                  {item.jobContent.map((content: any, cIndex: number) => (
                    <Form.Item label={`工作内容${cIndex + 1}`} key={cIndex}>
                      <AntdSpace direction='horizontal'>
                        <Input.TextArea
                          rows={6}
                          value={content.content}
                          // onChange={e => (content.content = e.target.value)}
                          onChange={e =>
                            handleChangeJobContentListData(item.jobContent, cIndex, index, 'jobContent', e.target.value)
                          }
                        />
                        <Button
                          disabled={cIndex === 0}
                          onClick={() => deleteJobcontent(item.jobContent, cIndex, index, 'jobContent')}
                          className='f-c-c'
                          type='primary'
                          danger
                          shape='circle'
                          size='small'
                          icon={<i className='i-ant-design-minus-outlined' />}
                        />
                        <Button
                          disabled={cIndex !== item.jobContent.length - 1}
                          onClick={() => addJobcontent(item.jobContent, index, 'jobContent')}
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
              ))}
              <Button className='mt-3' type='primary' size='small' onClick={addWorkExp}>
                添加经历
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default WorkExperienceOptions
