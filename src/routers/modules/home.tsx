import React from 'react'
import Home from '@/pages/Home'

// 首页模块
const homeRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      title: '首页',
      key: 'home',
    },
  },
]

export default homeRouter
