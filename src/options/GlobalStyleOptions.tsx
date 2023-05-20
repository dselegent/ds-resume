import React from 'react'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select, Divider, Switch, Slider, InputNumber } from 'antd'
import type { SelectProps } from 'antd'

const AntdSlider = styled(Slider)<{
  countModel: boolean
}>`
  display: ${props => (props.countModel ? 'none' : 'block')};
  margin-top: 10px;
`
const AntdInputNumber = styled(InputNumber)<{
  countModel: boolean
}>`
  display: ${props => (props.countModel ? 'block' : 'none')};
  width: 100%;
`

// 字体列表
const fontFamilyList: SelectProps['options'] = [
  {
    value: '方正仿宋',
    label: '方正仿宋',
    className: 'font-["方正仿宋"]',
  },
  {
    value: '方正书宋简体',
    label: '方正书宋简体',
    className: 'font-["方正书宋简体"]',
  },
  {
    value: '书手体',
    label: '书手体',
    className: 'font-["书手体"]',
  },
  {
    value: '微软雅黑',
    label: '微软雅黑',
    className: 'font-["微软雅黑"]',
  },
  {
    value: '站酷酷黑',
    label: '站酷酷黑',
    className: 'font-["站酷酷黑"]',
  },
  {
    value: '站酷快乐体',
    label: '站酷快乐体',
    className: 'font-["站酷快乐体"]',
  },
]

type GlobalStyleOptionsType = {
  configShowStatus: boolean
}

