import LazyLoad from '../utils/LazyLoad'

// 首页模块
const homeRouter: RouteObject[] = [
  {
    path: '/designer',
    element: LazyLoad(lazy(() => import('@/pages/Designer'))),
    meta: {
      title: '设计',
      key: 'designer',
    },
  },
]

export default homeRouter
