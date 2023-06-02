import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

type ModelListPropsType = { leftShowStatus: boolean }

const ModelList: React.FC<ModelListPropsType> = ({ leftShowStatus }) => {
  const dispatch = useAppDispatch()
  // 简历数据
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  // 拖拽更新
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      const datas = resumeJsonData.COMPONENTS
      const oldIndex = datas.findIndex((item: IMATERIALITEM) => item.keyId == active.id)
      const newIndex = datas.findIndex((item: IMATERIALITEM) => item.keyId == over?.id)
      dispatch(changeResumeJsonComponentSort(arrayMove(datas, oldIndex, newIndex)))
    } else {
      let data = resumeJsonData.COMPONENTS.find((item: IMATERIALITEM) => item.keyId === active.id)
      let updateData = {
        cptName: data.model,
        cptOptionsName: data.cptOptionsName,
        cptTitle: data.data.title,
        cptKeyId: data.keyId,
      }
      dispatch(updateSelectModel(updateData))
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <i className='i-ant-design-book-outlined i-ant-design-usergroup-add-outlined i-material-symbols-school-outline i-ant-design-trophy-outlined i-material-symbols-edit-note i-material-symbols-sports-baseball-outline i-material-symbols-sports-baseball-outline i-material-symbols-menu-book-outline-rounded i-material-symbols-work-history-outline i-material-symbols-library-books-outline-rounded i-material-symbols-folder-open-outline-rounded display-none'></i>
      <SortableContext items={resumeJsonData.COMPONENTS.map(i => i.keyId)} strategy={verticalListSortingStrategy}>
        {resumeJsonData.COMPONENTS.map((item: IMATERIALITEM, index) => (
          <ModelItem
            key={item.keyId}
            id={item.keyId}
            sortIndex={index}
            leftShowStatus={leftShowStatus}
            element={item}
          />
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default ModelList
