import React from 'react'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select, Divider, Switch, InputNumber, Slider } from 'antd'

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

type CommonOptionsPropsType = {
  baseInfoOptionsDataForm: any
}

const CommonOptions: React.FC<CommonOptionsPropsType> = ({ baseInfoOptionsDataForm }) => {
  return (
    <>
      <Form.Item label='字体颜色'>
        <ColorPicker
          color={baseInfoOptionsDataForm.textColor}
          getColor={(value: string) => (baseInfoOptionsDataForm.textColor = value)}
        />
      </Form.Item>
      <Form.Item label='字体大小'>
        <Select
          size='small'
          value={baseInfoOptionsDataForm.textFontSize}
          onChange={(value: string) => (baseInfoOptionsDataForm.textFontSize = value)}
        >
          {fontSizeList.map((value: string, index: number) => (
            <Select.Option key={index} value={value} label={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label='字体粗细'>
        <Select
          size='small'
          value={baseInfoOptionsDataForm.textFontWeight}
          onChange={(value: number) => (baseInfoOptionsDataForm.textFontWeight = value)}
        >
          {fontWeightList.map((value: number, index: number) => (
            <Select.Option key={index} value={value} label={value}>
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
          onChange={(value: boolean) => (baseInfoOptionsDataForm.countModel = value)}
          checked={baseInfoOptionsDataForm.countModel}
        />
      </Form.Item>
      <Form.Item label='上外边距'>
        <AntdSlider
          countModel={baseInfoOptionsDataForm.countModel}
          value={baseInfoOptionsDataForm.marginTop}
          onChange={(value: number) => (baseInfoOptionsDataForm.marginTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsDataForm.countModel}
          size='small'
          value={baseInfoOptionsDataForm.marginTop}
          onChange={(value: any) => (baseInfoOptionsDataForm.marginTop = value)}
        />
      </Form.Item>
      <Form.Item label='下外边距'>
        <AntdSlider
          countModel={baseInfoOptionsDataForm.countModel}
          value={baseInfoOptionsDataForm.marginBottom}
          onChange={(value: number) => (baseInfoOptionsDataForm.marginBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsDataForm.countModel}
          size='small'
          value={baseInfoOptionsDataForm.marginBottom}
          onChange={(value: any) => (baseInfoOptionsDataForm.marginBottom = value)}
        />
      </Form.Item>
      <Form.Item label='上内边距'>
        <AntdSlider
          countModel={baseInfoOptionsDataForm.countModel}
          value={baseInfoOptionsDataForm.paddingTop}
          onChange={(value: number) => (baseInfoOptionsDataForm.paddingTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsDataForm.countModel}
          size='small'
          value={baseInfoOptionsDataForm.paddingTop}
          onChange={(value: any) => (baseInfoOptionsDataForm.paddingTop = value)}
        />
      </Form.Item>
      <Form.Item label='下内边距'>
        <AntdSlider
          countModel={baseInfoOptionsDataForm.countModel}
          value={baseInfoOptionsDataForm.paddingBottom}
          onChange={(value: number) => (baseInfoOptionsDataForm.paddingBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsDataForm.countModel}
          size='small'
          value={baseInfoOptionsDataForm.paddingBottom}
          onChange={(value: any) => (baseInfoOptionsDataForm.paddingBottom = value)}
        />
      </Form.Item>
      <Form.Item label='左右内边距'>
        <AntdSlider
          countModel={baseInfoOptionsDataForm.countModel}
          value={baseInfoOptionsDataForm.paddingX}
          onChange={(value: number) => (baseInfoOptionsDataForm.paddingX = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsDataForm.countModel}
          size='small'
          value={baseInfoOptionsDataForm.paddingX}
          onChange={(value: any) => (baseInfoOptionsDataForm.paddingX = value)}
        />
      </Form.Item>
    </>
  )
}

export default CommonOptions
