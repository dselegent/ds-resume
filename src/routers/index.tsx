import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// * 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.tsx', {
  eager: true,
})
// * 处理路由
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach(key => {
  routerArray.push(...metaRouters[key].default)
})

const rootRouter: RouteObject[] = [
  ...routerArray,
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
]

export default function Router() {
  return useRoutes(rootRouter)
}
