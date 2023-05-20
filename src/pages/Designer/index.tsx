import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Designer: React.FC = () => {
  // 展开或收起左侧栏
  const [leftShowStatus, { setTrue: setLeftShowStatusTrue, setFalse: setLeftShowStatusFalse }] = useBoolean(true)
  const unfoldOrCollapse = (status: boolean) => (status ? setLeftShowStatusTrue() : setLeftShowStatusFalse())

  // 展开或收起属性面板设置
  const [configShowStatus, { setTrue: setConfigShowStatusTrue, setFalse: setConfigShowStatusFalse }] = useBoolean(false)
  const unfoldOrCollapseConfig = (status: boolean) => (status ? setConfigShowStatusTrue() : setConfigShowStatusFalse())

  // 放大缩小center
  const [sizeCenter, setSizeCenter] = useSafeState(1)
  sizeCenter && ''

  return (
    <section className='h-screen min-w-344 w-full overflow-hidden'>
      {/* 导航栏 */}
      <DesignNav />
      {/* 内容区域 */}
      <aside className='w-full flex'>
        {/* 左侧添加模块区域 */}
        <div className={`transition-base h-[calc(100vh-60px)]  bg-white ${leftShowStatus ? 'w-67.5' : 'w-17.5'}`}>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <Title unfoldOrCollapse={unfoldOrCollapse} />
            <ModelList leftShowStatus={leftShowStatus} />
          </Scrollbars>
        </div>
        {/* 预览区域 */}
        <div className='h-[calc(100vh-60px)] min-w-210 flex-1 overflow-auto'>
          {/* 放大缩小 */}
          <ZoomAndOut setSizeCenter={setSizeCenter} />
        </div>
        {/* 属性设置面板 */}
        <div
          className={`transition-base h-[calc(100vh-60px)] flex-col  bg-white ${
            configShowStatus ? 'w-[597px]' : 'w-[355px]'
          }`}
        >
          <TitleConfig unfoldOrCollapseConfig={unfoldOrCollapseConfig} />
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            {/* <GlobalStyleOptions configShowStatus={configShowStatus} /> */}
            <BaseInfoOptions />
          </Scrollbars>
        </div>
      </aside>
    </section>
  )
}

export default Designer
