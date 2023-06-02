import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IJOBINTENTION } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type JobIntention1PropsType = {
  className: string
  modelData: IJOBINTENTION // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const JobIntention1: React.FC<JobIntention1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <JobIntentionModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </JobIntentionModelCom>
    </section>
  )
}

export default JobIntention1
