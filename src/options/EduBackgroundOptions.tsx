import React from 'react'
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
  const eduBackgroundOptionsStyleForm = useReactive({
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

  const eduBackgroundOptionsDataForm = useReactive({
    list: [
      {
        date: ['2020-09', '2024-06'],
        schoolName: '野鸡大学1',
        specialized: '通信工程1',
        degree: '本科',
        majorCourse: '主修计算机技术、Java、c++等等',
      },
      {
        date: ['2020-09', '2024-06'],
        schoolName: '野鸡大学2',
        specialized: '通信工程2',
        degree: '本科',
        majorCourse: '主修计算机技术、Java、c++等等',
      },
    ],
    isShow: {
      date: true,
      schoolName: true,
      specialized: true,
      degree: true,
      majorCourse: true,
    },
  })

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <AntdTabs
      defaultActiveKey='6jnnVHZhHU'
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
              <CommonTitleOptions commonTitleOptionsStyleForm={eduBackgroundOptionsStyleForm} />
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={eduBackgroundOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: '6jnnVHZhHU',
          label: '数据配置',
          children: (
            <>
              {eduBackgroundOptionsDataForm.list.map((item, index) => (
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
                    />
                  </p>
                  <DateFormItem item={item} isShow={eduBackgroundOptionsDataForm.isShow} />
                  <Form.Item label='学校名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.schoolName}
                        onChange={e => (item.schoolName = e.target.value)}
                        size='small'
                        showCount
                        maxLength={40}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (eduBackgroundOptionsDataForm.isShow.schoolName = value)}
                        checked={eduBackgroundOptionsDataForm.isShow.schoolName}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='专业名称'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.specialized}
                        onChange={e => (item.specialized = e.target.value)}
                        size='small'
                        showCount
                        maxLength={20}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (eduBackgroundOptionsDataForm.isShow.specialized = value)}
                        checked={eduBackgroundOptionsDataForm.isShow.specialized}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='学历学位'>
                    <AntdSpace direction='horizontal'>
                      <Select size='small' value={item.degree} onChange={(value: string) => (item.degree = value)}>
                        {degreeList.map((value: string) => (
                          <Select.Option key={value} value={value} label={value}>
                            {value}
                          </Select.Option>
                        ))}
                      </Select>
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (eduBackgroundOptionsDataForm.isShow.degree = value)}
                        checked={eduBackgroundOptionsDataForm.isShow.degree}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='教学经历'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={6}
                        size='small'
                        value={item.majorCourse}
                        onChange={e => (item.majorCourse = e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (eduBackgroundOptionsDataForm.isShow.majorCourse = value)}
                        checked={eduBackgroundOptionsDataForm.isShow.majorCourse}
                      />
                    </AntdSpace>
                  </Form.Item>
                </Form>
              ))}
              <Button className='mt-3' type='primary' size='small'>
                添加学历
              </Button>
            </>
          ),
        },
      ]}
      onChange={onChange}
    />
  )
}

export default EduBackgroundOptions
