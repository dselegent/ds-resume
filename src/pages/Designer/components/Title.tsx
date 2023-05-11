import React from 'react'
import { Tooltip } from 'antd'

type TitlePropsType = { unfoldOrCollapseConfig: Function }

const Title: React.FC<TitlePropsType> = ({ unfoldOrCollapseConfig }) => {
  // 展开或收起
  const [tooltipTitle, setTooltipTitle] = useState<'收起' | '展开'>('收起')
  const [showCollapse, { setTrue: setShowCollapseTrue, setFalse: setShowCollapseFalse }] = useBoolean(true)
  const unfoldOrCollapse = () => {
    if (showCollapse) {
      setShowCollapseFalse()
      setTooltipTitle('展开')
    } else {
      setShowCollapseTrue()
      setTooltipTitle('收起')
    }
    unfoldOrCollapseConfig(!showCollapse)
  }

  return (
    <section
      className={`relative box-border h-15 w-full f-b-c bg-white px-3 shadow-sm ${!showCollapse && 'justify-center'}`}
    >
      {showCollapse && <h1 className='h-15 text-sm font-700 lh-15 text-stone-700 letter-3'>模块选择</h1>}
      <Tooltip title={tooltipTitle} placement='bottom'>
        <i
          className={`i-ant-design-menu-fold-outlined  cursor-pointer text-2xl text-primary transition-transform transition-duration-500 hover:opacity-70 ${
            !showCollapse && 'rotate-180'
          }`}
          onClick={unfoldOrCollapse}
        ></i>
      </Tooltip>
    </section>
  )
}

export default Title
