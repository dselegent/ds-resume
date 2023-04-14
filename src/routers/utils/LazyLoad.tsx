import React, { Suspense } from 'react'
import { Spin } from 'antd'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const LazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense fallback={<Spin size='large' className='h-full f-c-c' />}>
      <Comp />
    </Suspense>
  )
}

export default LazyLoad
