import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IEDUBACKGROUND } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type EduBackground1PropsType = {
  className: string
  modelData: IEDUBACKGROUND // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const EduBackground1: React.FC<EduBackground1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <EduBackgroundModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </EduBackgroundModelCom>
    </section>
  )
}

export default EduBackground1
