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
  baseInfoOptionsStyleForm: any
}

const CommonOptions: React.FC<CommonOptionsPropsType> = ({ baseInfoOptionsStyleForm }) => {
  return (
    <>
      <Form.Item label='字体颜色'>
        <ColorPicker
          color={baseInfoOptionsStyleForm.textColor}
          getColor={(value: string) => (baseInfoOptionsStyleForm.textColor = value)}
        />
      </Form.Item>
      <Form.Item label='字体大小'>
        <Select
          size='small'
          value={baseInfoOptionsStyleForm.textFontSize}
          onChange={(value: string) => (baseInfoOptionsStyleForm.textFontSize = value)}
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
          value={baseInfoOptionsStyleForm.textFontWeight}
          onChange={(value: number) => (baseInfoOptionsStyleForm.textFontWeight = value)}
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
          onChange={(value: boolean) => (baseInfoOptionsStyleForm.countModel = value)}
          checked={baseInfoOptionsStyleForm.countModel}
        />
      </Form.Item>
      <Form.Item label='上外边距'>
        <AntdSlider
          countModel={baseInfoOptionsStyleForm.countModel}
          value={baseInfoOptionsStyleForm.marginTop}
          onChange={(value: number) => (baseInfoOptionsStyleForm.marginTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsStyleForm.countModel}
          size='small'
          value={baseInfoOptionsStyleForm.marginTop}
          onChange={(value: any) => (baseInfoOptionsStyleForm.marginTop = value)}
        />
      </Form.Item>
      <Form.Item label='下外边距'>
        <AntdSlider
          countModel={baseInfoOptionsStyleForm.countModel}
          value={baseInfoOptionsStyleForm.marginBottom}
          onChange={(value: number) => (baseInfoOptionsStyleForm.marginBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsStyleForm.countModel}
          size='small'
          value={baseInfoOptionsStyleForm.marginBottom}
          onChange={(value: any) => (baseInfoOptionsStyleForm.marginBottom = value)}
        />
      </Form.Item>
      <Form.Item label='上内边距'>
        <AntdSlider
          countModel={baseInfoOptionsStyleForm.countModel}
          value={baseInfoOptionsStyleForm.paddingTop}
          onChange={(value: number) => (baseInfoOptionsStyleForm.paddingTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsStyleForm.countModel}
          size='small'
          value={baseInfoOptionsStyleForm.paddingTop}
          onChange={(value: any) => (baseInfoOptionsStyleForm.paddingTop = value)}
        />
      </Form.Item>
      <Form.Item label='下内边距'>
        <AntdSlider
          countModel={baseInfoOptionsStyleForm.countModel}
          value={baseInfoOptionsStyleForm.paddingBottom}
          onChange={(value: number) => (baseInfoOptionsStyleForm.paddingBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsStyleForm.countModel}
          size='small'
          value={baseInfoOptionsStyleForm.paddingBottom}
          onChange={(value: any) => (baseInfoOptionsStyleForm.paddingBottom = value)}
        />
      </Form.Item>
      <Form.Item label='左右内边距'>
        <AntdSlider
          countModel={baseInfoOptionsStyleForm.countModel}
          value={baseInfoOptionsStyleForm.paddingX}
          onChange={(value: number) => (baseInfoOptionsStyleForm.paddingX = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={baseInfoOptionsStyleForm.countModel}
          size='small'
          value={baseInfoOptionsStyleForm.paddingX}
          onChange={(value: any) => (baseInfoOptionsStyleForm.paddingX = value)}
        />
      </Form.Item>
    </>
  )
}

export default CommonOptions
