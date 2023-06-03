import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { ICAMPUSEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type CampusExperience1PropsType = {
  className: string
  modelData: ICAMPUSEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const CampusExperience1: React.FC<CampusExperience1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <CampusExperienceModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </CampusExperienceModelCom>
    </section>
  )
}

export default CampusExperience1
