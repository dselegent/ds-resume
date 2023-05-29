import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select } from 'antd'

type CommonTitleOptionsPropsType = {
  colorLabel?: string
  fontSizeLabel?: string
  fontWeightLabel?: string
  cptKeyId: string
  modelItem: IMATERIALITEM
}

const CommonTitleOptions: React.FC<CommonTitleOptionsPropsType> = ({
  colorLabel = '标题字体颜色',
  fontSizeLabel = '标题字体大小',
  fontWeightLabel = '标题字体粗细',
  cptKeyId,
  modelItem,
}) => {
  const dispatch = useAppDispatch()

  // 更新模块样式
  const handleChangeModelStyle = (key: string, value: any) =>
    dispatch(
      changeResumeJsonModelData({
        flag: 'style',
        cptKeyId,
        key,
        value,
      })
    )

  return (
    <>
      <Form.Item label={colorLabel}>
        <ColorPicker
          color={modelItem.style.titleColor}
          getColor={(value: string) => handleChangeModelStyle('titleColor', value)}
        />
      </Form.Item>
      <Form.Item label={fontSizeLabel}>
        <Select
          size='small'
          value={modelItem.style.titleFontSize}
          onChange={(value: string) => handleChangeModelStyle('titleFontSize', value)}
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
          value={modelItem.style.titleFontWeight}
          onChange={(value: number) => handleChangeModelStyle('titleFontWeight', value)}
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
