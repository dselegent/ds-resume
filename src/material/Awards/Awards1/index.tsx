import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IAWARDS } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type Awards1PropsType = {
  className: string
  modelData: IAWARDS // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const Awards1: React.FC<Awards1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <AwardsModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </AwardsModelCom>
    </section>
  )
}

export default Awards1
