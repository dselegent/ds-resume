import React from 'react'
import type { IMATERIALITEM } from '@/interface/material'
import ModelBox from './ModelBox'
import MaterialComponents from '@/utils/registerMaterialCom' // 所有物料组件
import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const Custom: React.FC = () => {
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
    <section>
      {resumeJsonData.LAYOUT === 'classical' && (
        <div className='box-border min-h-290 min-w-205 w-205 bg-white'>
          <DndContext onDragEnd={handleDragEnd}>
            <i className='i-ant-design-book-outlined i-ant-design-usergroup-add-outlined i-material-symbols-school-outline i-ant-design-trophy-outlined i-material-symbols-edit-note i-material-symbols-sports-baseball-outline i-material-symbols-sports-baseball-outline i-material-symbols-menu-book-outline-rounded i-material-symbols-work-history-outline i-material-symbols-library-books-outline-rounded i-material-symbols-folder-open-outline-rounded display-none'></i>
            <SortableContext items={resumeJsonData.COMPONENTS.map(i => i.keyId)} strategy={verticalListSortingStrategy}>
              {resumeJsonData.COMPONENTS.map((item: IMATERIALITEM) => (
                <div className='list-group-item cursor-move' key={item.keyId}>
                  <ModelBox components={MaterialComponents} item={item} id={item.keyId} />
                </div>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </section>
  )
}

export default Custom
