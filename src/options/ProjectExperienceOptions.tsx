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

type ProjectExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const ProjectExperienceOptions: React.FC<ProjectExperienceOptionsPropsType> = ({ configShowStatus }) => {
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

  // 更新项目内容列表
  const handleChangeJobContentListData = (content: any, cIndex: number, index: number, key: string, value: any) => {
    let projectContent = cloneDeep(content)
    projectContent[cIndex].content = value
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: projectContent,
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

  // 添加项目
  const addProject = () => {
    dispatch(
      pushResumeJsonModelListData({
        cptKeyId,
        value: {
          date: ['2021-9', '2022-10'], // 实习时间
          projectName: 'xxx', // 公司名称
          projectContent: [
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

  // 删除项目
  const deleteProject = (index: number) => {
    dispatch(
      deleteResumeJsonModelListData({
        cptKeyId,
        index,
      })
    )
  }

  // 添加项目内容
  const addProjectContent = (content: any, index: number, key: string) => {
    let projectContent = cloneDeep(content)
    console.log(projectContent)

    projectContent.push({
      content: '主要工作内容是打杂',
    })
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: projectContent,
      })
    )
  }

  // 删除项目内容
  const deleteProjectContent = (content: any, cIndex: number, index: number, key: string) => {
    let projectContent = cloneDeep(content)
    projectContent.splice(cIndex, 1)
    dispatch(
      changeResumeJsonModelData({
        flag: index,
        cptKeyId,
        key,
        value: projectContent,
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
              {/* 公共标题样式属性 */}
              <CommonTitleOptions cptKeyId={cptKeyId} modelItem={modelItem} />
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
                    <span className='mr-2.5 text-base font-500'>项目经验{index + 1}</span>
                    <Button
                      disabled={index === 0}
                      onClick={() => deleteProject(index)}
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
                  <Form.Item label='项目名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.projectName}
                        onChange={e => handleChangeModelListData(index, 'companyName', e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => handleChangeModelShow('projectName', value)}
                        checked={modelItem.data.isShow.projectName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  {/* <Form.Item label='主要职责'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.projectDuty}
                        onChange={e => (item.projectDuty = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (projectExperienceOptionsDataForm.isShow.projectDuty = value)}
                        checked={projectExperienceOptionsDataForm.isShow.projectDuty}
                      />
                    </AntdSpace>
                  </Form.Item> */}
                  {item.projectContent.map((content: any, cIndex: number) => (
                    <Form.Item label={`项目内容${cIndex + 1}`} key={cIndex}>
                      <AntdSpace direction='horizontal'>
                        <Input.TextArea
                          rows={6}
                          value={content.content}
                          onChange={e =>
                            handleChangeJobContentListData(
                              item.projectContent,
                              cIndex,
                              index,
                              'projectContent',
                              e.target.value
                            )
                          }
                        />
                        <Button
                          disabled={cIndex === 0}
                          className='f-c-c'
                          onClick={() => deleteProjectContent(item.projectContent, cIndex, index, 'projectContent')}
                          type='primary'
                          danger
                          shape='circle'
                          size='small'
                          icon={<i className='i-ant-design-minus-outlined' />}
                        />
                        <Button
                          disabled={cIndex !== item.projectContent.length - 1}
                          onClick={() => addProjectContent(item.projectContent, index, 'projectContent')}
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
              <Button className='mt-3' type='primary' size='small' onClick={addProject}>
                添加项目
              </Button>
            </>
          ),
        },
      ]}
    />
  )
}

export default ProjectExperienceOptions
