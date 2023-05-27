import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import IDESIGNJSON from '@/interface/design'
import MODEL_DATA_JSON from '@/schema/modelData'
import optionsComponents from '@/utils/registerMaterialOptionsCom'

const Designer: React.FC = () => {
  const dispatch = useAppDispatch()
  // 选中的模块数据
  const selectMaterial = useAppSelector(selectorSelectMaterial)
  // 简历数据
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  let id = '1'
  let name = 'template1'
  // 重置数据方法
  const resetStoreAndLocal = async () => {
    let TEMPLATE_JSON
    const url = `${location.origin}/json/${name}.json`
    const data: IDESIGNJSON = await fetch(url).then(res => res.json())
    TEMPLATE_JSON = data
    TEMPLATE_JSON.ID = id
    TEMPLATE_JSON.NAME = name
    TEMPLATE_JSON.COMPONENTS.forEach(item => {
      item.data = MODEL_DATA_JSON[item.model]
    })
    dispatch(changeResumeJsonData(TEMPLATE_JSON)) // 更改store的数据
    console.log('简历JSON数据', resumeJsonData)
  }
  // 获取本地数据
  if (!resumeJsonData.ID) resetStoreAndLocal()

  // 内容区dom节点
  const htmlContentPdf = useRef<HTMLDivElement>(null)
  // 全局样式设置
  useEventListener(
    'click',
    () => {
      dispatch(resetSelectModel())
    },
    {
      target: htmlContentPdf,
    }
  )

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
          {/* 内容区域 */}
          <div ref={htmlContentPdf}>content</div>
        </div>
        {/* 属性设置面板 */}
        <div
          className={`transition-base h-[calc(100vh-60px)] flex-col  bg-white ${
            configShowStatus ? 'w-[597px]' : 'w-[355px]'
          }`}
        >
          <TitleConfig title={selectMaterial.cptTitle} unfoldOrCollapseConfig={unfoldOrCollapseConfig} />
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            {selectMaterial.cptName ? (
              <DynamicComponent
                is={optionsComponents[selectMaterial.cptOptionsName]}
                configShowStatus={configShowStatus}
              />
            ) : (
              <GlobalStyleOptions configShowStatus={configShowStatus} />
            )}
          </Scrollbars>
        </div>
      </aside>
    </section>
  )
}

export default Designer
