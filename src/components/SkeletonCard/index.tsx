import React from 'react'
import { Skeleton } from 'antd'

const SkeletonCard: React.FC = () => {
  return (
    <section className='mb-10 h-110 w-75 flex basis-[fit-content] flex-col overflow-hidden rounded'>
      <Skeleton.Image
        active
        style={{
          width: '300px',
          height: '400px',
        }}
      />
      <Skeleton active title={{ width: '100%' }} />
    </section>
  )
}

export default SkeletonCard
