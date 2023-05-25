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
  const dispatch = useAppDispatch()

  // 计数器模式
  const [countModel, setCountModel] = useLocalStorageState<boolean>('countModel', {
    defaultValue: true,
  })

  // 全局样式设置
  const GLOBAL_STYLE = useAppSelector(selectorResumeJsonData).GLOBAL_STYLE
  // 更新全局样式
  const handleChangeGlobalStyle = (key: string, value: any) =>
    dispatch(
      changeResumeJsonGlobalStyleData({
        key,
        value,
      })
    )

  return (
    <section className='p-5'>
      <Form labelCol={{ span: configShowStatus ? 6 : 10 }} labelAlign='left'>
        <Form.Item label='主题颜色'>
          <ColorPicker
            color={GLOBAL_STYLE.themeColor}
            getColor={(value: string) => handleChangeGlobalStyle('themeColor', value)}
          />
        </Form.Item>
        <Form.Item label='字体选择'>
          <Select
            size='small'
            options={fontFamilyList}
            value={GLOBAL_STYLE.fontFamily}
            onChange={(value: string) => handleChangeGlobalStyle('fontFamily', value)}
            placeholder='请选择字体'
          />
        </Form.Item>
        <Form.Item label='模块标题字体大小'>
          <Select
            size='small'
            value={GLOBAL_STYLE.firstTitleFontSize}
            onChange={(value: string) => handleChangeGlobalStyle('firstTitleFontSize', value)}
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
            value={GLOBAL_STYLE.secondTitleFontSize}
            onChange={(value: string) => handleChangeGlobalStyle('secondTitleFontSize', value)}
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
            value={GLOBAL_STYLE.textFontSize}
            onChange={(value: string) => handleChangeGlobalStyle('textFontSize', value)}
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
            color={GLOBAL_STYLE.secondTitleColor}
            getColor={(value: string) => handleChangeGlobalStyle('secondTitleColor', value)}
          />
        </Form.Item>
        <Form.Item label='正文字体颜色'>
          <ColorPicker
            color={GLOBAL_STYLE.textFontColor}
            getColor={(value: string) => handleChangeGlobalStyle('textFontColor', value)}
          />
        </Form.Item>
        <Form.Item label='二级标题字体粗细'>
          <Select
            size='small'
            value={GLOBAL_STYLE.secondTitleWeight}
            onChange={(value: number) => handleChangeGlobalStyle('secondTitleWeight', value)}
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
            value={GLOBAL_STYLE.textFontWeight}
            onChange={(value: number) => handleChangeGlobalStyle('textFontWeight', value)}
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
          <Switch size='small' onChange={(value: boolean) => setCountModel(value)} checked={countModel} />
        </Form.Item>
        <Form.Item label='模块上外边距'>
          <AntdSlider
            countModel={countModel}
            value={GLOBAL_STYLE.modelMarginTop}
            onChange={(value: number) => handleChangeGlobalStyle('modelMarginTop', value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={countModel}
            size='small'
            value={GLOBAL_STYLE.modelMarginTop}
            onChange={(value: any) => handleChangeGlobalStyle('modelMarginTop', value)}
          />
        </Form.Item>
        <Form.Item label='模块下外边距'>
          <AntdSlider
            countModel={countModel}
            value={GLOBAL_STYLE.modelMarginBottom}
            onChange={(value: number) => handleChangeGlobalStyle('modelMarginBottom', value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={countModel}
            size='small'
            value={GLOBAL_STYLE.modelMarginBottom}
            onChange={(value: any) => handleChangeGlobalStyle('modelMarginBottom', value)}
          />
        </Form.Item>
        <Form.Item label='模块上内边距'>
          <AntdSlider
            countModel={countModel}
            value={GLOBAL_STYLE.pTop}
            onChange={(value: number) => handleChangeGlobalStyle('pTop', value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={countModel}
            size='small'
            value={GLOBAL_STYLE.pTop}
            onChange={(value: any) => handleChangeGlobalStyle('pTop', value)}
          />
        </Form.Item>
        <Form.Item label='模块下内边距'>
          <AntdSlider
            countModel={countModel}
            value={GLOBAL_STYLE.pBottom}
            onChange={(value: number) => handleChangeGlobalStyle('pBottom', value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={countModel}
            size='small'
            value={GLOBAL_STYLE.pBottom}
            onChange={(value: any) => handleChangeGlobalStyle('pBottom', value)}
          />
        </Form.Item>
        <Form.Item label='模块左右内边距'>
          <AntdSlider
            countModel={countModel}
            value={GLOBAL_STYLE.pLeftRight}
            onChange={(value: number) => handleChangeGlobalStyle('pLeftRight', value)}
            max={100}
            min={-100}
          />
          <AntdInputNumber
            countModel={countModel}
            size='small'
            value={GLOBAL_STYLE.pLeftRight}
            onChange={(value: any) => handleChangeGlobalStyle('pLeftRight', value)}
          />
        </Form.Item>
      </Form>
    </section>
  )
}

export default GlobalStyleOptions
