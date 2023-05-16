import React from 'react'
import { Tooltip } from 'antd'

type TitleConfigPropsType = { unfoldOrCollapseConfig: Function }

const TitleConfig: React.FC<TitleConfigPropsType> = ({ unfoldOrCollapseConfig }) => {
  // 展开或收起
  const [tooltipTitle, setTooltipTitle] = useSafeState<'收起' | '展开'>('展开')
  const [showCollapse, { setTrue: setShowCollapseTrue, setFalse: setShowCollapseFalse }] = useBoolean(false)
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
      className={`relative box-border h-15 w-full f-b-c bg-white px-3 shadow ${!showCollapse && 'justify-center'}`}
    >
      <Tooltip title={tooltipTitle} placement='bottom'>
        <i
          className={`i-ant-design-menu-fold-outlined  cursor-pointer text-2xl text-primary transition-transform transition-duration-500 hover:opacity-70 ${
            showCollapse && 'rotate-180'
          }`}
          onClick={unfoldOrCollapse}
        ></i>
      </Tooltip>
      <h1 className='mx-auto h-15 text-sm font-700 lh-15 text-stone-700 letter-3'>全局主题设置</h1>
    </section>
  )
}

export default TitleConfig
