import React from 'react'
import { Button, Space, Dropdown, Avatar } from 'antd'
import type { MenuProps } from 'antd'
import logo from '@/assets/logo.png'

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

  return (
    <section className='h-16 w-full f-b-c px-15'>
      <Link to='/' className='h-full flex items-center'>
        <img className='w-8' src={logo} alt='logo' />
        <span className="ml-3 font-['monospace'] text-2xl text-font_color letter-2">ds化简</span>
      </Link>
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
