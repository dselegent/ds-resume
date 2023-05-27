import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tooltip, Switch } from 'antd'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Transform } from '@dnd-kit/utilities'

const CptTitle = styled.p<{
  leftShowStatus: boolean
}>`
  display: ${props => (props.leftShowStatus ? 'block' : 'none')};
`

const SortableItem = styled.div<{
  transform: Transform | null
  transition: string | undefined
}>`
  transform: ${props => CSS.Transform.toString(props.transform)};
  transition: ${props => props.transition};
`

type ModelItemPropsType = {
  id: string
  sortIndex: number
  element: IMATERIALITEM
  leftShowStatus: boolean
}

const ModelItem: React.FC<ModelItemPropsType> = ({ id, sortIndex, element, leftShowStatus }) => {
  const dispatch = useAppDispatch()
  // 拖拽排序
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  })
  // // 选中的模块数据
  const selectMaterial = useAppSelector(selectorSelectMaterial)

  return (
    <SortableItem
      ref={setNodeRef}
      transform={transform}
      transition={transition}
      {...attributes}
      {...listeners}
      className={`h-15 f-b-c border border-transparent border-dashed px-3 cursor-row-resize	hover:border-primary ${
        !leftShowStatus ? 'justify-center' : ''
      }`}
      style={{
        background: selectMaterial.cptKeyId === element.keyId ? 'rgba(227, 231, 234, 0.6)' : '',
      }}
    >
      <div className='flex items-center'>
        <div className='h-7 w-7 f-c-c cursor-pointer border border-gray-400 rounded-full border-solid'>
          <Tooltip title={!leftShowStatus && element.data.title} placement='right'>
            <i className={`i-${element.data.iconfont} text-xl text-gray-400`}></i>
          </Tooltip>
        </div>
        <CptTitle
          className='ml-3 cursor-pointer text-sm text-stone-600 transition-base'
          leftShowStatus={leftShowStatus}
        >
          {element.data.title}
        </CptTitle>
      </div>
      <Switch
        size='small'
        className={`${leftShowStatus ? '' : 'hidden'}`}
        checked={element.show}
        onChange={(value: boolean) =>
          dispatch(
            changeResumeJsonComponentShow({
              index: sortIndex,
              show: value,
            })
          )
        }
      />
    </SortableItem>
  )
}

export default ModelItem
