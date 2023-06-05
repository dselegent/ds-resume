import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IWORKEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type WorkExperience1PropsType = {
  className: string
  modelData: IWORKEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorkExperience1: React.FC<WorkExperience1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <WorkExperienceModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </WorkExperienceModelCom>
    </section>
  )
}

export default WorkExperience1
