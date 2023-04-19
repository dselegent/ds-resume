import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import theme from '@/styles/antd-theme'
import Router from '@/routers'

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}
