import React from 'react'
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

type ProjectExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const ProjectExperienceOptions: React.FC<ProjectExperienceOptionsPropsType> = ({ configShowStatus }) => {
  const projectExperienceOptionsStyleForm = useReactive({
    titleColor: '#000',
    titleFontSize: '14px',
    titleFontWeight: 600,
    textColor: '#000',
    textFontSize: '14px',
    textFontWeight: 500,
    countModel: false,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 45,
    paddingBottom: 55,
    paddingX: 50,
  })

  const projectExperienceOptionsDataForm = useReactive({
    list: [
      {
        date: ['2020-09', '2024-06'],
        projectName: '项目名称',
        projectDuty: '主要职责',
        projectContent: [
          {
            content: '该项目是一个打杂项目',
          },
        ],
      },
      {
        date: ['2020-09', '2024-06'],
        projectName: '项目名称2',
        projectDuty: '主要职责',
        projectContent: [
          {
            content: '该项目是一个打杂项目',
          },
          {
            content: '该项目是一个打杂项目该项目是一个打杂项目该项目是一个打杂项目该项目是一个打杂项目',
          },
        ],
      },
    ],
    isShow: {
      date: true,
      projectName: true,
      projectDuty: true,
    },
  })

  const onChange = (key: string) => {
    console.log(key)
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
              <CommonTitleOptions commonTitleOptionsStyleForm={projectExperienceOptionsStyleForm} />
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={projectExperienceOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: '6pnKCao6vB',
          label: '数据配置',
          children: (
            <>
              {projectExperienceOptionsDataForm.list.map((item, index) => (
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
                      className='f-c-c'
                      type='primary'
                      danger
                      icon={<i className='i-ant-design-delete-outlined' />}
                      shape='circle'
                      size='small'
                    />
                  </p>
                  <DateFormItem item={item} isShow={projectExperienceOptionsDataForm.isShow} />
                  <Form.Item label='项目名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.projectName}
                        onChange={e => (item.projectName = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (projectExperienceOptionsDataForm.isShow.projectName = value)}
                        checked={projectExperienceOptionsDataForm.isShow.projectName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='主要职责'>
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
                  </Form.Item>
                  {item.projectContent.map((content, cIndex) => (
                    <Form.Item label={`项目内容${cIndex + 1}`} key={cIndex}>
                      <AntdSpace direction='horizontal'>
                        <Input.TextArea
                          rows={6}
                          value={content.content}
                          onChange={e => (content.content = e.target.value)}
                        />
                        <Button
                          className='f-c-c'
                          type='primary'
                          danger
                          shape='circle'
                          size='small'
                          icon={<i className='i-ant-design-minus-outlined' />}
                        />
                        <Button
                          disabled={cIndex !== item.projectContent.length - 1}
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
              <Button className='mt-3' type='primary' size='small'>
                添加项目
              </Button>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default ProjectExperienceOptions
