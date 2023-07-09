import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tooltip } from 'antd'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Transform } from '@dnd-kit/utilities'

const Placeholder: React.FC = () => {
  return <div>Placeholder</div>
}

type ModelBoxPropsType = {
  components: any
  item: IMATERIALITEM
  id: string
}

const SortableItem = styled.div<{
  transform: Transform | null
  transition: string | undefined
}>`
  transform: ${props => CSS.Transform.toString(props.transform)};
  transition: ${props => props.transition};
`

const ModelBox: React.FC<ModelBoxPropsType> = ({ components, item, id }) => {
  // 拖拽排序
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  })

  // 移入的组件id
  const [hoverId, setHoverId] = useSafeState('')

  return (
    <SortableItem
      ref={setNodeRef}
      transform={transform}
      transition={transition}
      {...attributes}
      {...listeners}
      style={{
        background: hoverId === item.keyId ? 'rgba(227, 231, 234, 0.6)' : '',
      }}
    >
      {item.show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          onMouseOver={() => setHoverId(item.keyId)}
          onMouseOut={() => setHoverId('')}
          onFocus={() => void 0}
          onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside className={`absolute right-0 -top-8 ${hoverId === item.keyId ? 'block' : 'display-none'}`}>
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={components[item.cptName] ? components[item.cptName] : Placeholder}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={item.data}
            modelStyle={item.style}
          />
        </section>
      )}
    </SortableItem>
  )
}

export default ModelBox
