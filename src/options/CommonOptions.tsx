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
  commonOptionsStyleForm: any
}

const CommonOptions: React.FC<CommonOptionsPropsType> = ({ commonOptionsStyleForm }) => {
  return (
    <>
      <Form.Item label='字体颜色'>
        <ColorPicker
          color={commonOptionsStyleForm.textColor}
          getColor={(value: string) => (commonOptionsStyleForm.textColor = value)}
        />
      </Form.Item>
      <Form.Item label='字体大小'>
        <Select
          size='small'
          value={commonOptionsStyleForm.textFontSize}
          onChange={(value: string) => (commonOptionsStyleForm.textFontSize = value)}
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
          value={commonOptionsStyleForm.textFontWeight}
          onChange={(value: number) => (commonOptionsStyleForm.textFontWeight = value)}
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
          onChange={(value: boolean) => (commonOptionsStyleForm.countModel = value)}
          checked={commonOptionsStyleForm.countModel}
        />
      </Form.Item>
      <Form.Item label='上外边距'>
        <AntdSlider
          countModel={commonOptionsStyleForm.countModel}
          value={commonOptionsStyleForm.marginTop}
          onChange={(value: number) => (commonOptionsStyleForm.marginTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={commonOptionsStyleForm.countModel}
          size='small'
          value={commonOptionsStyleForm.marginTop}
          onChange={(value: any) => (commonOptionsStyleForm.marginTop = value)}
        />
      </Form.Item>
      <Form.Item label='下外边距'>
        <AntdSlider
          countModel={commonOptionsStyleForm.countModel}
          value={commonOptionsStyleForm.marginBottom}
          onChange={(value: number) => (commonOptionsStyleForm.marginBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={commonOptionsStyleForm.countModel}
          size='small'
          value={commonOptionsStyleForm.marginBottom}
          onChange={(value: any) => (commonOptionsStyleForm.marginBottom = value)}
        />
      </Form.Item>
      <Form.Item label='上内边距'>
        <AntdSlider
          countModel={commonOptionsStyleForm.countModel}
          value={commonOptionsStyleForm.paddingTop}
          onChange={(value: number) => (commonOptionsStyleForm.paddingTop = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={commonOptionsStyleForm.countModel}
          size='small'
          value={commonOptionsStyleForm.paddingTop}
          onChange={(value: any) => (commonOptionsStyleForm.paddingTop = value)}
        />
      </Form.Item>
      <Form.Item label='下内边距'>
        <AntdSlider
          countModel={commonOptionsStyleForm.countModel}
          value={commonOptionsStyleForm.paddingBottom}
          onChange={(value: number) => (commonOptionsStyleForm.paddingBottom = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={commonOptionsStyleForm.countModel}
          size='small'
          value={commonOptionsStyleForm.paddingBottom}
          onChange={(value: any) => (commonOptionsStyleForm.paddingBottom = value)}
        />
      </Form.Item>
      <Form.Item label='左右内边距'>
        <AntdSlider
          countModel={commonOptionsStyleForm.countModel}
          value={commonOptionsStyleForm.paddingX}
          onChange={(value: number) => (commonOptionsStyleForm.paddingX = value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countModel={commonOptionsStyleForm.countModel}
          size='small'
          value={commonOptionsStyleForm.paddingX}
          onChange={(value: any) => (commonOptionsStyleForm.paddingX = value)}
        />
      </Form.Item>
    </>
  )
}

export default CommonOptions
