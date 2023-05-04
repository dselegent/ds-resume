import React from 'react'
import type { TemplateSelectHandle } from './components/TemplateSelect'
import type { CustomTemplateHandle } from './components/CustomTemplate'
import { FloatButton } from 'antd'

const Home: React.FC = () => {
  // 点击免费制作
  const TemplateSelectComRef = useRef<TemplateSelectHandle>(null)
  const toTemplateSelect = () => TemplateSelectComRef.current?.toTemplateSelect?.()

  // 点击自定义模板
  const CustomTemplateComRef = useRef<CustomTemplateHandle>(null)
  const toCustomTemplate = () => CustomTemplateComRef.current?.toCustomTemplate?.()

  return (
    <>
      {/* 导航栏 */}
      <NavBar />
      {/* 项目介绍栏 */}
      <ProjectIntroduce toTemplateSelect={toTemplateSelect} toCustomTemplate={toCustomTemplate} />
      {/* 模板选择 */}
      <TemplateSelect ref={TemplateSelectComRef} />
      {/* 自定义模板 */}
      <CustomTemplate ref={CustomTemplateComRef} />
      {/* 回到顶部 */}
      <FloatButton.BackTop tooltip='回到顶部' />
    </>
  )
}

export default Home
