import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type SelfEvaluation1PropsType = {
  className: string
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SelfEvaluation1: React.FC<SelfEvaluation1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <SelfEvaluationModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </SelfEvaluationModelCom>
    </section>
  )
}

export default SelfEvaluation1
