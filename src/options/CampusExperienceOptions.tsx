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

type CampusExperienceOptionsPropsType = {
  configShowStatus: boolean
}

const CampusExperienceOptions: React.FC<CampusExperienceOptionsPropsType> = ({ configShowStatus }) => {
  const campusExperienceOptionsStyleForm = useReactive({
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

  const campusExperienceOptionsDataForm = useReactive({
    list: [
      {
        date: ['2020-09', '2024-06'],
        campusBriefly: '经历简要，如社团名称',
        campusDuty: '主要职责',
        campusContent: '经历描述',
      },
      {
        date: ['2020-09', '2024-06'],
        campusBriefly: '经历简要，如社团名称1',
        campusDuty: '主要职责',
        campusContent:
          '经历经历描述经历描述经历描经历描述经历描述经历描述经历描述经历描述述经历描述经历描述经历描述经历描述经历描述描述',
      },
    ],
    isShow: {
      date: true,
      campusBriefly: true,
      campusDuty: true,
      campusContent: true,
    },
  })

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <AntdTabs
      defaultActiveKey='xIDyjc7HvO'
      type='card'
      centered
      items={[
        {
          key: 'WDOywCKzCT',
          label: '样式设置',
          children: (
            <Form
              labelCol={{
                span: configShowStatus ? 5 : 8,
              }}
              labelAlign='left'
            >
              {/* 公共标题样式属性 */}
              <CommonTitleOptions commonTitleOptionsStyleForm={campusExperienceOptionsStyleForm} />
              {/* 公共样式属性 */}
              <CommonOptions commonOptionsStyleForm={campusExperienceOptionsStyleForm} />
            </Form>
          ),
        },
        {
          key: 'xIDyjc7HvO',
          label: '数据配置',
          children: (
            <>
              {campusExperienceOptionsDataForm.list.map((item, index) => (
                <Form
                  labelCol={{
                    span: configShowStatus ? 4 : 6,
                  }}
                  labelAlign='left'
                  key={index}
                >
                  <p className='mb-2.5 h-12.5 f-c-c'>
                    <span className='mr-2.5 text-base font-500'>经历{index + 1}</span>
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
                  <DateFormItem item={item} isShow={campusExperienceOptionsDataForm.isShow} />
                  <Form.Item label='经历简要'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.campusBriefly}
                        onChange={e => (item.campusBriefly = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (campusExperienceOptionsDataForm.isShow.campusBriefly = value)}
                        checked={campusExperienceOptionsDataForm.isShow.campusBriefly}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='主要职责'>
                    <AntdSpace direction='horizontal'>
                      <Input
                        value={item.campusDuty}
                        onChange={e => (item.campusDuty = e.target.value)}
                        size='small'
                        showCount
                        maxLength={35}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (campusExperienceOptionsDataForm.isShow.campusDuty = value)}
                        checked={campusExperienceOptionsDataForm.isShow.campusDuty}
                      />
                    </AntdSpace>
                  </Form.Item>
                  <Form.Item label='经历简述'>
                    <AntdSpace direction='horizontal'>
                      <Input.TextArea
                        rows={6}
                        size='small'
                        value={item.campusContent}
                        onChange={e => (item.campusContent = e.target.value)}
                      />
                      <Switch
                        size='small'
                        onChange={(value: boolean) => (campusExperienceOptionsDataForm.isShow.campusContent = value)}
                        checked={campusExperienceOptionsDataForm.isShow.campusContent}
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

export default CampusExperienceOptions
