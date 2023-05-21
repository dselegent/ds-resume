import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCn from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import theme from '@/styles/antd-theme'
import Router from '@/routers'

export default function App() {
  return (
    <ConfigProvider theme={theme} locale={zhCn}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}
