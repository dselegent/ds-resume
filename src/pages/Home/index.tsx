import React from 'react'
import { FloatButton } from 'antd'

const Home: React.FC = () => {
  return (
    <>
      {/* 导航栏 */}
      <NavBar />
      {/* 项目介绍栏 */}
      <ProjectIntroduce />
      {/* 模板选择 */}
      <TemplateSelect />
      {/* 自定义模板 */}
      <CustomTemplate />
      {/* 回到顶部 */}
      <FloatButton.BackTop tooltip='回到顶部' />
    </>
  )
}

export default Home
