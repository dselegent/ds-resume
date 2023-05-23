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

type WorkExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const WorkExperienceOptions: React.FC<WorkExperienceOptionsPropsType> = ({ configShowStatus }) => {
  const workExperienceOptionsStyleForm = useReactive({
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

  const workExperienceOptionsDataForm = useReactive({
    list: [
      {
        date: ['2020-09', '2024-06'],
        companyName: '经历简要，如社团名称',
        companyDuty: '主要职责',
        jobContent: [
          {
            content: '主要工作内容是打杂',
          },
        ],
      },
      {
        date: ['2020-09', '2024-06'],
        companyName: '经历简要，如社团名称1',
        companyDuty: '主要职责',
        jobContent: [
          {
            content: '主要工作内容是打杂',
          },
          {
            content: '主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂',
          },
        ],
      },
    ],
    isShow: {
      date: true,
      companyName: true,
      companyDuty: true,
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
              <CommonTitleOptions commonTitleOptionsStyleForm={workExperienceOptionsStyleForm} />
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={workExperienceOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'DCc3x3NVqb',
          label: '数据配置',
          children: (
            <>
              {workExperienceOptionsDataForm.list.map((item, index) => (
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
                      className='f-c-c'
                      type='primary'
                      danger
                      icon={<i className='i-ant-design-delete-outlined' />}
                      shape='circle'
                      size='small'
                    />
                  </p>
                  <DateFormItem item={item} isShow={workExperienceOptionsDataForm.isShow} />
                  <Form.Item label='公司名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.companyName}
                        onChange={e => (item.companyName = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (workExperienceOptionsDataForm.isShow.companyName = value)}
                        checked={workExperienceOptionsDataForm.isShow.companyName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='主要职责'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.companyDuty}
                        onChange={e => (item.companyDuty = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (workExperienceOptionsDataForm.isShow.companyDuty = value)}
                        checked={workExperienceOptionsDataForm.isShow.companyDuty}
                      />
                    </AntdSpace>
                  </Form.Item>
                  {item.jobContent.map((content, cIndex) => (
                    <Form.Item label={`工作内容${cIndex + 1}`} key={cIndex}>
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
                          disabled={cIndex !== item.jobContent.length - 1}
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
                添加经历
              </Button>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default WorkExperienceOptions
