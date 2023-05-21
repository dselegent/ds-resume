import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Router from '@/routers'

import { ConfigProvider } from 'antd'
import theme from '@/styles/antd-theme'
import zhCn from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

export default function App() {
  return (
    <ConfigProvider theme={theme} locale={zhCn}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}
