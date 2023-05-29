import React from 'react'
import BaseInfo1 from '@/material/BaseInfo/BaseInfo1'
import { Tooltip } from 'antd'

const ModelBox: React.FC = () => {
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  return (
    <section className='relative border border-transparent border-dashed transition-base'>
      {/* 模块操作区域 */}
      <aside className='absolute right-0 -top-8'>
        <Tooltip title='删除当前模块' placement='bottom'>
          <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
            <i className='i-ant-design-delete-outlined text-xl text-white'></i>
          </div>
        </Tooltip>
      </aside>
      {/* 物料渲染 */}
      <BaseInfo1
        className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
        modelData={resumeJsonData.COMPONENTS[0].data}
        modelStyle={resumeJsonData.COMPONENTS[0].style}
      />
    </section>
  )
}

export default ModelBox
