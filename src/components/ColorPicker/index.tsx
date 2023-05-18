import React from 'react'
import { SketchPicker } from 'react-color'
import { Tooltip } from 'antd'

// 颜色列表
const colorList = [
  {
    rgb: 'rgb(37,70,101)',
    hex: '#254665',
  },
  {
    rgb: 'rgb(221,65,94)',
    hex: '#dd415e',
  },
  {
    rgb: 'rgb(150,122,91)',
    hex: '#967a5b',
  },
  {
    rgb: 'rgb(51,144,205)',
    hex: '#3390cd',
  },
  {
    rgb: 'rgb(245,79,79)',
    hex: '#f54f4f',
  },
  {
    rgb: 'rgb(77,77,77)',
    hex: '#4d4d4d',
  },
  {
    rgb: 'rgb(170,132,96)',
    hex: '#aa8460',
  },
  {
    rgb: 'rgb(118,186,49)',
    hex: '#76ba31',
  },
  {
    rgb: 'rgb(100,126,201)',
    hex: '#647ec9',
  },
]

// 颜色按钮
const ColorItem = styled.span<{
  color: string
}>`
  background-color: ${props => props.color};
`

type ColorPickerPropsType = {
  color: string
  /* eslint-disable */
  getColor?: (color: string) => void
}

// 主题颜色选择组件
const ColorPicker: React.FC<ColorPickerPropsType> = ({ color, getColor }) => {
  const [displayColorPicker, { toggle: toggleDisplayColorPicker, setFalse: setDisplayColorPickerFalse }] =
    useBoolean(false)

  // 颜色选择器颜色改变
  const changeColorPicker = (color: any) => {
    setCurentIndex(-1)
    getColor?.(color.hex)
  }

  // 更改主题色
  const [curentIndex, setCurentIndex] = useSafeState(-1)
  const changeTheme = (index: number, color: { rgb: string; hex: string }) => {
    setCurentIndex(index)
    getColor?.(color.hex)
  }

  return (
    <section className='h-15 flex flex-wrap content-between'>
      <aside>
        <Tooltip title='自定义主题颜色' placement='bottom'>
          <div className='h-6.5 w-7.5 f-c-c rounded-full'>
            <ColorItem
              className='h-3.5 w-3.5 cursor-pointer rounded-full'
              color={color}
              onClick={toggleDisplayColorPicker}
            />
          </div>
        </Tooltip>
        {displayColorPicker && (
          <div className='absolute z-2'>
            <div className='fixed inset-0' onClick={setDisplayColorPickerFalse}></div>
            <SketchPicker color={color} onChange={changeColorPicker} />
          </div>
        )}
      </aside>
      {colorList.map((item, index) => (
        <aside key={item.hex} className='h-6.5 w-7.5 f-c-c rounded-full'>
          <ColorItem
            color={item.hex}
            className={`h-4.5 w-4.5 cursor-pointer rounded-full ${
              (color === item.hex || curentIndex === index) && 'shadow-[0_0_10px_rgb(99,100,99)]'
            }`}
            onClick={() => changeTheme(index, item)}
          />
        </aside>
      ))}
    </section>
  )
}

export default ColorPicker