const GlobalStyleOptions: React.FC<GlobalStyleOptionsType> = ({ configShowStatus }) => {
  const [form] = Form.useForm()
  // 全局主题设置
  const globalStyleOptionsForm = useReactive({
    themeColor: '#079cfa',
    fontFamily: '微软雅黑',
    firstTitleFontSize: '12px',
    secondTitleFontSize: '14px',
    textFontSize: '14px',
    secondTitleColor: '#666',
    textFontColor: '#757575',
    secondTitleWeight: 600,
    textFontWeight: 500,
    countModel: false,
    marginTop: 0,
    marginBottom: 45,
    paddingTop: 0,
    paddingBottom: 30,
    paddingX: 50,
  })

  return (
    <section className='p-5'>
      <Form form={form} labelCol={{ span: configShowStatus ? 6 : 10 }} labelAlign='left'>
        <Form.Item label='主题颜色'>
          <ColorPicker
            color={globalStyleOptionsForm.themeColor}
            getColor={(value: string) => (globalStyleOptionsForm.themeColor = value)}
          />
        </Form.Item>
        <Form.Item label='字体选择'>
          <Select
            size='small'
            options={fontFamilyList}
            value={globalStyleOptionsForm.fontFamily}
            onChange={(value: string) => (globalStyleOptionsForm.fontFamily = value)}
          />
        </Form.Item>
        <Form.Item label='模块标题字体大小'>
          <Select
            size='small'
            value={globalStyleOptionsForm.firstTitleFontSize}
            onChange={(value: string) => (globalStyleOptionsForm.firstTitleFontSize = value)}
          >
            {fontSizeList.map((value: string) => (
              <Select.Option key={value} value={value} label={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='二级标题字体大小'>
          <Select
            size='small'
            value={globalStyleOptionsForm.secondTitleFontSize}
            onChange={(value: string) => (globalStyleOptionsForm.secondTitleFontSize = value)}
          >
            {fontSizeList.map((value: string) => (
              <Select.Option key={value} value={value} label={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='正文字体大小'>
          <Select
            size='small'
            value={globalStyleOptionsForm.textFontSize}
            onChange={(value: string) => (globalStyleOptionsForm.textFontSize = value)}
          >
            {fontSizeList.map((value: string) => (
              <Select.Option key={value} value={value} label={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='二级标题颜色'>
          <ColorPicker
            color={globalStyleOptionsForm.secondTitleColor}
            getColor={(value: string) => (globalStyleOptionsForm.secondTitleColor = value)}
          />
        </Form.Item>
        <Form.Item label='正文字体颜色'>
          <ColorPicker
            color={globalStyleOptionsForm.textFontColor}
            getColor={(value: string) => (globalStyleOptionsForm.textFontColor = value)}
          />
        </Form.Item>
        <Form.Item label='二级标题字体粗细'>
          <Select
            size='small'
            value={globalStyleOptionsForm.secondTitleWeight}
            onChange={(value: number) => (globalStyleOptionsForm.secondTitleWeight = value)}
          >
            {fontWeightList.map((value: number) => (
              <Select.Option key={value} value={value} label={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='正文字体粗细'>
          <Select
            size='small'
            value={globalStyleOptionsForm.textFontWeight}
            onChange={(value: number) => (globalStyleOptionsForm.textFontWeight = value)}
          >
            {fontWeightList.map((value: number) => (
              <Select.Option key={value} value={value} label={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Divider>
          <span className='text-sm font-700 text-stone-700 letter-3'>间距调整</span>
        </Divider>
        <Form.Item label='计数器模式'>
          <Switch
            size='small'
            onChange={(value: boolean) => (globalStyleOptionsForm.countModel = value)}
            checked={globalStyleOptionsForm.countModel}
          />
        </Form.Item>
        <Form.Item label='模块上外边距'>
          <AntdSlider
            countModel={globalStyleOptionsForm.countModel}
            value={globalStyleOptionsForm.marginTop}
            onChange={(value: number) => (globalStyleOptionsForm.marginTop = value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={globalStyleOptionsForm.countModel}
            size='small'
            value={globalStyleOptionsForm.marginTop}
            onChange={(value: any) => (globalStyleOptionsForm.marginTop = value)}
          />
        </Form.Item>
        <Form.Item label='模块下外边距'>
          <AntdSlider
            countModel={globalStyleOptionsForm.countModel}
            value={globalStyleOptionsForm.marginBottom}
            onChange={(value: number) => (globalStyleOptionsForm.marginBottom = value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={globalStyleOptionsForm.countModel}
            size='small'
            value={globalStyleOptionsForm.marginBottom}
            onChange={(value: any) => (globalStyleOptionsForm.marginBottom = value)}
          />
        </Form.Item>
        <Form.Item label='模块上内边距'>
          <AntdSlider
            countModel={globalStyleOptionsForm.countModel}
            value={globalStyleOptionsForm.paddingTop}
            onChange={(value: number) => (globalStyleOptionsForm.paddingTop = value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={globalStyleOptionsForm.countModel}
            size='small'
            value={globalStyleOptionsForm.paddingTop}
            onChange={(value: any) => (globalStyleOptionsForm.paddingTop = value)}
          />
        </Form.Item>
        <Form.Item label='模块下内边距'>
          <AntdSlider
            countModel={globalStyleOptionsForm.countModel}
            value={globalStyleOptionsForm.paddingBottom}
            onChange={(value: number) => (globalStyleOptionsForm.paddingBottom = value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={globalStyleOptionsForm.countModel}
            size='small'
            value={globalStyleOptionsForm.paddingBottom}
            onChange={(value: any) => (globalStyleOptionsForm.paddingBottom = value)}
          />
        </Form.Item>
        <Form.Item label='模块左右内边距'>
          <AntdSlider
            countModel={globalStyleOptionsForm.countModel}
            value={globalStyleOptionsForm.paddingX}
            onChange={(value: number) => (globalStyleOptionsForm.paddingX = value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={globalStyleOptionsForm.countModel}
            size='small'
            value={globalStyleOptionsForm.paddingX}
            onChange={(value: any) => (globalStyleOptionsForm.paddingX = value)}
          />
        </Form.Item>
      </Form>
    </section>
  )
}

export default GlobalStyleOptions
