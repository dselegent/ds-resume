import React from 'react'
import { Button, Space, Dropdown, Avatar } from 'antd'
import type { MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span className='hover:text-primary'>个人中心</span>,
  },
  {
    key: '2',
    label: <span className='hover:text-primary'>退出登录</span>,
  },
]

const NavBar: React.FC = () => {
  const [isLogin] = useBoolean(true)

  // 页面滚动改变导航栏样式
  const [navColor, setNavColor] = useSafeState('')
  const [fontColor, setFontColor] = useSafeState('white')
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
    <section className={'fixed z-10 h-16 w-full f-b-c  px-15 transition-colors ' + `bg-${navColor}`}>
      <LogoCom fontColor={fontColor} />
      <aside>
        {isLogin ? (
          <Space size={12}>
            <Button>注册</Button>
            <Button type='primary'>登录</Button>
          </Space>
        ) : (
          <Dropdown menu={{ items }} placement='bottom' arrow>
            <Avatar size={45}>头像</Avatar>
          </Dropdown>
        )}
      </aside>
    </section>
  )
}

export default NavBar
