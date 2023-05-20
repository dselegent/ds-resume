import React, { ReactNode } from 'react'
import { Tooltip, Switch } from 'antd'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

const SortableList = SortableContainer<{
  onSortEnd: Function
  children: ReactNode
}>(({ children }: { children: ReactNode }) => {
  return <section className='w-full flex-col'>{children}</section>
})

type SortableElementPropsType = {
  element: { cptTitle: string; icon: string }
  leftShowStatus: boolean
}

const SortableItem = SortableElement<SortableElementPropsType>(
  ({ element, leftShowStatus }: SortableElementPropsType) => (
    <aside
      className={`h-15 f-b-c border border-transparent border-dashed px-3 cursor-row-resize	hover:border-primary ${
        !leftShowStatus ? 'justify-center' : ''
      }`}
    >
      <div className='flex items-center'>
        <div className='h-7 w-7 f-c-c border border-gray-400 rounded-full border-solid'>
          <Tooltip title={!leftShowStatus && element.cptTitle} placement='right'>
            <i className={`i-ant-design-${element.icon} text-xl text-gray-400`}></i>
          </Tooltip>
        </div>
        {leftShowStatus && <p className='ml-3 text-sm text-stone-600'> {element.cptTitle}</p>}
      </div>
      <Switch defaultChecked size='small' className={`${leftShowStatus ? '' : 'hidden'}`} />
    </aside>
  )
)

type ModelListPropsType = { leftShowStatus: boolean }

const ModelList: React.FC<ModelListPropsType> = ({ leftShowStatus }) => {
  const [items, setItems] = useSafeState([
    {
      cptTitle: '基本资料',
      icon: 'user-outlined',
    },
    {
      cptTitle: '技能特长',
      icon: 'book-outlined',
    },
  ])

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    setItems(items => arrayMove(items, oldIndex, newIndex))
  }

  return (
    <SortableList onSortEnd={onSortEnd}>
      <i className='i-ant-design-book-outlined display-none'></i>
      {items.map((value, index) => (
        <SortableItem key={`item-${value.cptTitle}`} index={index} element={value} leftShowStatus={leftShowStatus} />
      ))}
    </SortableList>
  )
}

export default ModelList
