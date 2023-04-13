import React from 'react'
import lazyLoad from '@/routers/utils/LazyLoad'

// 错误页面模块
const errorRouter: RouteObject[] = [
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/components/NotFound'))),
    meta: {
      title: '404页面',
      key: '404',
    },
  },
]

export default errorRouter
