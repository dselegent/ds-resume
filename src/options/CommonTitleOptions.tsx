import React from 'react'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select } from 'antd'

type CommonTitleOptionsPropsType = {
  colorLabel?: string
  fontSizeLabel?: string
  fontWeightLabel?: string
  commonTitleOptionsStyleForm: any
}

const CommonTitleOptions: React.FC<CommonTitleOptionsPropsType> = ({
  colorLabel = '标题字体颜色',
  fontSizeLabel = '标题字体大小',
  fontWeightLabel = '标题字体粗细',
  commonTitleOptionsStyleForm,
}) => {
  return (
    <>
      <Form.Item label={colorLabel}>
        <ColorPicker
          color={commonTitleOptionsStyleForm.titleColor}
          getColor={(value: string) => (commonTitleOptionsStyleForm.titleColor = value)}
        />
      </Form.Item>
      <Form.Item label={fontSizeLabel}>
        <Select
          size='small'
          value={commonTitleOptionsStyleForm.titleFontSize}
          onChange={(value: string) => (commonTitleOptionsStyleForm.titleFontSize = value)}
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
          value={commonTitleOptionsStyleForm.titleFontWeight}
          onChange={(value: number) => (commonTitleOptionsStyleForm.titleFontWeight = value)}
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
