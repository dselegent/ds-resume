import React from 'react'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select } from 'antd'

type CommonTitleOptionsPropsType = {
  colorLabel?: string
  fontSizeLabel?: string
  fontWeightLabel?: string
  baseInfoOptionsStyleForm: any
}

const CommonTitleOptions: React.FC<CommonTitleOptionsPropsType> = ({
  colorLabel = '标题字体颜色',
  fontSizeLabel = '标题字体大小',
  fontWeightLabel = '标题字体粗细',
  baseInfoOptionsStyleForm,
}) => {
  return (
    <>
      <Form.Item label={colorLabel}>
        <ColorPicker
          color={baseInfoOptionsStyleForm.titleColor}
          getColor={(value: string) => (baseInfoOptionsStyleForm.titleColor = value)}
        />
      </Form.Item>
      <Form.Item label={fontSizeLabel}>
        <Select
          size='small'
          value={baseInfoOptionsStyleForm.titleFontSize}
          onChange={(value: string) => (baseInfoOptionsStyleForm.titleFontSize = value)}
        >
          {fontSizeList.map((value: string, index: number) => (
            <Select.Option key={index} value={value} label={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label={fontWeightLabel}>
        <Select
          size='small'
          value={baseInfoOptionsStyleForm.titleFontWeight}
          onChange={(value: number) => (baseInfoOptionsStyleForm.titleFontWeight = value)}
        >
          {fontWeightList.map((value: number, index: number) => (
            <Select.Option key={index} value={value} label={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  )
}

export default CommonTitleOptions
