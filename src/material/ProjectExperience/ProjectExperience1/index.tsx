import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IPROJECTEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type ProjectExperience1PropsType = {
  className: string
  modelData: IPROJECTEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const ProjectExperience1: React.FC<ProjectExperience1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <ProjectExperienceModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </ProjectExperienceModelCom>
    </section>
  )
}

export default ProjectExperience1
