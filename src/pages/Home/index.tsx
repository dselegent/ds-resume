import React from 'react'
import { FloatButton } from 'antd'

const Home: React.FC = () => {
  const [navColor, setNavColor] = useState('')
  const [fontColor, setFontColor] = useState('white')
  // 页面滚动改变导航栏样式
  const { run: throttleHandle } = useThrottleFn(
    () => {
      if (document.documentElement.scrollTop > 0) {
        setNavColor('white')
        setFontColor('font_color')
      } else {
        setNavColor('')
        setFontColor('white')
      }
    },
    {
      wait: 300,
    }
  )

  // 监听元素滚动
  useMount(() => {
    window.addEventListener('scroll', throttleHandle)
  })
  useUnmount(() => {
    window.removeEventListener('scroll', throttleHandle)
  })

  return (
    <>
      {/* 导航栏 */}
      <NavBar navColor={navColor} fontColor={fontColor} />
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
