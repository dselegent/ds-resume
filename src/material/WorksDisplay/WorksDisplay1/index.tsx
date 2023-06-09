import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IWORKSDISPLAY } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type WorksDisplay1PropsType = {
  className: string
  modelData: IWORKSDISPLAY // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorksDisplay1: React.FC<WorksDisplay1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <WorksDisplayModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </WorksDisplayModelCom>
    </section>
  )
}

export default WorksDisplay1
