import React from 'react'
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
  const baseInfoOptionsStyleForm = useReactive({
    titleColor: '#fff',
    titleFontSize: '14px',
    titleFontWeight: 400,
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
  const baseInfoOptionsDataForm = useReactive({
    name: '李瓜皮',
    brief: '我是一个没有感情的工作机器',
    age: '18',
    address: '湖南长沙',
    workExperience: '3',
    phoneNumber: '12345678900',
    email: '1234567890@qq.com',
    isShow: {
      brief: true,
      age: true,
      address: true,
      workExperience: true,
      phoneNumber: true,
      email: true,
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
                <AvatarPopoverShape />
              </Form.Item>
              {/* 标题样式属性 */}
              <CommonTitleOptions
                baseInfoOptionsStyleForm={baseInfoOptionsStyleForm}
                colorLabel='姓名字体颜色'
                fontSizeLabel='姓名字体大小'
                fontWeightLabel='姓名字体粗细'
              />
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={baseInfoOptionsStyleForm} />
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
                  value={baseInfoOptionsDataForm.name}
                  onChange={e => (baseInfoOptionsDataForm.name = e.target.value)}
                  size='small'
                  showCount
                  maxLength={15}
                />
              </Form.Item>
              <Form.Item label='简介'>
                <AntdSpace direction='horizontal'>
                  <Input.TextArea
                    rows={4}
                    value={baseInfoOptionsDataForm.brief}
                    onChange={e => (baseInfoOptionsDataForm.brief = e.target.value)}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.brief = value)}
                    checked={baseInfoOptionsDataForm.isShow.brief}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='年龄'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={baseInfoOptionsDataForm.age}
                    onChange={e => (baseInfoOptionsDataForm.age = e.target.value)}
                    size='small'
                    showCount
                    maxLength={2}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.age = value)}
                    checked={baseInfoOptionsDataForm.isShow.age}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='地址'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={baseInfoOptionsDataForm.address}
                    onChange={e => (baseInfoOptionsDataForm.address = e.target.value)}
                    size='small'
                    showCount
                    maxLength={30}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.address = value)}
                    checked={baseInfoOptionsDataForm.isShow.address}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='工作经验'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={baseInfoOptionsDataForm.workExperience}
                    onChange={e => (baseInfoOptionsDataForm.workExperience = e.target.value)}
                    size='small'
                    showCount
                    maxLength={2}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.workExperience = value)}
                    checked={baseInfoOptionsDataForm.isShow.workExperience}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='联系方式'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={baseInfoOptionsDataForm.phoneNumber}
                    onChange={e => (baseInfoOptionsDataForm.phoneNumber = e.target.value)}
                    size='small'
                    showCount
                    maxLength={11}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.phoneNumber = value)}
                    checked={baseInfoOptionsDataForm.isShow.phoneNumber}
                  />
                </AntdSpace>
              </Form.Item>
              <Form.Item label='邮箱地址'>
                <AntdSpace direction='horizontal'>
                  <Input
                    value={baseInfoOptionsDataForm.email}
                    onChange={e => (baseInfoOptionsDataForm.email = e.target.value)}
                    size='small'
                    showCount
                    maxLength={30}
                  />
                  <Switch
                    size='small'
                    onChange={(value: boolean) => (baseInfoOptionsDataForm.isShow.email = value)}
                    checked={baseInfoOptionsDataForm.isShow.email}
                  />
                </AntdSpace>
              </Form.Item>
            </Form>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default BaseInfoOptions
