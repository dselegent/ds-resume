import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'

import { Tooltip } from 'antd'

type ModelBoxPropsType = {
  components: any
  item: IMATERIALITEM
}

const ModelBox: React.FC<ModelBoxPropsType> = ({ components, item }) => {
  // 移入的组件id
  const [hoverId, setHoverId] = useSafeState('')

  return (
    <>
      {item.show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          onMouseOver={() => setHoverId(item.keyId)}
          onMouseOut={() => setHoverId('')}
          onFocus={() => void 0}
          onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside className={`absolute right-0  -top-8 ${hoverId === item.keyId ? 'block' : 'display-none'}`}>
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={components[item.cptName]}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={item.data}
            modelStyle={item.style}
          />
        </section>
      )}
    </>
  )
}

export default ModelBox
