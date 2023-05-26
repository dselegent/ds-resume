import React, { ReactNode } from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { Tooltip, Switch } from 'antd'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

const CptTitle = styled.p<{
  leftShowStatus: boolean
}>`
  display: ${props => (props.leftShowStatus ? 'block' : 'none')};
`

const SortableList = SortableContainer<{
  onSortEnd: Function
  children: ReactNode
}>(({ children }: { children: ReactNode }) => {
  return <section className='w-full flex-col'>{children}</section>
})

type SortableElementPropsType = {
  element: IMATERIALITEM & { index: number }
  leftShowStatus: boolean
}

const SortableItem = SortableElement<SortableElementPropsType>(
  ({ element, leftShowStatus }: SortableElementPropsType) => {
    const dispatch = useAppDispatch()
    // 选中的模块数据
    const selectMaterial = useAppSelector(selectorSelectMaterial)

    // 选中模块
    const selectModel = (item: IMATERIALITEM) => {
      let optionsName: string = item.cptOptionsName
      let updateData = {
        cptName: item.model,
        cptOptionsName: optionsName,
        cptTitle: item.data.title,
        cptKeyId: item.keyId,
      }
      dispatch(updateSelectModel(updateData))
    }

    return (
      <div
        className={`h-15 f-b-c border border-transparent border-dashed px-3 cursor-row-resize	hover:border-primary ${
          !leftShowStatus ? 'justify-center' : ''
        }`}
        style={{
          background: selectMaterial.cptKeyId === element.keyId ? 'rgba(227, 231, 234, 0.6)' : '',
        }}
        onClick={() => selectModel(element)}
      >
        <div className='flex items-center'>
          <div className='h-7 w-7 f-c-c border border-gray-400 rounded-full border-solid'>
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
                index: element.index,
                show: value,
              })
            )
          }
        />
      </div>
    )
  }
)

type ModelListPropsType = { leftShowStatus: boolean }

const ModelList: React.FC<ModelListPropsType> = ({ leftShowStatus }) => {
  const dispatch = useAppDispatch()

  // 简历数据
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    // setItems(items => arrayMove(resumeJsonData.COMPONENTS, oldIndex, newIndex))
    dispatch(changeResumeJsonComponentSort(arrayMove(resumeJsonData.COMPONENTS, oldIndex, newIndex)))
  }

  return (
    <SortableList onSortEnd={onSortEnd}>
      <i className='i-ant-design-book-outlined i-ant-design-usergroup-add-outlined display-none'></i>
      {resumeJsonData.COMPONENTS.map((value, index) => (
        <SortableItem key={value.keyId} index={index} element={{ ...value, index }} leftShowStatus={leftShowStatus} />
      ))}
    </SortableList>
  )
}

export default ModelList
