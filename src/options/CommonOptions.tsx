import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import fontSizeList from '@/dictionary/fontSizeList'
import fontWeightList from '@/dictionary/fontWeightList'
import { Form, Select, Divider, Switch, InputNumber, Slider } from 'antd'

const AntdSlider = styled(Slider)<{
  countmodel: number
}>`
  display: ${props => (props.countmodel == 1 ? 'none' : 'block')};
  margin-top: 10px;
`
const AntdInputNumber = styled(InputNumber)<{
  countmodel: number
}>`
  display: ${props => (props.countmodel == 1 ? 'block' : 'none')};
  width: 100%;
`

type CommonOptionsPropsType = {
  cptKeyId: string
  modelItem: IMATERIALITEM
}

const CommonOptions: React.FC<CommonOptionsPropsType> = ({ cptKeyId, modelItem }) => {
  const dispatch = useAppDispatch()

  // 计数器模式
  const [countModel, setCountModel] = useLocalStorageState('countModel', {
    defaultValue: 0,
  })

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
      <Form.Item label='字体颜色'>
        <ColorPicker
          color={modelItem.style.textColor}
          getColor={(value: string) => handleChangeModelStyle('textColor', value)}
        />
      </Form.Item>
      <Form.Item label='字体大小'>
        <Select
          size='small'
          value={modelItem.style.textFontSize}
          onChange={(value: string) => handleChangeModelStyle('textFontSize', value)}
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
          value={modelItem.style.textFontWeight}
          onChange={(value: number) => handleChangeModelStyle('textFontWeight', value)}
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
        <Switch size='small' onChange={(value: boolean) => setCountModel(Number(value))} checked={!!countModel} />
      </Form.Item>
      <Form.Item label='上外边距'>
        <AntdSlider
          countmodel={countModel}
          value={modelItem.style.mTop}
          onChange={(value: number) => handleChangeModelStyle('mTop', value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countmodel={countModel}
          size='small'
          value={modelItem.style.mTop}
          onChange={(value: any) => handleChangeModelStyle('mTop', value)}
        />
      </Form.Item>
      <Form.Item label='下外边距'>
        <AntdSlider
          countmodel={countModel}
          value={modelItem.style.mBottom}
          onChange={(value: number) => handleChangeModelStyle('mBottom', value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countmodel={countModel}
          size='small'
          value={modelItem.style.mBottom}
          onChange={(value: any) => handleChangeModelStyle('mBottom', value)}
        />
      </Form.Item>
      <Form.Item label='上内边距'>
        <AntdSlider
          countmodel={countModel}
          value={modelItem.style.pTop}
          onChange={(value: number) => handleChangeModelStyle('pTop', value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countmodel={countModel}
          size='small'
          value={modelItem.style.pTop}
          onChange={(value: any) => handleChangeModelStyle('pTop', value)}
        />
      </Form.Item>
      <Form.Item label='下内边距'>
        <AntdSlider
          countmodel={countModel}
          value={modelItem.style.pBottom}
          onChange={(value: number) => handleChangeModelStyle('pBottom', value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countmodel={countModel}
          size='small'
          value={modelItem.style.pBottom}
          onChange={(value: any) => handleChangeModelStyle('pBottom', value)}
        />
      </Form.Item>
      <Form.Item label='左右内边距'>
        <AntdSlider
          countmodel={countModel}
          value={modelItem.style.pLeftRight}
          onChange={(value: number) => handleChangeModelStyle('pLeftRight', value)}
          max={100}
          min={-100}
        />
        <AntdInputNumber
          countmodel={countModel}
          size='small'
          value={modelItem.style.pLeftRight}
          onChange={(value: any) => handleChangeModelStyle('pLeftRight', value)}
        />
      </Form.Item>
    </>
  )
}

export default CommonOptions
