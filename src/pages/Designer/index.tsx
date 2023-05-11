import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Designer: React.FC = () => {
  // 展开或收起属性面板设置
  const [leftShowStatus, { setTrue: setLeftShowStatusTrue, setFalse: setLeftShowStatusFalse }] = useBoolean(true)
  const unfoldOrCollapseConfig = (status: boolean) => (status ? setLeftShowStatusTrue() : setLeftShowStatusFalse())

  return (
    <section className='h-screen min-w-344 w-full overflow-hidden'>
      {/* 导航栏 */}
      <DesignNav />
      {/* 内容区域 */}
      <aside className='w-full flex'>
        {/* 左侧添加模块区域 */}
        <div className={`h-[calc(100vh-60px)] transition-all bg-white ${leftShowStatus ? 'w-67.5' : 'w-17.5'}`}>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <Title unfoldOrCollapseConfig={unfoldOrCollapseConfig} />
            <ModelList leftShowStatus={leftShowStatus} />
          </Scrollbars>
        </div>
      </aside>
    </section>
  )
}

export default Designer
