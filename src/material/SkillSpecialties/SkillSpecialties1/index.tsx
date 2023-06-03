import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { ISKILLSPECIALTIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type SkillSpecialties1PropsType = {
  className: string
  modelData: ISKILLSPECIALTIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SkillSpecialties1: React.FC<SkillSpecialties1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <SkillSpecialtiesModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </SkillSpecialtiesModelCom>
    </section>
  )
}

export default SkillSpecialties1
