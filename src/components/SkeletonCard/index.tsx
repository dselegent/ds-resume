import React from 'react'
import { Skeleton } from 'antd'

const SkeletonImage = styled(Skeleton.Image)`
  :where(.css-dev-only-do-not-override-ipqtsk).ant-skeleton.ant-skeleton-element .ant-skeleton-image {
    width: 300px;
    height: 400px;
  }
`

const SkeletonCard: React.FC = () => {
  return (
    <section className='mb-10 h-110 w-75 flex basis-[fit-content] flex-col overflow-hidden rounded'>
      <SkeletonImage active />
      <Skeleton active title={{ width: '100%' }} />
    </section>
  )
}

export default SkeletonCard
